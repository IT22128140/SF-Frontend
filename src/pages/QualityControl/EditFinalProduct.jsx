import React, { useState ,useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/form/Input';
import Button from '../../components/button/Button';
import BackButton from '../../components/button/BackButton';
import { FormProvider, useForm } from 'react-hook-form';

const EditFinalProduct = () => {
  const methods = useForm();
  const [productCode, setProductCode] = useState('');
  const [quantity, setQuantity] = useState('');
  const [requestedDate, setRequestedDate] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams() ;

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/qualityControl/productRequest/${id}`)
    .then((response) => {
      setProductCode(response.data.productCode);
      setQuantity(response.data.quantity);
      setRequestedDate(response.data.requestedDate);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
    });

  }, [])

  const handleSaveProductRequest = async (data) => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5555/qualityControl/productRequest', data);
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
    }
  };

  const handleCancel = () => {
    navigate('/'); // Change the path as needed
  };

  return (
    <div>
      <h1 className='text-3xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'orange' }}>Edit Final Product</h1>
      {loading ? <Spinner /> : ''}
      
      <FormProvider {...methods}> 
        <form onSubmit={methods.handleSubmit(handleSaveProductRequest)} className="flex flex-col border-2 border-black rounded-xl w-[600px] p-4 bg-orange-100 mx-auto">
          <Input
            formtype='input'
            label='Product Code'
            id='productCode'
            type='text'
            placeholder='Enter Product Code'
            name='productCode'
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
            validation={{ required: 'Product Code is required' }}
          />
          <Input
            formtype='input'
            label='Quantity'
            id='quantity'
            type='text'
            placeholder='Enter Quantity'
            name='quantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            validation={{ required: 'Quantity is required' }}
          />
          <Input
            formtype='input'
            label='Requested Date'
            id='requestedDate'
            type='text'
            placeholder='Enter Requested Date'
            name='requestedDate'  
            value={requestedDate}
            onChange={(e) => setRequestedDate(e.target.value)}
            validation={{ required: 'Requested Date is required' }}
          />
         
         <div className="flex justify-end mt-4">
            
            <Button onClick={handleCancel} className="mr-2" style={{ backgroundColor: 'red' }}>Cancel</Button>
            <Button type="submit">Add</Button>
         </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default EditFinalProduct;