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
import {MAINTidValidation} from '../../utils/inputValidations'

const CreateMaintenance = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [parts, setParts] = useState([]);
  const [selectedParts, setSelectedParts] = useState([]);
  const [dataP, setdataP] = useState([]);
  const methods = useForm();
  const {handleSubmit} = methods;

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/maintenance/mparts')
      .then((response) => {
        setParts(response.data.data);
        const set = response.data.data.map(obj => ({ID:obj.partID,name:obj.partName, condition:obj.condition, _id:obj._id}));
        setdataP(set);
        setLoading(false);

      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


  console.log(dataP);

  const handleSaveMaintenance = async (data) => {
    setLoading(true);
    try {
      const parts = data.Machineparts;
      const newData = { ...data };
      delete newData.Machineparts;
      const dataWithParts = { ...newData, Machineparts: selectedParts };
      console.log('Data sent to server:', dataWithParts);
      await axios.post('http://localhost:5555/maintenance', dataWithParts);
      setLoading(false);
      navigate('/machines/view');
    } catch (error) {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
    }
  };

  const handlePartChange = (event) => {
    const partId = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      const part = parts.find((part) => part.partID === partId);
      setSelectedParts((prevSelectedParts) => [...prevSelectedParts, part]);
    } else {
      setSelectedParts((prevSelectedParts) =>
        prevSelectedParts.filter((part) => part.partID !== partId)
      );
    }
  };

  return (
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <MaintenanceManagerHeader rr={true}/>
      {/* <BackButton/> */}
      {loading ? <Spinner /> : ''}
      <FormProvider {...methods}> 
        <form onSubmit={methods.handleSubmit(handleSaveMaintenance)} className="bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mt-20 mx-auto font-BreeSerif">
        
        <h1 className='text-4xl  font-philosopher text-black font-semibold my-8 text-center alignment-center'>Add new Maintenance Record</h1>
          <Input
            formtype='input'
            label='Maintenance ID'
            id='maintenanceId'
            type='text'
            placeholder='Enter Maintenance ID'
            name='MaintenanceID'
            validation={{ required: 'Maintenance ID is required' }}
            {...MAINTidValidation}
          />

        <Input
          formtype='input'
          label='Date'
          id='date'
          type='date'
          placeholder='Enter Date'
          name='Date'
          validation={{ required: 'Date is required' }}
        />

         <Input
          formtype='textarea'
          label='Machine ID'
          id='machineId'
          placeholder='Enter Machine ID'
          name='MachineID'
          validation={{ required: 'Machine ID is required' }}
        />

        <Input
          formtype='input'
          label='Machine Name'
          id='machineName'
          type='text'
          placeholder='Enter Machine Name'
          name='MachineName'
          validation={{ required: 'Machine Name is required' }}
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

        {/* Render checkboxes for workers */}
        <fieldset>
            <legend>Machine Parts</legend>
            {parts.map((part) => (
              <div key={part._id}>
                <input
                  type='checkbox'
                  id={part.partID}
                  name={part.partName}
                  value={part.partID}
                  onChange={handlePartChange}
                />
                <label htmlFor={part.partID}>{part.partID} - {part.partName} {part.condition}</label>
              </div>
            ))}
          </fieldset>
          
        <Input
          formtype='input'
          label='Changed Motor'
          id='changedMotor'
          type='text'
          placeholder='Enter Changed Motor'
          name='ChangedMotor'
          validation={{ required: 'Status is required' }}
        />

        <Input
          formtype='input'
          label='Changed Needle'
          id='changedNeedle'
          type='text'
          placeholder='Enter Changed Needle'
          name='ChangedNeedle'
          validation={{ required: 'Status is required' }}
        />

        <Input
          formtype='input'
          label='Oiled'
          id='oiled'
          type='text'
          placeholder='Enter Oiled'
          name='Oiled'
          validation={{ required: 'Status is required' }}
        />
        
          <center className='mt-5'><SubmitButton/></center>
        </form>
      </FormProvider>
      <div className='h-40'></div>
      <StaffFooter/>
    </div>
  )
}

export default CreateMaintenance;
