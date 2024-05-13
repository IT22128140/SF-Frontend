import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import SearchBar from "../../components/searchBar2";
import TableView from '../../components/table/TableView'
import Button from "../../components/button/Button";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import QENavbar from "../../components/navbar/staffheader/QENavbar";
import EditButton from "../../components/button2/EditButton";
import DeleteButton from "../../components/button2/DeleteButton";

const ReviewActionReject = () => {
  const [productReviews, setProductReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const headers = ['Review Id','Product Code', 'Fabric Type', 'Color', 'Stitching Type', 'Quantity','Inspection Result', 'Defects', 'Operations']
  
  useEffect(() => {
    setLoading(true);
    axios
  .get('http://localhost:5555/qualityControl/productReview/reject')
  .then((response) => {
    setProductReviews(response.data.data);
    setLoading(false);
  })
  .catch((error) => {
    console.log(error);
    setLoading(false);
  });
}, []);

const itemCountMap = {};
productReviews.forEach((request) => {
    if (request.productCode) {
      const productCode = request.productCode.toLowerCase();
      itemCountMap[productCode] = (itemCountMap[productCode] || 0) + 1;
    }
  });

  
  const filteredRequests = productReviews.filter((v) => v.productCode && v.productCode.toLowerCase().includes(search.toLowerCase()));
  const itemCount = filteredRequests.length;
  const totalItemCount = productReviews.length;

  return (
    <div className='p-4'>
        <QENavbar
        home={false}
        cel={false}
        rel={false}
        fel={true}
        att={false}
        sal={false}
      />
      <h1 className='text-5xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'brown' }}>Product Review List</h1>

      <div className = 'flex justify-between items-center m-5 font-BreeSerif'>
        <Link to = '/qualityControl/reviewReport'>
          <button className = 'p-2 bg-ternary m-8 text-white rounded-xl'>All Review</button>
        </Link>
        <Link to = '/qualityControl/reviewReport/actionRelease'>
          <button className = 'p-2 bg-ternary m-8 text-white rounded-xl'>Pending Release</button>
        </Link>
        <Link to = '/qualityControl/reviewReport/actionReject'>
          <button className = 'p-2 bg-ternary m-8 text-white rounded-xl'>Notify Rejects</button>
        </Link>
      </div>

      <SearchBar placeholder={"Enter the Product code"} onSearch={setSearch} />
    {loading ? (
        <Spinner />
    ) : (
      <div>
        <table className='mx-auto font-BreeSerif mb-5 bg-white'>
            <TableView headers={headers} />
            <tbody>
                {productReviews && filteredRequests.map((productReview, index) => (
                    <tr key={productReview._id} className='h-8'>
                        
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productReview.reviewId}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productReview.productCode}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productReview.fabricType}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productReview.color}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productReview.stitchingType}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productReview.quantity}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productReview.inspectionResult}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productReview.defects}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                            <Link to={`/qualityControl/rejectProduct/addrejectProduct/${productReview._id}`}>
                                <Button className='mr-2'>
                                    Notify
                                </Button>
                            </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="text-center mt-4 mb-8">
            <p>Total Items: {totalItemCount}</p>
            <p>Total Items Matching "{search}": {itemCount}</p>
        </div>
        


     </div>   
    )}
<div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>
<div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>
<div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>
<StaffFooter />   
    </div>
  );
};

export default ReviewActionReject;