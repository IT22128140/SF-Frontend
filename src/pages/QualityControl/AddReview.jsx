import React, { useState } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import Button from '../../components/button/Button';
import Select from '../../components/form/Select';
import { FormProvider, useForm } from 'react-hook-form';

const AddReview = () => {
    const methods = useForm();
  const [productCode, setProductCode] = useState('');
  const [inspectionResult, setInspectionResult] = useState('');
  const [reviewDate, setReviewDate] = useState('');
  const [defects, setDefects] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveProductReview = async (data) => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5555/qualityControl/productReview', data);
      setLoading(false);
      navigate('/qualityControl/reviewReport');
    } catch (error) {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
    }
  };

  const handleCancel = () => {
    navigate('/qualityControl/reviewReport'); // Change the path as needed
  };

  const options = [
    { id: 1, value: 'Approved', option: 'Approved' },
    { id: 2, value: 'Reject', option: 'Reject' },
    
  ];

  return (
    <div>
      <h1 className='text-3xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'orange' }}>Update Review</h1>
      {loading ? <Spinner /> : ''}
      
      <FormProvider {...methods}> 
        <form onSubmit={methods.handleSubmit(handleSaveProductReview)} className="flex flex-col border-2 border-black rounded-xl w-[600px] p-4 bg-orange-100 mx-auto">
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
          <Select
             label="Inspection Result"
             id="inspectionResult"
             name="inspectionResult"
             firstOption="Select the Result"
             options={options}
             validation={{ required: 'Inspection Result is required' }} 
          />
          <Input
            formtype='input'
            label='Review Date'
            id='reviewDate'
            type='text'
            placeholder='Enter Review Date'
            name='reviewDate'  
            value={reviewDate}
            onChange={(e) => setReviewDate(e.target.value)}
            validation={{ required: 'Review Date is required' }}
          />
          <Input
            formtype='input'
            label='Defects'
            id='defects'
            type='text'
            placeholder='Enter Defects'
            name='defects'  
            value={defects}
            onChange={(e) => setDefects(e.target.value)}
            validation={defects.trim() ? { required: 'Defects is required' } : {}}
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

export default AddReview;