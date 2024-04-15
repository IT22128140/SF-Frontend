import React, { useState } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const DeleteMachine = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteMachine = () => {
    setLoading(true);
    axios
    .delete(`http://localhost:5555/machines/${id}`)
    .then(() => {
      setLoading(false);
      navigate('/machines/view');
    })
    .catch((error) => {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
    });
  };


  return (
    <div className='relative'>
      <MaintenanceManagerHeader/>
      <h1 className='text-3xl my-4 font-Philosopher'>Delete Machine</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col items-center border-2 border-black-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl font-BreeSerif'>Are Yoy Sure You Want to Delete This Machine</h3>

        <button className='p-4 bg-red-600 text-white m-8 w-full font-BreeSerif' onClick={handleDeleteMachine}> 
          Yes, Delete it
        </button>
      </div>
      <StaffFooter/>
    </div>
  )
}

export default DeleteMachine