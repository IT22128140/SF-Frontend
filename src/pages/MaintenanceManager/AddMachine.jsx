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

const AddMachine = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const methods = useForm();
  const {handleSubmit} = methods;

  const handleSaveMachine = async (data) => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5555/machines', data);
      setLoading(false);
      navigate('/machines/view');
    } catch (error) {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
    }
  };

  return (
    <div className='relative'>
      <MaintenanceManagerHeader am={true}/>
      <BackButton/>
      {loading ? <Spinner /> : ''}
      {/* Wrap the form with FormProvider */}
      <FormProvider {...methods}> 
        <form onSubmit={methods.handleSubmit(handleSaveMachine)} className="bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif">
        <h1 className='text-4xl  font-philosopher text-black font-semibold my-8 text-center alignment-center'>Add New Machine</h1>
          <Input
            formtype='input'
            label='Machine ID'
            id='machineId'
            type='text'
            placeholder='Enter Machine ID'
            name='MachineID'
            validation={{ required: 'Machine ID is required' }}
          />

          <Input
          formtype='input'
          label='Machine Name'
          id='machineName'
          placeholder='Enter Machine Name'
          name='MachineName'
          validation={{ required: 'Machine Name is required' }}
        />
        <Input
          formtype='input'
          label='Purchased Date'
          id='purchasedDate'
          type='date'
          placeholder='Enter Purchased Date'
          name='PurchasedDate'
          validation={{ required: 'Purchased Date is required' }}
        />
        <Input
          formtype='input'
          label='Condition'
          id='condition'
          type='text'
          placeholder='Enter Condition'
          name='Condition'
          validation={{ required: 'Condition is required' }}
        />
        <Input
          formtype='input'
          label='Cost'
          id='cost'
          type='text'
          placeholder='Enter Cost'
          name='Cost'
          validation={{ required: 'Cost required' }}
        />
        <Input
          formtype='input'
          label='Manufacturer'
          id='manufacturer'
          type='text'
          placeholder='Enter Manufacturer'
          name='Manufacturer'
          validation={{ required: 'Manufacturer is required' }}
        />
        <Input
          formtype='input'
          label='Category'
          id='category'
          type='text'
          placeholder='Enter Category'
          name='Category'
          validation={{ required: 'Category is required' }}
        />
          <SubmitButton/>
        </form>
      </FormProvider>

      <StaffFooter/>
    </div>
  )
}

export default AddMachine;
