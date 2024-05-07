import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import { FormProvider, useForm } from 'react-hook-form';
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import BackButton from '../../components/button/BackButton';
import SubmitButton from '../../components/button2/SubmitButton';

const RequestsMPshortage = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const methods = useForm();
  const {handleSubmit} = methods;

  const handleSaveMPshortage = async (data) => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5555/mpshortages', data);
      setLoading(false);
      navigate('/mpshortages/view');
    } catch (error) {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
    }
  };

  return (
    <div className='relative'>
      <MaintenanceManagerHeader rsh={true}/>
      <BackButton/>
      {loading ? <Spinner /> : ''}
      {/* Wrap the form with FormProvider */}
      <FormProvider {...methods}> 
        <form onSubmit={methods.handleSubmit(handleSaveMPshortage)} className="bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif">
        <h1 className='text-4xl  font-philosopher text-black font-semibold my-8 text-center alignment-center'>Request New Shortage</h1>
          <Input
            formtype='input'
            label='Request ID'
            id='requestId'
            type='text'
            placeholder='Enter Request ID'
            name='RequestID'
            validation={{ required: 'Request ID is required' }}
          />
          <Input
            formtype='input'
            label='Requested Date'
            id='requested'
            type='date'
            placeholder='Enter Requesting Date'
            name='Requested'
            validation={{ required: 'Requested Date is required' }}
          />
        <Input
          formtype='input'
          label='Part Name'
          id='partName'
          type='text'
          placeholder='Enter Part Name'
          name='PartName'
          validation={{ required: 'Part Name is required' }}
        />
        <Input
          formtype='textarea'
          label='Description'
          id='description'
          placeholder='Enter Description'
          name='Description'
          validation={{ required: 'Description is required' }}
        />
        <Input
          formtype='input'
          label='Quantity'
          id='quantity'
          type='text'
          placeholder='Enter Quantity'
          name='Quantity'
          validation={{ required: 'Quantity required' }}
        />
        <Input
          formtype='input'
          label='Condition'
          id='condition'
          type='text'
          placeholder='Enter Condition'
          name='Condition'
          validation={{ required: 'Condition required' }}
        />
        <Input
          formtype='input'
          label='Date Needed Brfore'
          id='dateNeededBefore'
          type='text'
          placeholder='Enter the Date Needed Before'
          name='NeededBeforeDate'
          validation={{ required: 'Date is required' }}
        />
        <Input
          formtype='input'
          label='Status'
          id='status'
          type='text'
          placeholder='Enter Status'
          name='Status'
          validation={{ required: 'Status required' }}
        />
          <SubmitButton/>
        </form>
      </FormProvider>
      <StaffFooter/>
    </div>
  )
}

export default RequestsMPshortage;
