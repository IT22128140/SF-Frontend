import React, { useState } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import Button from '../../components/button/Button';
import BackButton from '../../components/button/BackButton';
import { FormProvider, useForm } from 'react-hook-form';

const AddReleaseProduct = () => {
  const methods = useForm();
  const [release_ID, setRelease_ID] = useState('');
  const [productCode, setProductCode] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveReleaseProduct = async (data) => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5555/qualityControl/releaseProduct', data);
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
      <h1 className='text-3xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'orange' }}>Add Release Product</h1>
      {loading ? <Spinner /> : ''}
      
      <FormProvider {...methods}> 
        <form onSubmit={methods.handleSubmit(handleSaveReleaseProduct)} className="flex flex-col border-2 border-black rounded-xl w-[600px] p-4 bg-orange-100 mx-auto">
          <Input
            formtype='input'
            label='Release_ID'
            id='release_ID'
            type='text'
            placeholder='Enter Release_ID'
            name='release_ID'
            value={release_ID}
            onChange={(e) => setRelease_ID(e.target.value)}
            validation={{ required: 'Release ID is required' }}
          />
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
            label='Release Date'
            id='releaseDate'
            type='text'
            placeholder='Enter Release Date'
            name='releaseDate'  
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            validation={{ required: 'Release Date is required' }}
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

export default AddReleaseProduct;