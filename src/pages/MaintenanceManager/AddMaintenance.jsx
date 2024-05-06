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
      // Extract parts array from data
      const partsData = selectedParts.map(({ partID, partName, condition }) => ({ partID, partName, condition }));

      // Create new object without parts field
      const newData = { ...data };
      delete newData.Machineparts;

      // Add selected parts to the data before saving
      const dataWithParts = { ...newData, Machineparts: partsData };

      await axios.post('http://localhost:5555/maintenance', dataWithParts);
      setLoading(false);
      navigate('/repairs/view');
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
      // Add part to selectedParts
      const part = parts.find((part) => part.partID === partId);
      setSelectedParts((prevSelectedParts) => [...prevSelectedParts, part]);
    } else {
      // Remove part from selectedParts
      setSelectedParts((prevSelectedParts) =>
        prevSelectedParts.filter((part) => part.partID !== partId)
      );
    }
  };

  return (
    <div className='relative'>
      <MaintenanceManagerHeader rr={true}/>
      <BackButton/>
      <WorkersSidebar/>
      {loading ? <Spinner /> : ''}
      <FormProvider {...methods}> 
        <form onSubmit={methods.handleSubmit(handleSaveMaintenance)} className="bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif">
        
        <h1 className='text-4xl  font-philosopher text-black font-semibold my-8 text-center alignment-center'>Add new Maintenance Record</h1>
          <Input
            formtype='input'
            label='Maintenance ID'
            id='maintenanceId'
            type='text'
            placeholder='Enter Maintenance ID'
            name='MaintenanceID'
            validation={{ required: 'Maintenance ID is required' }}
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

          <SubmitButton/>
        </form>
      </FormProvider>
      <StaffFooter/>
    </div>
  )
}

export default CreateMaintenance;
