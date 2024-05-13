import React, { useState ,useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/form/Input';
import Button from '../../components/button/Button';
import CancelButton from '../../components/button2/CancelButton';
import DeleteButton from '../../components/button2/DeleteButton';
import { FormProvider, useForm } from 'react-hook-form';

const MoveReleaseProduct = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams() ;

  const handleDeleteReleaseProduct = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/qualityControl/releaseProduct/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/qualityControl/reviewRequest')
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      });
  
  }; 

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {loading ? <Spinner /> : ''}
      <div className='Flex flex-col item-center border-2 border-bcg rounded-x1 w-[600] p-8 px-auto bg-white'>
        <h3 className='text-2xl'>The Request is accepted.</h3>
        <div className="flex justify-end mt-4">

          <DeleteButton className='mr-2' onClick={handleDeleteReleaseProduct}>
             Delete
          </DeleteButton>
        </div>
        
      </div>
      
    </div>
  )
}

export default MoveReleaseProduct;