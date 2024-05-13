import React, { useState } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import { useForm, FormProvider } from 'react-hook-form'; // Importing useForm and FormProvider
import { useSnackbar } from 'notistack';
import PMHeader from '../../components/navbar/staffheader/PMHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import SubmitButton from '../../components/button2/SubmitButton';
import { textValidation } from '../../utils/inputValidations';
import { dateValidation } from '../../utils/inputValidations';
import { paraValidation } from '../../utils/inputValidations';

const CreatermDistributes = () => {
  // const [DistributeID, setDistributeID ] = useState('');
  // const [Date, setDate ] = useState('');
  // const [LineNumber, setLineNumber] = useState('');
  // const [PositionNumber, setPositionNumber] = useState('');
  // const [Distributed, setDistributed] = useState('');
  // const [Shortage, setShortage] = useState('');

  const [loading, setLoading ] = useState(false);
  const navigate  = useNavigate();
  const { enqueueSnackBar } = useSnackbar();

  const methods = useForm(); // Initializing useForm
  const { handleSubmit } = methods;

  const handleSaveRawmDistribute = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      await axios.post('http://localhost:5555/rmDistributes', data);
      setLoading(false);
      navigate('/RawmDistributes');
      enqueueSnackBar('Distribution created successfully', { variant: 'success' });
    }catch ( error ) {
      setLoading(false);
      // alert('An error happened. Please Check console');
      enqueueSnackBar('Error', { variant: 'error' });
      console.log(error);
    }
  };

  return (
    <div className = 'relative'>
      <PMHeader dfl = {true} />
      <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <center>
        <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
          Distribution for Lines
        </h1>
      </center>
      {loading ? <Spinner/> : ''}
      <FormProvider {...methods}> {/* Providing methods from useForm */}
        <form
          className='flex flex-col bg-bgc rounded-xl w-[600px] p-4 mx-auto font-BreeSerif mb-5'
          onSubmit={handleSubmit(handleSaveRawmDistribute)} // Using handleSubmit from useForm
        >
          <h1 className='text-3xl my-4 text-center'>Raw Material Distribution Form</h1>
          <Input
            formtype='input'
            label='DistributeID'
            placeholder='Enter Distribute ID'
            id='distributeid'
            name='DistributeID'
            type='text'
            // value={DistributeID}
            // onChange={(e) => setDistributeID(e.target.value)}
            // validation={{ required: 'Distribute ID is required' }}
            {...textValidation}
          />
          <Input
            formtype='input'
            label='Date'
            id='date'
            name='Date'
            type='date'
            placeholder='Enter Date'
            // value={Date}
            // onChange={(e) => setDate(e.target.value)}
            // validation={{ required: 'Date is required' }}
            {...dateValidation}
          />
          <Input
            formtype='input'
            type='text'
            label='LineNumber'
            id='linenumber'
            name='LineNumber'
            placeholder='Enter Line Number'
            // value={LineNumber}
            // onChange={(e) => setLineNumber(e.target.value)}
            // validation={{ required: 'Line Number is required' }}
            {...textValidation}
          />
          <Input
            formtype='input'
            type='text'
            label='PositionNumber'
            id='positionnumber'
            name='PositionNumber'
            placeholder='Enter Position Number'
            // value={PositionNumber}
            // onChange={(e) => setPositionNumber(e.target.value)}
            // validation={{ required: 'Position Number is required' }}
            {...textValidation}
          />
          <Input
            formtype='textarea'
            type='text'
            label='Distributed'
            id='distributed'
            name='Distributed'
            placeholder='Enter Distributed Raw Materials'
            // value={Distributed}
            // onChange={(e) => setDistributed(e.target.value)}
            // validation={{ required: 'Distributed raw materials must be filled' }}
            {...paraValidation}
          />
          <Input
            formtype='textarea'
            type='text'
            label='Shortage'
            id='shortage'
            name='Shortage'
            placeholder='Shortage if needed'
            // value={Shortage}
            // onChange={(e) => setShortage(e.target.value)}
            // validation= {{ required: 'If there is no shortage,enter null' }}
            {...paraValidation}
          />
          {/* <button className= 'p-2 bg-black m-8 text-white rounded-xl' type='submit'>Submit</button> */}
          <center className="mt-3"><SubmitButton/></center>
        </form>
      </FormProvider>
      <div className="h-40 mt-10 ml-5"></div>
      </div>
      <StaffFooter/>
    </div>
  )
}

export default CreatermDistributes
