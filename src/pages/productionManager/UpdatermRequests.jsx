import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import PMHeader from '../../components/navbar/staffheader/PMHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import SubmitButton from '../../components/button2/SubmitButton';

const UpdatermRequests = () => {
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
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/rmRequests/${id}`)
    .then((response) => {
      setRequestID(response.data.RequestID);
      setDate(response.data.createdAt)
      setFabricType(response.data.FabricType_Colour_Amount)
      setButtonType(response.data.ButtonType_Colour_Amount)
      setThreadType(response.data.ThreadType_Colour_Amount)
      setOther(response.data.Other_Materials)
      setStatus(response.data.Status)
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      alert('An error happend. Please Check console');
      console.log(error);
    });
  }, [])

  const handleUpdateRawmRequest = () => {
    const data = {
      RequestID,
      Date,
      FabricType_Colour_Amount,
      ButtonType_Colour_Amount,
      ThreadType_Colour_Amount,
      Other_Materials,
      Status,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/rmRequests/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/RawmRequests');
        // enqueueSnackBar('Request updated successfully', { variant: 'success' });
      })
      .catch ((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        // enqueueSnackBar('Error', { variant: 'error' });
        console.log(error);
      } );  
  };

  return (
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <PMHeader rmr = {true} />
      <div>
      <center>
        <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
          Raw Material Requests
        </h1>
      </center>
      {loading ? <Spinner/> : ''}
        <div
          className='flex flex-col bg-bgc rounded-xl w-[600px] p-4 mx-auto font-BreeSerif mb-5'
        >
          <h1 className='text-3xl my-4 text-center'>Update Raw Material Request Form</h1>
          <div className='my-2'>
            <label className='text-xl mr-4'>Request ID</label>
            <input
            className='drop-shadow-md px-4 py-2 w-full'
            placeholder='Enter Request ID'
            id='requestid'
            name='RequestID'
            type='text'
            value={RequestID}
            onChange={(e) => setRequestID(e.target.value)}
            validation={{ required: 'Request ID is required' }}
            readOnly
            />
          </div>
          <div className='my-2'>
            <label className='text-xl mr-4'>Date</label>
            <input
            className='drop-shadow-md px-4 py-2 w-full'
            id='date'
            name='Date'
            type='text'
            placeholder='Enter Date'
            value={Date.split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
            validation={{ required: 'Date is required' }}
            readOnly
            />
          </div>
          <div className='my-2'>
            <label className='text-xl mr-4'>Fabric Type</label>
            <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='fabrictype'
            name='FabricType_Colour_Amount'
            placeholder='Enter Fabric Type, Colour and Amount'
            value={FabricType_Colour_Amount}
            onChange={(e) => setFabricType(e.target.value)}
            validation={{ required: 'Fabric  Type is required' }}
            />
          </div>
          <div className='my-2'>
            <label className='text-xl mr-4'>Button Type</label>
            <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='buttontype'
            name='ButtonType_Colour_Amount'
            placeholder='Enter Button Type, Colour and Amount'
            value={ButtonType_Colour_Amount}
            onChange={(e) => setButtonType(e.target.value)}
            validation={{ required: 'Button Type is required' }}
          />
          </div>
          <div className='my-2'>
            <label className='text-xl mr-4'>Thread Type</label>
            <textarea
            className='drop-shadow-md px-4 py-2 w-full' 
            type='text'
            id='threadtype'
            name='ThreadType_Colour_Amount'
            placeholder='Enter Thread Type, Colour and Amount'
            value={ThreadType_Colour_Amount}
            onChange={(e) => setThreadType(e.target.value)}
            validation={{ required: 'Thread Type is required' }}
            />
          </div>
          <div className='my-2'>
            <label className='text-xl mr-4'>Other Materials(if needed)</label>
            <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='otherrm'
            name='Other_Materials'
            placeholder='Other Materials if needed'
            value={Other_Materials}
            onChange={(e) => setOther(e.target.value)}
            validation= {{ required: 'Other materials required' }}
            />
          </div>
          <div className='my-2'>
            <label className='text-xl mr-4'>Status</label>
            <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='status'
            name='Status'
            placeholder='Current Status'
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
            validation={{ required: 'Status required' }}
            />
          </div>
          {/* <button className= 'p-2 bg-black m-8 text-white rounded-xl' onClick={handleUpdateRawmRequest}>Submit</button> */}
          <center className="mt-3" onClick={handleUpdateRawmRequest}><SubmitButton/></center>
        </div>
        <div className="h-40 mt-10 ml-5"></div>
        </div>
        <StaffFooter/>
    </div>
  )
}

export default UpdatermRequests
