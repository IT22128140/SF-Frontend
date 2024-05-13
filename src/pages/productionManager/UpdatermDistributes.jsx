import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import PMHeader from '../../components/navbar/staffheader/PMHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import SubmitButton from '../../components/button2/SubmitButton';

const UpdatermDistributes = () => {
  const [DistributeID, setDistributeID ] = useState('');
  const [Date, setDate ] = useState('');
  const [LineNumber, setLineNumber] = useState('');
  const [PositionNumber, setPositionNumber] = useState('');
  const [Distributed, setDistributed] = useState('');
  const [Shortage, setShortage] = useState('');

  const [loading, setLoading ] = useState(false);
  const navigate  = useNavigate();
  const { enqueueSnackBar } = useSnackbar();
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/rmDistributes/${id}`)
    .then((response) => {
      setDistributeID(response.data.DistributeID);
      setDate(response.data.Date)
      setLineNumber(response.data.LineNumber)
      setPositionNumber(response.data.PositionNumber)
      setDistributed(response.data.Distributed)
      setShortage(response.data.Shortage)
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      alert('An error happend. Please Check console');
      console.log(error);
    });
  }, [])

  const handleUpdateRawmDistribute = () => {
    const data = {
      DistributeID,
      Date,
      LineNumber,
      PositionNumber,
      Distributed,
      Shortage,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/rmDistributes/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/RawmDistributes');
        enqueueSnackBar('Distribution updated successfully', { variant: 'success' });
      })
      .catch ((error) => {
        setLoading(false);
        // alert('An error happened. Please Check console');
        enqueueSnackBar('Error', { variant: 'error' });
        console.log(error);
      } );  
  };

  return (
    <div className = 'relative'>
      <PMHeader drm = {true} />
      <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <center>
        <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
          Raw Material Distribution
        </h1>
      </center>
      {loading ? <Spinner/> : ''}
        <div
          className='flex flex-col bg-bgc rounded-xl w-[600px] p-4 mx-auto font-BreeSerif mb-5'
        >
          <h1 className='text-3xl my-4 text-center'>Update Raw Material Distribution Form</h1>
          <div className='my-2'>
            <label className='text-xl mr-4'>Distribute ID</label>
            <input
            className='drop-shadow-md px-4 py-2 w-full'
            placeholder='Enter Distribute ID'
            id='distributeid'
            name='DistributeID'
            type='text'
            value={DistributeID}
            onChange={(e) => setDistributeID(e.target.value)}
            validation={{ required: 'Distribute ID is required' }}
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
            value={Date}
            onChange={(e) => setDate(e.target.value)}
            validation={{ required: 'Date is required' }}
            />
          </div>
          <div className='my-2'>
            <label className='text-xl mr-4'>Line Number</label>
            <input
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='linenumber'
            name='LineNumber'
            placeholder='Enter Line Number'
            value={LineNumber}
            onChange={(e) => setLineNumber(e.target.value)}
            validation={{ required: 'Line Number is required' }}
            />
          </div>
          <div className='my-2'>
            <label className='text-xl mr-4'>Position Number</label>
            <input
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='positionnumber'
            name='PositionNumber'
            placeholder='Enter Position Number'
            value={PositionNumber}
            onChange={(e) => setPositionNumber(e.target.value)}
            validation={{ required: 'Position Number is required' }}
          />
          </div>
          <div className='my-2'>
            <label className='text-xl mr-4'>Distributed Raw Materials</label>
            <textarea
            className='drop-shadow-md px-4 py-2 w-full' 
            type='text'
            id='distributed'
            name='Distributed'
            placeholder='Enter Distributed Raw Materials'
            value={Distributed}
            onChange={(e) => setDistributed(e.target.value)}
            validation={{ required: 'Distributed raw materials must be filled' }}
            />
          </div>
          <div className='my-2'>
            <label className='text-xl mr-4'>Shortage(if needed)</label>
            <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='shortage'
            name='Shortage'
            placeholder='Shortage if needed'
            value={Shortage}
            onChange={(e) => setShortage(e.target.value)}
            validation= {{ required: 'If there is no shortage,enter null' }}
            />
          </div>
          {/* <button className= 'p-2 bg-black m-8 text-white rounded-xl' onClick={handleUpdateRawmDistribute}>Submit</button> */}
          <center className="mt-3" onClick={handleUpdateRawmDistribute}><SubmitButton/></center>
        </div>
        <div className="h-40 mt-10 ml-5"></div>
        </div>
        <StaffFooter/>
    </div>
  )
}

export default UpdatermDistributes
