import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import SearchBar from "../../components/searchBar2";
import TableView from '../../components/table/TableView';
import QENavbar from "../../components/navbar/staffheader/QENavbar";
import Button from "../../components/button/Button";
import EditButton from "../../components/button2/EditButton";
import DeleteButton from "../../components/button2/DeleteButton";
import PMHeader from '../../components/navbar/PMHeader';


const RejectProduct = () => {
  const [rejectedProducts, setRejectedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const headers = ['Reject ID', 'Product Code', 'Fabric Type', 'Color', 'Stitching Type', 'Quantity', 'Defects', 'Operations']
  
  useEffect(() => {
    setLoading(true);
    axios
  .get('http://localhost:5555/qualityControl/rejectedProduct')
  .then((response) => {
    setRejectedProducts(response.data.data);
    setLoading(false);
  })
  .catch((error) => {
    console.log(error);
    setLoading(false);
  });
}, []);

const itemCountMap = {};
rejectedProducts.forEach((request) => {
    if (request.productCode) {
      const productCode = request.productCode.toLowerCase();
      itemCountMap[productCode] = (itemCountMap[productCode] || 0) + 1;
    }
  });

  
  const filteredRequests = rejectedProducts.filter((v) => v.productCode && v.productCode.toLowerCase().includes(search.toLowerCase()));
  const itemCount = filteredRequests.length;
  const totalItemCount = rejectedProducts.length;

  return (
    <div className='p-4'>
      <PMHeader />
      <h1 className='text-3xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'brown' }}>Rejected Product in Quality Evaluation</h1>
      

      <SearchBar placeholder={"Enter the Product code"} onSearch={setSearch} />
    {loading ? (
        <Spinner />
    ) : (

        <table className='min-w-full'>
            <TableView headers={headers} />
            <tbody>
                {rejectedProducts && filteredRequests.map((rejectedProduct, index) => (
                    <tr key={rejectedProduct._id} className='h-8'>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {rejectedProduct.rejectId}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {rejectedProduct.productCode}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {rejectedProduct.fabricType}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {rejectedProduct.color}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {rejectedProduct.stitchingType}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {rejectedProduct.quantity}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {rejectedProduct.defects}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                            <Link to={`#`}>
                                <Button className='mr-2'>
                                    Re-review
                                </Button>
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

export default RejectProduct