import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const EditMPshortage = () => {
    const [RequestID, setRequestID] = useState('');
    const [Requested, setRequested] = useState('');
    const [PartID, setPartID] = useState('');
    const [PartName, setPartName] = useState('');
    const [Description, setDescription] = useState('');
    const [Quantity, setQuantity] = useState('');
    const [Condition, setCondition] = useState('');
    const [NeededBeforeDate, setNeededBeforeDate] = useState('');
    const [Status, setStatus] = useState(''); 
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/mpshortages/${id}`)
    .then((response) => {
      setRequestID(response.data.RequestID);
      setRequested(response.data.createdAt);
      setPartID(response.data.PartID);
      setPartName(response.data.PartName);
      setDescription(response.data.Description);
      setQuantity(response.data.Quantity);
      setCondition(response.data.Condition);
      setNeededBeforeDate(response.data.NeededBeforeDate);
      setStatus(response.data.Status);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      alert("An error happened. Please Check Console");
      console.log(error);
    })
  }, [])

  const handleEditMPshortage = () => {
    const data = {
        RequestID,
        Requested,
        PartID,
        PartName,
        Description,
        Quantity,
        Condition,
        NeededBeforeDate,
        Status,
    }
    setLoading(true);
      axios.put(`http://localhost:5555/mpshortages/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/mpshortages/view');
      })
      .catch ((error) => {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
    })
  };

  return (
    <div>
      <MaintenanceManagerHeader/>
      <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      {loading ? <Spinner /> : ''}

       <div className="bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto mt-8 font-BreeSerif">
       <h1 className='text-3xl text-center my-4 font-BreeSerif'>Edit Parts Shortage Details</h1>

       <div className="flex w-[80%] justify-between mb-2">
        <label className='text-ternary'>Request ID</label>
       </div>
       <div> 
          <input
            type='text'
            placeholder='Enter Request ID'
            name='RequestID'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'            
            value={RequestID.split("T")[0]}
            onChange={(e) => setRequestID(e.target.value)}
            validation={{ required: 'Request ID is required' }}
            readOnly
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
        <label className='text-ternary'>Requested Date</label>
       </div>
       <div> 
          <input
            type='text'
            placeholder='Enter Requested Date'
            name='Requested'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'            
            value={Requested.split("T")[0]}
            onChange={(e) => setRequested(e.target.value)}
            validation={{ required: 'Requested Date is required' }}
            readOnly
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
            <label className='text-ternary'>Part Name</label>
          </div>
          <div>  
          <input
            type='text'
            placeholder='Enter Part Name'
            name='PartName'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={PartName}
            onChange={(e) => setPartName(e.target.value)}
            validation={{ required: 'Part Name is required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
            <label className='text-ternary'>Description</label>
          </div>
          <div>  
          <input
            type='text'
            placeholder='Enter Description'
            name='Description'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            validation={{ required: 'Description is required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
            <label className='text-ternary'>Quantity</label>
          </div>
          <div>
           <input
            type='text'
            placeholder='Enter Quantity'
            name='Quantity'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={Quantity}
            onChange={(e) => setQuantity(e.target.value)}
            validation={{ required: 'Quantity required' }}
           />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
            <label className='text-ternary'>Condition</label>
          </div>
          <div>  
          <input
            type='text'
            placeholder='Enter Condition'
            name='Condition'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={Condition}
            onChange={(e) => setCondition(e.target.value)}
            validation={{ required: 'Condition required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
             <label className='text-ternary'>Date Needed Before</label>
          </div>
          <div>   
          <input
            type='text'
            placeholder='Enter the Date Needed Before'
            name='NeededBeforeDate'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={NeededBeforeDate.split("T")[0]}
            onChange={(e) => setNeededBeforeDate(e.target.value)}
            validation={{ required: 'Date is required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
             <label className='text-ternary'>Status</label>
          </div>
          <div>   
          <input
            type='text'
            placeholder='Enter the Status'
            name='Status'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
            validation={{ required: 'Status is required' }}
          />
          </div>
        
          {/* Include other Input components here */}
          <button type="submit" className='font-BreeSerif bg-black rounded text-white text-center w-[100px] h-[35px] self-end justify-self-end' onClick={handleEditMPshortage}>Submit</button>
          </div>
          </div>
          <StaffFooter/>
    </div>
  )
}

export default EditMPshortage;
