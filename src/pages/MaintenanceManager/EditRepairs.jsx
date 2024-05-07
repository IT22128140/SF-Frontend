import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import SubmitButton from '../../components/button2/SubmitButton';
import WorkersSidebar from './WorkersSidebar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const EditRepair = () => {
  const [RepairID, setRepairID] = useState('');
  const [RepairDescription, setRepairDescription] = useState('');
  const [RequestedDate, setRequestedDate] = useState('');
  const [RequestedTime, setRequestedTime] = useState('');
  const [UrgencyLevel, setUrgencyLevel] = useState('');
  const [Status, setStatus] = useState('');
  const [Workers, setWorkers] = useState([]);
  const [CompletedDate, setCompletedDate] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/repairs/${id}`)
    .then((response) => {
      setRepairID(response.data.RepairID);
      setRepairDescription(response.data.RepairDescription);
      setRequestedDate(response.data.RequestedDate);
      setRequestedTime(response.data.RequestedTime);
      setUrgencyLevel(response.data.UrgencyLevel);
      setStatus(response.data.Status);
      setWorkers(response.data.Workers);
      setCompletedDate(response.data.CompletedDate);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      alert("An error happened. Please Check Console");
      console.log(error);
    })
  }, [])

  const handleEditRepair = () => {
    const data = {
      RepairID,
      RepairDescription,
      RequestedDate,
      RequestedTime,
      UrgencyLevel,
      Status,
      Workers,
      CompletedDate,
    }
    setLoading(true);
      axios.put(`http://localhost:5555/repairs/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/repairs/view');
      })
      .catch ((error) => {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
    })
  };

  return (
    <div className='relative'>
      <MaintenanceManagerHeader/>
      <div className=' relative w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <WorkersSidebar/>
      {loading ? <Spinner /> : ''}

       <div className="bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto mt-20 font-BreeSerif">
       <h1 className='text-3xl text-center my-4 font-BreeSerif'>Edit Repair Details</h1>

       <div className="flex w-[80%] justify-between mb-2">
        <label className='text-ternary'>Repair ID</label>
       </div>
       <div> 
          <input
            type='text'
            placeholder='Enter Repair ID'
            name='RepairID'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={RepairID}
            onChange={(e) => setRepairID(e.target.value)}
            validation={{ required: 'Repair ID is required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
           <label className='text-ternary'>Repair Description</label>
          </div>
          <div>
          <input
            type='text'
            placeholder='Enter Repair Description'
            name='RepairDescription'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={RepairDescription}
            onChange={(e) => setRepairDescription(e.target.value)}
            validation={{ required: 'Repair Description is required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
            <label className='text-ternary'>Requested Date</label>
          </div>
          <div>  
          <input
            type='text'
            placeholder='Enter Requested Date'
            name='RequestedDate'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={RequestedDate}
            onChange={(e) => setRequestedDate(e.target.value)}
            validation={{ required: 'Requested Date is required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
            <label className='text-ternary'>Requested Time</label>
          </div>
          <div>  
          <input
            type='text'
            placeholder='Enter Requested Time'
            name='RequestedTime'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={RequestedTime}
            // onChange={(e) => setRequestedTime(e.target.value)}
            validation={{ required: 'Requested Time is required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
            <label className='text-ternary'>Urgency Level</label>
          </div>
          <div>
           <input
            type='text'
            placeholder='Enter Urgency Level'
            name='UrgencyLevel'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={UrgencyLevel}
            onChange={(e) => setUrgencyLevel(e.target.value)}
            validation={{ required: 'Urgency Level is required' }}
           />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
            <label className='text-ternary'>Status</label>
          </div>
          <div>  
          <input
            type='text'
            placeholder='Enter Status'
            name='Status'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
            validation={{ required: 'Status is required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
             <label className='text-ternary'>Completed Date</label>
          </div>
          <div>   
          <input
            type='text'
            placeholder='Enter Completed Date'
            name='CompletedDate'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={CompletedDate}
            onChange={(e) => setCompletedDate(e.target.value)}
            validation={{ required: 'Completed Date is required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
          <label className='text-ternary'>Assigned Repair Workers</label>
        </div>
        <div>
          {Workers.map((worker) => (
            <div key={worker.employeeID}>
              <span className='font-BreeSerif'>{worker.employeeID} - {worker.firstName} {worker.lastName}</span>
            </div>
          ))}
        </div>
          <SubmitButton onClick={handleEditRepair}/>
          </div>
          </div>
          <StaffFooter/>
    </div>
  )
}

export default EditRepair;
