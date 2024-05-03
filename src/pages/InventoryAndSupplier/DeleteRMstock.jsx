import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import BackButton from '../../components/button/BackButton';
import DeleteButton from '../../components/button2/DeleteButton';


const DeleteRMstock = () => {
const [loading, setloading] = useState(false);
const navigate = useNavigate();
const {id} = useParams();

const handleDelete = () =>{
    setloading(true);
    axios
    .delete(`http://localhost:5555/RMstock/${id}`)
    .then(() => {
        setloading(false);
        navigate('/RawMaterialStock');
    })
    .catch((error) => {
        setloading(false);
        alert('an error happened');
        console.log(error);

    });
}; 
  return (
    <div className='p-4'>
        <BackButton />
        <h1 className='my-4 text-3xl'>Delete Raw Material</h1>
        {loading ? <Spinner /> : ''}
        <div className='flex-col items-center border rounded border-2-sky-400-xl w-[600px] p-8 mx-auto'>
            <h3 className='text-3xl'>Are you sure you want to delete this RawMaterial?</h3>
            
            <DeleteButton  onClick={handleDelete} className="mr-2">Delete</DeleteButton >
        </div>
        </div>
  )
}

export default DeleteRMstock;