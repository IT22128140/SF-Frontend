import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import PMHeader from '../../components/navbar/staffheader/PMHeader';
import QENavbar from "../../components/navbar/staffheader/QENavbar";
import Button from '../../components/button/Button';
import BackButton from '../../components/button/BackButton';
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import { FormProvider, useForm } from 'react-hook-form';

const AddReReview = () => {
  const [productCode, setProductCode] = useState('');
  const [fabricType, setFabricType] = useState('');
  const [color, setColor] = useState('');
  const [stitchingType, setStitchingType] = useState('');
  const [quantity, setQuantity] = useState('');


  const [loading, setLoading ] = useState(false);
  const navigate  = useNavigate();
  const { enqueueSnackBar } = useSnackbar();
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/qualityControl/rejectedProduct/${id}`)
    .then((response) => {
      console.log(response.data);
      setProductCode(response.data.productCode);
      setFabricType(response.data.fabricType);
      setColor(response.data.color);
      setStitchingType(response.data.stitchingType);
      setQuantity(response.data.quantity);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
    });

  }, []);


  const handleAddFinalProduct = () => {
    const data = {
      productCode,
      fabricType,
      color,
      stitchingType,
      quantity,

    };
    setLoading(true);
    axios
      .post('http://localhost:5555/qualityControl/productRequest', data)
      .then(() => {
        setLoading(false);
        alert('Review Request updated successfully');
        navigate('/qualityControl/rejectProduct'); //need to change
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        console.log(error);
      });
  };



  return (
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <PMHeader />
      <h1 className='text-5xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'brown' }}>Request For Quality Evaluation</h1>
      <div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>

      {loading ? <Spinner/> : ''}
        <div
          className='flex flex-col bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif'
        >
          <div className='my-2'>
            <label className='text-xl mr-4'>Product Code</label>
            <textarea
            className='drop-shadow-md px-4 py-2 w-full h-10'
            type='text'
            id='productCode'
            name='productCode'
            placeholder='Enter ProductCode'
            value={productCode}
            readOnly = {true}
            onChange={(e) => setProductCode(e.target.value)}
            validation={{ required: 'Product Code is required' }}
            />
          </div>

          <div className='my-2'>
            <label className='text-xl mr-4'>Fabric Type</label>
            <textarea
            className='drop-shadow-md px-4 py-2 w-full h-10'
            type='text'
            id='fabricType'
            name='fabricType'
            placeholder='Enter Fabric Type'
            value={fabricType}
            readOnly = {true}
            onChange={(e) => setFabricType(e.target.value)}
            validation={{ required: 'Fabric Type is required' }}
            />
          </div>

          <div className='my-2'>
            <label className='text-xl mr-4'>Color</label>
            <textarea
            className='drop-shadow-md px-4 py-2 w-full h-10'
            type='text'
            id='color'
            name='color'
            placeholder='Enter color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            validation={{ required: 'Color is required' }}
            />
          </div>

          <div className='my-2'>
            <label className='text-xl mr-4'>Stitching Type</label>
            <textarea
            className='drop-shadow-md px-4 py-2 w-full h-10'
            type='text'
            id='stitchingType'
            name='stitchingType'
            placeholder='Enter Stitching Type'
            value={stitchingType}
            readOnly = {true}
            onChange={(e) => setStitchingType(e.target.value)}
            validation={{ required: 'Stitching Type is required' }}
            />
          </div>

          <div className='my-2'>
            <label className='text-xl mr-4'>Quantity</label>
            <textarea
            className='drop-shadow-md px-4 py-2 w-full h-10'
            type='text'
            id='quantity'
            name='quantity'
            placeholder='Enter Quantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            validation={{ required: 'Quantity is required' }}
            />
          </div>

          <button className= 'p-2 bg-black m-8 text-white rounded-xl' onClick={handleAddFinalProduct}>Request Quality Evaluation</button>
        </div>
        <div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>
        <div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>
        <StaffFooter />
    </div>
  )
}

export default AddReReview;
