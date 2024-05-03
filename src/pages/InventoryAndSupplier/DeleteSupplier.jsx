import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import BackButton from '../../components/button/BackButton';
import DeleteButton from '../../components/button2/DeleteButton';

const DeleteSupplier = () => {
const [loading, setloading] = useState(false);
const navigate = useNavigate();
const {id} = useParams();

const handleDelete = () =>{
    setloading(true);
    axios
    .delete(`http://localhost:5555/supdetails/${id}`)
    .then(() => {
        setloading(false);
        navigate('/SupplierDetails');
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
        <div className="flex items-center justify-center mb-9">
        <h1 className="my-9 text-8xl">Delete Supplier </h1>
      </div>
        {loading ? <Spinner /> : ''}
        <div className='flex flex-col items-center justify-between border rounded border-2-sky-400-xl w-[600px] p-8 mx-auto'>
    <h3 className='text-3xl text-center'>Are you sure you want to delete this Supplier?</h3>
    <div className="mt-auto pt-7">
        <DeleteButton onClick={handleDelete} className="mr-2">Delete</DeleteButton>
    </div>
</div>
        </div>
  )
}

export default DeleteSupplier;