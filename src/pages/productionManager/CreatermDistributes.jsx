import React, { useState } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import { useForm, FormProvider } from 'react-hook-form'; // Importing useForm and FormProvider
import { useSnackbar } from 'notistack';

const CreatermDistributes = () => {
  const [DistributeID, setDistributeID ] = useState('');
  const [Date, setDate ] = useState('');
  const [LineNumber, setLineNumber] = useState('');
  const [PositionNumber, setPositionNumber] = useState('');
  const [Distributed, setDistributed] = useState('');
  const [Shortage, setShortage] = useState('');

  const [loading, setLoading ] = useState(false);
  const navigate  = useNavigate();
  const { enqueueSnackBar } = useSnackbar();

  const methods = useForm(); // Initializing useForm

  const handleSaveRawmDistribute = async (data) => {
    
    setLoading(true);
    try {
      await axios.post('http://localhost:5555/rmDistributes', data);
      setLoading(false);
      enqueueSnackBar('Distribution created successfully', { variant: 'success' });
      navigate('/RawmDistributes');
    }catch ( error ) {
      setLoading(false);
      //alert('An error happened. Please Check console');
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
          onSubmit={methods.handleSubmit(handleSaveRawmDistribute)} // Using handleSubmit from useForm
        >
          <h1 className='text-3xl my-4 text-center'>Raw Material Distribution Form</h1>
          <Input
            formtype='input'
            label='DistributeID'
            placeholder='Enter Distribute ID'
            id='distributeid'
            name='DistributeID'
            type='text'
            value={DistributeID}
            onChange={(e) => setDistributeID(e.target.value)}
            validation={{ required: 'Distribute ID is required' }}
          />
          <Input
            formtype='input'
            label='Date'
            id='date'
            name='Date'
            type='date'
            placeholder='Enter Date'
            value={Date}
            onChange={(e) => setDate(e.target.value)}
            validation={{ required: 'Date is required' }}
          />
          <Input
            formtype='input'
            type='text'
            label='LineNumber'
            id='linenumber'
            name='LineNumber'
            placeholder='Enter Line Number'
            value={LineNumber}
            onChange={(e) => setLineNumber(e.target.value)}
            validation={{ required: 'Line Number is required' }}
          />
          <Input
            formtype='input'
            type='text'
            label='PositionNumber'
            id='positionnumber'
            name='PositionNumber'
            placeholder='Enter Position Number'
            value={PositionNumber}
            onChange={(e) => setPositionNumber(e.target.value)}
            validation={{ required: 'Position Number is required' }}
          />
          <Input
            formtype='textarea'
            type='text'
            label='Distributed'
            id='distributed'
            name='Distributed'
            placeholder='Enter Distributed Raw Materials'
            value={Distributed}
            onChange={(e) => setDistributed(e.target.value)}
            validation={{ required: 'Distributed raw materials must be filled' }}
          />
          <Input
            formtype='textarea'
            type='text'
            label='Shortage'
            id='shortage'
            name='Shortage'
            placeholder='Shortage if needed'
            value={Shortage}
            onChange={(e) => setShortage(e.target.value)}
            validation= {{ required: 'If there is no shortage,enter null' }}
          />
          <button className= 'p-2 bg-black m-8 text-white rounded-xl' type='submit'>Submit</button>
        </form>
      </FormProvider>
    </div>
  )
}

export default CreatermDistributes
