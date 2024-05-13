import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import SearchBar from "../../components/searchBar2";
import QENavbar from "../../components/navbar/staffheader/QENavbar";
import TableView from '../../components/table/TableView'
import Button from "../../components/button/Button";
import EditButton from "../../components/button2/EditButton";
import DeleteButton from "../../components/button2/DeleteButton";

const PendingReview = () => {
  const [productRequests, setProductRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const headers = ['Request Id', 'Product Code','Fabric Type','Color', 'Stitching Type','Quantity', 'Inspection Status', 'Operations']
  
  useEffect(() => {
      setLoading(true);
      axios
          .get('http://localhost:5555/qualityControl/productRequest/pendingReview')
          .then((response) => {
            setProductRequests(response.data.data);
              setLoading(false);
          })
          .catch((error) => {
              console.log(error);
              setLoading(false);
          });
  }, [])

  const itemCountMap = {};
  productRequests.forEach((request) => {
    if (request.productCode) {
      const productCode = request.productCode.toLowerCase();
      itemCountMap[productCode] = (itemCountMap[productCode] || 0) + 1;
    }
  });

  
  const filteredRequests = productRequests.filter((v) => v.productCode && v.productCode.toLowerCase().includes(search.toLowerCase()));
  const itemCount = filteredRequests.length;
  const totalItemCount = productRequests.length;

  return (
    <div className='p-4'>
        <QENavbar
        home={true}
        cel={false}
        rel={false}
        fel={false}
        att={false}
        sal={false}
      />
      <h1 className='text-3xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'brown' }}>Pending Review For Quality Evaluation</h1>

    
      <SearchBar placeholder={"Enter the Product code"} onSearch={setSearch} />
    {loading ? (
        <Spinner />
    ) : (
        <div>
        <table className='min-w-full'>
            <TableView headers={headers} />
            <tbody>
                {productRequests && filteredRequests.map((productRequest, index) => (
                    <tr key={productRequest._id} className='h-8'>
                        
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productRequest.requestId}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productRequest.productCode}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productRequest.fabricType}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productRequest.color}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productRequest.stitchingType}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productRequest.quantity}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productRequest.inspectionStatus}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                            <Link to={`/qualityControl/reviewRepor/addReview/${productRequest._id}`}>
                                <Button className='mr-2' >
                                    Add Review
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
        <div className="text-center font-bold mt-4 mb-8">
            {Object.entries(itemCountMap).map(([productCode, count]) => (
              count > 1 && <p key={productCode}>"{productCode}" Product Code is repeting</p>
            ))}
        </div>
    </div>    
    )}

</div>
  );
};

export default PendingReview