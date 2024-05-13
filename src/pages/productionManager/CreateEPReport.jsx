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
import SubmitButton from '../../components/button2/SubmitButton';
import { LnoValidation, PnoValidation, lwIdValidation, textValidation } from '../../utils/inputValidations';
import { paraValidation } from '../../utils/inputValidations';
import { numberValidation } from '../../utils/inputValidations';

const CreateEPReport = () => {
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
    <div className = 'w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <PMHeader ger = {true} />
      <div>
      <center>
        <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
          Performance Reports
        </h1>
      </center>
      <LWMenuBar/>
      {loading ? <Spinner/> : ''}
      <FormProvider {...methods}> {/* Providing methods from useForm */}
        <form
          className='flex flex-col bg-bgc rounded-xl w-[600px] p-4 mx-auto font-BreeSerif mb-5'
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
            // validation={{ required: 'Employee ID is required' }}
            {...lwIdValidation}
          />
          <Input
            formtype='input'
            label='EmployeeName'
            placeholder='Enter Employee Name'
            id='employeename'
            name='EmployeeName'
            type='text'
            // value={EmployeeID}
            // onChange={(e) => setEmployeeID(e.target.value)}
            // validation={{ required: 'Employee Name is required' }}
            {...textValidation}
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
            // validation={{ required: 'Line Number is required' }}
            {...LnoValidation}
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
            // validation={{ required: 'Position Number is required' }}
            {...PnoValidation}
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
            // validation={{ required: 'SMV is required' }}
            {...numberValidation}
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
            // validation={{ required: 'Working Hours required' }}
            {...numberValidation}
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
            // validation= {{ required: 'if not available enter null' }}
            {...paraValidation}
          />
          {/* <button className= 'p-2 bg-black m-8 text-white rounded-xl' type='submit'>Submit</button> */}
          <center className="mt-3"><SubmitButton/></center>
        </form>
      </FormProvider>
      <div className="h-80 mt-10 ml-5"></div>
      </div>
      <StaffFooter/>
    </div>
  )
}

export default CreateEPReport
