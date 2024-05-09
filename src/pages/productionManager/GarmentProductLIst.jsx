import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import PMHeader from '../../components/navbar/staffheader/PMHeader';

import TableView from '../../components/table/TableView';
import Button from "../../components/button/Button.jsx";
import EditButton from "../../components/button2/EditButton";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import DeleteButton from "../../components/button2/DeleteButton";
import AddButton from "../../components/button2/AddButton.jsx";

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
    <div className='relative'>
      <PMHeader qr={true} />
      <div className='w-full h-full bg-fixed bg-no-repeat bg-bgimg' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <center>
        <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
          Garment Product List
        </h1>
      </center>
      <div className = 'flex justify-between items-center m-5'>
        <Link to= '/sfProduct/Add'>
         <AddButton/>
        </Link>
      </div> 
        {loading ? (
          <Spinner />
        ) : (
          <div> 
          <table className='mx-auto font-BreeSerif mb-5 bg-white'>
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
                        <EditButton/>
                      </Link>
                      <Link to={`#`}>
                        <DeleteButton/>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
        </div>
      )}
      <div className="h-40 mt-10 ml-5"></div>
      </div>
      <StaffFooter />
    </div>
  );
};

export default GarmentProductList;
