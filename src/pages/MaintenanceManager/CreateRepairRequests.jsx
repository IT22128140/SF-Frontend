import React, { useState } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import { FormProvider, useForm } from 'react-hook-form';// Import FormProvider

const CreateRepairRequests = () => {

  // Initialize useForm hook to manage form state
  const methods = useForm();

  const [RepairID, setRepairID] = useState('');
  const [RepairDescription, setRepairDescription] = useState('');
  const [RequestedDate, setRequestedDate] = useState('');
  const [RequestedTime, setRequestedTime] = useState('');
  const [UrgencyLevel, setUrgencyLevel] = useState('');
  const [Status, setStatus] = useState('');
  const [CompletedDate, setCompletedDate] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveRepair = async (data) => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5555/repairs', data);
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
    }
  };

  return (
    <div>
      
      {loading ? <Spinner /> : ''}
      {/* Wrap the form with FormProvider */}
      <FormProvider {...methods}> 
        <form onSubmit={methods.handleSubmit(handleSaveRepair)} className="flex flex-col border-2 border-black rounded-xl w-[600px] p-4 mx-auto">
        <h1 className='text-3xl my-4 font-BreeSerif'>Request New Repair</h1>
          <Input
            formtype='input'
            label='Repair ID'
            id='repairId'
            type='text'
            placeholder='Enter Repair ID'
            name='RepairID'
            value={RepairID}
            onChange={(e) => setRepairID(e.target.value)}
            validation={{ required: 'Repair ID is required' }}
          />

          <Input
          formtype='textarea'
          label='Repair Description'
          id='repairDescription'
          placeholder='Enter Repair Description'
          name='RepairDescription'
          value={RepairDescription}
          onChange={(e) => setRepairDescription(e.target.value)}
          validation={{ required: 'Repair Description is required' }}
        />
        <Input
          formtype='input'
          label='Requested Date'
          id='requestedDate'
          type='text'
          placeholder='Enter Requested Date'
          name='RequestedDate'
          value={RequestedDate}
          onChange={(e) => setRequestedDate(e.target.value)}
          validation={{ required: 'Requested Date is required' }}
        />
        <Input
          formtype='input'
          label='Requested Time'
          id='requestedTime'
          type='text'
          placeholder='Enter Requested Time'
          name='RequestedTime'
          value={RequestedTime}
          onChange={(e) => setRequestedTime(e.target.value)}
          validation={{ required: 'Requested Time is required' }}
        />
        <Input
          formtype='input'
          label='Urgency Level'
          id='urgencyLevel'
          type='text'
          placeholder='Enter Urgency Level'
          name='UrgencyLevel'
          value={UrgencyLevel}
          onChange={(e) => setUrgencyLevel(e.target.value)}
          validation={{ required: 'Urgency Level is required' }}
        />
        <Input
          formtype='input'
          label='Status'
          id='status'
          type='text'
          placeholder='Enter Status'
          name='Status'
          value={Status}
          onChange={(e) => setStatus(e.target.value)}
          validation={{ required: 'Status is required' }}
        />
        <Input
          formtype='input'
          label='Completed Date'
          id='completedDate'
          type='text'
          placeholder='Enter Completed Date'
          name='CompletedDate'
          value={CompletedDate}
          onChange={(e) => setCompletedDate(e.target.value)}
          validation={{ required: 'Completed Date is required' }}
        />
          {/* Include other Input components here */}
          <button type="submit">Save</button>
        </form>
      </FormProvider>
    </div>
  )
}

export default CreateRepairRequests;
