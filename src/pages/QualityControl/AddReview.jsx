import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/form/Input';
import { useForm, FormProvider } from 'react-hook-form'; // Importing useForm and FormProvider
import { useSnackbar } from 'notistack';
import QENavbar from "../../components/navbar/staffheader/QENavbar";
import BackButton from '../../components/button/BackButton';
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import Select from '../../components/form/Select';


const AddReview = () => {

  const [productCode, setProductCode] = useState('');
  const [fabricType, setFabricType] = useState('');
  const [color, setColor] = useState('');
  const [stitchingType, setStitchingType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [inspectionResult, setInspectionResult] = useState('');
  const [defects, setDefects] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackBar } = useSnackbar();
  const { id } = useParams();


  const methods = useForm(); // Initializing useForm

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/qualityControl/productRequest/${id}`)
      .then((response) => {
        setProductCode(response.data.productCode)
        setFabricType(response.data.fabricType)
        setColor(response.data.color)
        setStitchingType(response.data.stitchingType)
        setQuantity(response.data.quantity)
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happend. Please Check console');
        console.log(error);
      });
  }, [])

  const validateForm = () => {
    if (!inspectionResult) {
      alert('inspectionResult is required');
      return false;
    }
    
    return true;
  };

  const handleSaveAddReview = () => {

    if (!validateForm()) return;

    const data = {
      productCode,
      fabricType,
      color,
      stitchingType,
      quantity,
      inspectionResult,
      defects,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/qualityControl/productReview', data)
      .then(() => {
        setLoading(false);
        alert('Request updated successfully');
        navigate('/qualityControl/reviewReport');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        console.log(error);
      });
  };

  const option1 = [
    { id: 1, value: 'Approved', option: 'Approved' },
    { id: 2, value: 'Reject', option: 'Reject'},
  ];

  return (
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <QENavbar
        home={false}
        cel={false}
        rel={true}
        fel={false}
        att={false}
        sal={false}
      />
      
      <h1 className='text-5xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'brown' }}>AddReview</h1>
      <div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>

      {loading ? <Spinner /> : ''}
      <FormProvider {...methods}> 
        <form
          className='flex flex-col bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif'
          onSubmit={methods.handleSubmit(handleSaveAddReview)} 
        >
          

          <div className='my-2'>
            <label className='text-xl mr-4'>Product Code</label>
            <textarea
              className='drop-shadow-md px-4 py-2 w-full h-10'
              type='text'
              id='productCode'
              name='productCode'
              placeholder='Enter product Code'
              value={productCode}
              readOnly = {true}
              onChange={(e) => setProductCode(e.target.value)}
              validation={{ required: 'Product Code is required' }}
            />
          </div>

          <div className='my-2'>
            <label className='text-xl mr-4'>fabricType</label>
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
              placeholder='Enter Color'
              value={color}
              readOnly = {true}
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
              name='stitchingTypet'
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
              readOnly = {true}
              onChange={(e) => setQuantity(e.target.value)}
              validation={{ required: 'Quantity is required' }}
            />
          </div>

          <div className='my-2'>
            <label className='text-xl mr-4'>Inspection Result</label>
            <select
              className='drop-shadow-md px-4 py-2 w-full h-10'
              type='select'
              id='inspectionResult'
              name='inspectionResult'
              placeholder='Add Evaluation Result'
              value={inspectionResult}
              onChange={(e) => setInspectionResult(e.target.value)}
              validation={{ required: 'Add Inspection Result' }}
            >
              <option value=''>Add Evaluation Result</option>
              <option value='Approved'>Approved</option>
              <option value='Reject'>Reject</option>
            </select>
          </div>

          {inspectionResult === 'Reject' && (
        <div className='my-2'>
          <label className='text-xl mr-4'>Defects</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full h-10'
            type='text'
            id='defects'
            name='defects'
            placeholder='Enter Defects'
            value={defects}
            onChange={(e) => setDefects(e.target.value)}
          />
        </div>
      )}

      {/* 2nd one is not apper */}
      {inspectionResult !== 'Reject' && defects && (
        <div className='my-2'>
          <label className='text-xl mr-4'>Defects</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full h-10'
            type='text'
            id='defects'
            name='defects'
            placeholder='Enter Defects'
            value={defects}
            readOnly
          />
        </div>
      )}
          <button className='p-2 bg-black m-8 text-white rounded-xl' type='submit'>Submit</button>
        </form>
      </FormProvider>
      <div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>
      <div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>
      <StaffFooter />
    </div>
  )
}

export default AddReview;

