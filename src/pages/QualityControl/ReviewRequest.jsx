import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import QENavbar from "../../components/navbar/staffheader/QENavbar";
import SearchBar from "../../components/SearchBar";
import TableView from '../../components/table/TableView';
import AcceptButton from "../../components/button2/AcceptButton";
import EditButton from "../../components/button2/EditButton";
import DeleteButton from "../../components/button2/DeleteButton";

const ReviewRequest = () => {
  const [productRequests, setProductRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const headers = ['Product Code', 'Quantity', 'RequestedDate', 'Accept Status', 'Operations']
  
  useEffect(() => {
    setLoading(true);
    axios
  .get('http://localhost:5555/qualityControl/productRequest')
  .then((response) => {
    setProductRequests(response.data.data);
    setLoading(false);
  })
  .catch((error) => {
    console.log(error);
    setLoading(false);
  });
}, []);
  return (
    <div className='p-4'>
      <QENavbar
        home={true}   // Set to true to highlight the "Home" button
        cel={false}   // Set to true to highlight the "Current Employees' List" button
        rel={false}   // Set to true to highlight the "Resigned Employees' List" button
        fel={false}   // Set to true to highlight the "Fired Employees' List" button
        att={false}   // Set to true to highlight the "Attendance" button
        sal={false}   // Set to true to highlight the "Salary" button
      />
      <div className='p-4'>
      <h1 className='text-3xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'orange' }}>Review Request For Quality Evaluation</h1>
      

      <SearchBar placeholder={"Enter Product Code"} />
    {loading ? (
        <Spinner />
    ) : (

        <table className='min-w-full'>
            <TableView headers={headers} />
            <tbody>
                {productRequests && productRequests.map((productRequest, index) => (
                    <tr key={productRequest._id} className='h-8'>
                        
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productRequest.productCode}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productRequest.quantity}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productRequest.requestedDate}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {productRequest.inspectionStatus}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/qualityControl/reviewRequest/edit/${productRequest._id}`}>
                                  <AcceptButton className='mr-2'>
                                    Accept Product
                                  </AcceptButton>
                                </Link>
                                <Link to={`/qualityControl/reviewRequest/edit/${productRequest._id}`}>
                                  <EditButton className='mr-2'>
                                    Edit
                                  </EditButton>
                                </Link>
                                <Link to={`/qualityControl/reviewRequest/delete/${productRequest._id}`}>
                                  <DeleteButton className='mr-2'>
                                    Delete
                                  </DeleteButton>
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
            
    )}

    <EditButton children='' />

    </div>   
    </div>
  );
};

export default ReviewRequest;