import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import TableView from '../../components/table/TableView';
import Button from "../../components/button/Button";
import PMHeader from '../../components/navbar/staffheader/PMHeader';


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
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bgimg' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <PMHeader />
      <h1 className='text-5xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'brown' }}>Rejected Product in Quality Evaluation</h1>
      <div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>

      
    {loading ? (
        <Spinner />
    ) : (

        <table className='mx-auto font-BreeSerif mb-5 bg-white'>
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
                            <Link to={`/qualityControl/rejectProduct/rereview/${rejectedProduct._id}`}>
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
    <div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>
    <div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>

<StaffFooter />  
    </div>
  );
};

export default RejectProduct