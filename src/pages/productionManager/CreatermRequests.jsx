import React, { useState } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import { useForm, FormProvider } from 'react-hook-form'; // Importing useForm and FormProvider
import { useSnackbar } from 'notistack';

const CreatermRequests = () => {
  const [RequestID, setRequestID ] = useState('');
  const [Date, setDate ] = useState('');
  const [FabricType_Colour_Amount, setFabricType] = useState('');
  const [ButtonType_Colour_Amount, setButtonType] = useState('');
  const [ThreadType_Colour_Amount, setThreadType] = useState('');
  const [Other_Materials, setOther] = useState('');
  const [Status, setStatus] = useState('');

  const [loading, setLoading ] = useState(false);
  const navigate  = useNavigate();
  const { enqueueSnackBar } = useSnackbar();

  const methods = useForm(); // Initializing useForm

  const handleSaveRawmRequest = async (data) => {
    
    setLoading(true);
    try {
      await axios.post('http://localhost:5555/rmRequests', data);
      setLoading(false);
      enqueueSnackBar('Request created successfully', { variant: 'success' });
      navigate('/RawmRequests');
    }catch ( error ) {
      setLoading(false);
      // alert('An error happened. Please Check console');
      enqueueSnackBar('Error', { variant: 'error' });
      console.log(error);
    }
  };

  return (
    <div className = 'p-4'>
      {loading ? <Spinner/> : ''}
      <FormProvider {...methods}> {/* Providing methods from useForm */}
        <form
          className='flex flex-col bg-stone-200 rounded-xl w-[600px] p-4 mx-auto font-BreeSerif'
          onSubmit={methods.handleSubmit(handleSaveRawmRequest)} // Using handleSubmit from useForm
        >
          <h1 className='text-3xl my-4 text-center'>Raw Material Request Form</h1>
          <Input
            formtype='input'
            label='RequestID'
            placeholder='Enter Request ID'
            id='requestid'
            name='RequestID'
            type='text'
            value={RequestID}
            onChange={(e) => setRequestID(e.target.value)}
            validation={{ required: 'Request ID is required' }}
          />
          <Input
            formtype='input'
            label='Date'
            id='date'
            name='Date'
            type='DATE'
            placeholder='Enter Date'
            value={Date}
            onChange={(e) => setDate(e.target.value)}
            validation={{ required: 'Date is required' }}
          />
          <Input
            formtype='textarea'
            type='text'
            id='fabrictype'
            name='FabricType_Colour_Amount'
            label='Fabric Type'
            placeholder='Enter Fabric Type, Colour and Amount'
            value={FabricType_Colour_Amount}
            onChange={(e) => setFabricType(e.target.value)}
            validation={{ required: 'Fabric  Type is required' }}
          />
          <Input
            formtype='textarea'
            type='text'
            id='buttontype'
            name='ButtonType_Colour_Amount'
            label='Button Type'
            placeholder='Enter Button Type, Colour and Amount'
            value={ButtonType_Colour_Amount}
            onChange={(e) => setButtonType(e.target.value)}
            validation={{ required: 'Button Type is required' }}
          />
          <Input
            formtype='textarea'
            type='text'
            id='threadtype'
            name='ThreadType_Colour_Amount'
            label='Thread Type'
            placeholder='Enter Thread Type, Colour and Amount'
            value={ThreadType_Colour_Amount}
            onChange={(e) => setThreadType(e.target.value)}
            validation={{ required: 'Thread Type is required' }}
          />
          <Input
            formtype='textarea'
            type='text'
            id='otherrm'
            name='Other_Materials'
            placeholder='Other Materials if needed'
            label='Other Materials'
            value={Other_Materials}
            onChange={(e) => setOther(e.target.value)}
            validation= {{ required: 'Other materials required' }}
          />
          <Input
            formtype='input'
            type='text'
            id='status'
            name='Status'
            placeholder='Current Status'
            label='Status'
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
            validation={{ required: 'Status required' }}
          />
          <button className= 'p-2 bg-black m-8 text-white rounded-xl' type='submit'>Submit</button>
        </form>
      </FormProvider>
    </div>
  )
}

export default CreatermRequests
