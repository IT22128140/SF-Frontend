import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import QENavbar from "../../components/navbar/staffheader/QENavbar";
import PMHeader from '../../components/navbar/PMHeader';

import TableView from '../../components/table/TableView';
import Button from "../../components/button/Button.jsx";
import EditButton from "../../components/button2/EditButton";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import DeleteButton from "../../components/button2/DeleteButton";


const GarmentProductList = () => {
  const [productLists, setProductLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);

  const headers = ['Product Code','Fabric Type','Color', 'Stitching Type','Quantity', 'Operations'];
  
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/garmentProduct')
      .then((response) => {
        setProductLists(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


  return (
    <div className='p-4'>
      <PMHeader />
      <div className='p-4'>
        <h1 className='text-3xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'brown' }}>Redmi's Part</h1>
        </div>
        
        {loading ? (
          <Spinner />
        ) : (
          <div> 
          <table className='min-w-full'>
            <TableView headers={headers} />
            <tbody>
              {productLists && productLists.map((productList, index) => (
                <tr key={productList._id} className='h-8'>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {productList.productCode}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {productList.fabricType}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {productList.color}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {productList.stitchingType}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {productList.quantity}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    <div className='flex justify-center gap-x-4'>
                      <Link to={`/qualityControl/reviewRequest/add/${productList._id}`}>
                        <Button className='mr-2'>
                          Review Request
                        </Button>
                      </Link>
                      <Link to={`/sfProduct/edit/${productList._id}`}>
                        <EditButton className='mr-2'>
                          Edit
                        </EditButton>
                      </Link>
                      <Link to={`#`}>
                      <DeleteButton className='mr-2' >
                        Delete
                      </DeleteButton>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          
          
          
        </div>
      )}
      <div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>
      
      <StaffFooter />
    </div>
  );
};

export default GarmentProductList;
