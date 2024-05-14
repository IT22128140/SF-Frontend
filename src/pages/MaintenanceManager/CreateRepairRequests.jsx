import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import { FormProvider, useForm } from 'react-hook-form';// Import FormProvider
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import WorkersSidebar from './WorkersSidebar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import BackButton from '../../components/button/BackButton';
import SubmitButton from '../../components/button2/SubmitButton';
import {textValidation} from '../../utils/inputValidations'
import {paraValidation} from '../../utils/inputValidations'
import {dateValidation} from '../../utils/inputValidations'
import {RPRidValidation} from '../../utils/inputValidations'

const CreateRepairRequests = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [workers, setWorkers] = useState([]);
  const [selectedWorkers, setSelectedWorkers] = useState([]);
  const [dataW, setdataW] = useState([]);
  const methods = useForm();
  const {handleSubmit} = methods;

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/repairs/rworkers')
      .then((response) => {
        setWorkers(response.data.data);
        const set = response.data.data.map(obj => ({ID:obj.employeeID,name:obj.firstName, lname:obj.lastName, _id:obj._id}));
        setdataW(set);
        setLoading(false);

      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


  console.log(dataW);

  const handleSaveRepair = async (data) => {
    setLoading(true);
    try {
      
    const workers = data.Workers;// Extract Workers array from data

    // Create new object
    const newData = { ...data };
    delete newData.Workers;
      
    // Add selected workers to the data
    const dataWithWorkers = { ...newData, Workers: selectedWorkers };

      await axios.post('http://localhost:5555/repairs', dataWithWorkers);
      setLoading(false);
      navigate('/repairs/view');
    } catch (error) {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
    }
  };

  const handleWorkerChange = (event) => {
    const workerId = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      // Add worker to selectedWorkers
      const worker = workers.find((worker) => worker.employeeID === workerId);
      setSelectedWorkers((prevSelectedWorkers) => [...prevSelectedWorkers, worker]);
    } else {
      // Remove worker from selectedWorkers
      setSelectedWorkers((prevSelectedWorkers) =>
        prevSelectedWorkers.filter((worker) => worker.employeeID !== workerId)
      );
    }
  };

  return (
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <MaintenanceManagerHeader rr={true}/>
      <div >
      {/* <BackButton/> */}
      <WorkersSidebar className="h-full"/>
      {loading ? <Spinner /> : ''}
      <FormProvider {...methods}> 
        <form onSubmit={methods.handleSubmit(handleSaveRepair)} className="bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif">
        
        <h1 className='text-4xl  font-philosopher text-black font-semibold my-8 text-center alignment-center'>Request New Repair</h1>
          <Input
            formtype='input'
            label='Repair ID'
            id='repairId'
            type='text'
            placeholder='Enter Repair ID'
            name='RepairID'
            {...RPRidValidation}
            // validation={{ required: 'Repair ID is required' }}
          />

          <Input
          formtype='textarea'
          label='Repair Description'
          id='repairDescription'
          placeholder='Enter Repair Description'
          name='RepairDescription'
          {...paraValidation}
          // validation={{ required: 'Repair Description is required' }}
        />
        <Input
          formtype='input'
          label='Requested Time'
          id='requestedTime'
          type='text'
          placeholder='Enter Requested Time'
          name='RequestedTime'
          {...textValidation}
          // validation={{ required: 'Requested Time is required' }}
        />
        <Input
          formtype='input'
          label='Urgency Level'
          id='urgencyLevel'
          type='text'
          placeholder='Enter Urgency Level'
          name='UrgencyLevel'
          {...textValidation}
          // validation={{ required: 'Urgency Level is required' }}
        />
        <Input
          formtype='input'
          label='Status'
          id='status'
          type='text'
          placeholder='Enter Status'
          name='Status'
          {...textValidation}
          // validation={{ required: 'Status is required' }}
        />
        <Input
          formtype='input'
          label='Completed Date'
          id='completedDate'
          type='date'
          placeholder='Enter Completed Date'
          name='CompletedDate'
          // validation={{ required: 'Completed Date is required' }}
        />

        <fieldset>
            <legend>Add Repair Workers</legend>
            {workers.map((worker) => (
              <div key={worker._id}>
                <input
                  type='checkbox'
                  id={worker.employeeID}
                  name={worker.firstName}
                  value={worker.employeeID}
                  onChange={handleWorkerChange}
                />
                <label htmlFor={worker.employeeID}>{worker.employeeID} - {worker.firstName} {worker.lastName}</label>
              </div>
            ))}
          </fieldset>

          <center><SubmitButton/></center>
        </form>
      </FormProvider>
      <div className='h-80'></div>
      </div>
      <StaffFooter/>
    </div>
  )
}

export default CreateRepairRequests;
