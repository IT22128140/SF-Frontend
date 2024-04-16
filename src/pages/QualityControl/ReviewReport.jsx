import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import SearchBar from "../../components/SearchBar";
import TableView from '../../components/table/TableView'
import AcceptButton from "../../components/button2/AcceptButton";
import EditButton from "../../components/button2/EditButton";
import DeleteButton from "../../components/button2/DeleteButton";

const ReviewReport = () => {
  const [productReviews, setProductReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const headers = ['Product Code', 'Inspection Result', 'Review Date', 'Defects', 'Operations']
  
  useEffect(() => {
    setLoading(true);
    axios
  .get('http://localhost:5555/qualityControl/productReview')
  .then((response) => {
    setProductReviews(response.data.data);
    setLoading(false);
  })
  .catch((error) => {
    console.log(error);
    setLoading(false);
  });
}, []);
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center '>
        <h1 className='text-3xl my-8'>Review List </h1>
      </div>

      <SearchBar placeholder={"Enter Product Code"} />
    {loading ? (
        <Spinner />
    ) : (

        <table className='min-w-full'>
            <TableView headers={headers} />
            <tbody>
                {productReviews && productReviews.map((productReview, index) => (
                    <tr key={productReview._id} className='h-8'>
                        
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productReview.productCode}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productReview.inspectionResult}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productReview.reviewDate}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productReview.defects}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/qualityControl/reviewRequest/edit`}>
                                    <BsInfoCircle className='text-2xl text-green-800' />
                                </Link>
                                <Link to={`/qualityControl/reviewRequest/edit`}>
                                    <BsInfoCircle className='text-2xl text-yellow-600' />
                                </Link>
                                <Link to={`/qualityControl/reviewRequest/delete`}>
                                    <BsInfoCircle className='text-2xl text-red-800' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        


        
    )}

       
    </div>
  );
};

export default ReviewReport;