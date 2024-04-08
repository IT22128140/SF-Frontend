import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import { useForm, FormProvider } from 'react-hook-form'; // Importing useForm and FormProvider
import { useSnackbar } from 'notistack';
import PMHeader from '../../components/navbar/staffheader/PMHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import LWMenuBar from './LWMenuBar';

const CreatermRequests = () => {
  // const [EmployeeID, setEmployeeID ] = useState('');
  // const [LineNumber, setLineNumber ] = useState('');
  // const [PositionNumber, setPositionNumber] = useState('');
  // const [StandardMinuteValue, setStandardMinuteValue] = useState('');
  // const [WorkingHours, setWorkingHours] = useState('');
  // const [OtherNotes, setOtherNotes] = useState('');

  const [loading, setLoading ] = useState(false);
  const navigate  = useNavigate();
  const { enqueueSnackBar } = useSnackbar();

  const methods = useForm(); // Initializing useForm
  const {handleSubmit} = methods;

  const handleSaveEmpPerformance = async (data) => {
    console.log(data);

    setLoading(true);
    try {
      await axios.post('http://localhost:5555/empPerformances', data);
      setLoading(false);
      // enqueueSnackBar('Request created successfully', { variant: 'success' });
      navigate('/EmployeePerformance');
    }catch ( error ) {
      setLoading(false);
      alert('An error happened. Please Check console');
      // enqueueSnackBar('Error', { variant: 'error' });
      console.log(error);
    }
  };

  return (
    <div className = 'relative'>
      <PMHeader ger = {true} />
      <LWMenuBar/>
      {loading ? <Spinner/> : ''}
      <FormProvider {...methods}> {/* Providing methods from useForm */}
        <form
          className='flex flex-col bg-formbg rounded-xl w-[600px] p-4 mx-auto font-BreeSerif mb-5'
          onSubmit={handleSubmit(handleSaveEmpPerformance)} // Using handleSubmit from useForm
        >
          <h1 className='text-3xl my-4 text-center'>Employee Performance Form</h1>
          <Input
            formtype='input'
            label='EmployeeID'
            placeholder='Enter Employee ID'
            id='employeeid'
            name='EmployeeID'
            type='text'
            // value={EmployeeID}
            // onChange={(e) => setEmployeeID(e.target.value)}
            validation={{ required: 'Employee ID is required' }}
          />
          <Input
            formtype='input'
            label='LineNumber'
            id='linenumber'
            name='LineNumber'
            type='text'
            placeholder='Enter Line Number of the Employee'
            // value={LineNumber}
            // onChange={(e) => setLineNumber(e.target.value)}
            validation={{ required: 'Line Number is required' }}
          />
          <Input
            formtype='input'
            type='text'
            id='positionnumber'
            name='PositionNumber'
            label='Position Number'
            placeholder='Enter Position Number of the Employee'
            // value={PositionNumber}
            // onChange={(e) => setPositionNumber(e.target.value)}
            validation={{ required: 'Position Number is required' }}
          />
          <Input
            formtype='input'
            type='text'
            id='smv'
            name='StandardMinuteValue'
            label='Standard Minute Value(SMV)'
            placeholder='Enter Standard Minute Value'
            // value={StandardMinuteValue}
            // onChange={(e) => setStandardMinuteValue(e.target.value)}
            validation={{ required: 'SMV is required' }}
          />
          <Input
            formtype='input'
            type='text'
            id='workinghours'
            name='WorkingHours'
            placeholder='Working Hours of the Employee'
            label='working Hours'
            // value={WorkingHours}
            // onChange={(e) => setWorkingHours(e.target.value)}
            validation={{ required: 'Working Hours required' }}
          />
          <Input
            formtype='textarea'
            type='text'
            id='othernotes'
            name='OtherNotes'
            placeholder='Special Notes if needed'
            label='Special Notes'
            // value={OtherNotes}
            // onChange={(e) => setOtherNotes(e.target.value)}
            validation= {{ required: 'if not available enter null' }}
          />
          <button className= 'p-2 bg-black m-8 text-white rounded-xl' type='submit'>Submit</button>
        </form>
      </FormProvider>
      <StaffFooter/>
    </div>
  )
}

export default CreatermRequests
