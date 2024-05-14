import React, { useState } from 'react';
import BackButton from '../../components/button/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/button2/SubmitButton';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const AddSupplieredRaws = () => {
    const [supplierID, setsupplierID] = useState('');
    const [fabricType_Colour_Quantity, setfabricType_Colour_Quantity] = useState('');
    const [button_Colour_Quantity, setbutton_Colour_Quantity] = useState('');
    const [thread_Colour_Quantity, setthread_Colour_Quantity] = useState('');
    const [other_Materials, setother_Materials] = useState('');
    const [recivedDate, setrecivedDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        let errors = {};

        if (!supplierID.trim()) {
            errors.supplierID = 'Supplier ID is required';
        }
      
        setErrors(errors);
        return Object.keys(errors).length === 0; 
    };

    const handleSaveSupRm = (e) => {
        e.preventDefault(); 

        if (!validateForm()) {
            return; 
        }

        const data = {
            supplierID,
            fabricType_Colour_Quantity,
            button_Colour_Quantity,
            thread_Colour_Quantity,
            other_Materials,
            recivedDate
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/suppRM', data)
            .then(() => {
                setLoading(false);
                navigate('/SupplierDetails/SupplieredRaws/:id'); 
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please check console');
                console.log(error);
            });
    };

    return (
        <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
            <IsNavbar/>
            <BackButton />
            <div className="flex items-center justify-center mb-9">
                <h1 className="my-8 text-6xl font-semibold font-philosopher text-ternary alignment-center">Add details </h1>
            </div>
            {loading ? <Spinner /> : ''}
            <div className='bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif '>
                <form onSubmit={handleSaveSupRm}>
                    <div className='my-4'>
                        <label className='mr-4 text-xl text-gray-500 font-Philosopher'>supplierID </label>
                        <input
                            type='String'
                            value={supplierID}
                            onChange={(e) => setsupplierID(e.target.value)}
                            className='w-full px-4 py-2 border-2 border-gray-500'
                        />
                        {errors.supplierID && <span className="text-red-500">{errors.supplierID}</span>}
                    </div>
                    <div className='my-4'>
                        <label className='mr-4 text-xl text-gray-500 font-Philosopher'>fabricType_Colour_Quantity </label>
                        <input
                            type='String'
                            value={fabricType_Colour_Quantity}
                            onChange={(e) => setfabricType_Colour_Quantity(e.target.value)}
                            className='w-full px-4 py-2 border-2 border-gray-500'
                        />
                        {errors.fabricType_Colour_Quantity && <span className="text-red-500">{errors.fabricType_Colour_Quantity}</span>}
                    </div>
                    <div className='my-4'>
                        <label className='mr-4 text-xl text-gray-500 font-Philosopher'>button_Colour_Quantity </label>
                        <input
                            type='String'
                            value={button_Colour_Quantity}
                            onChange={(e) => setbutton_Colour_Quantity(e.target.value)}
                            className='w-full px-4 py-2 border-2 border-gray-500'
                        />
                        {errors.button_Colour_Quantity && <span className="text-red-500">{errors.button_Colour_Quantity}</span>}
                    </div>
                    <div className='my-4'>
                        <label className='mr-4 text-xl text-gray-500 font-Philosopher'>thread_Colour_Quantity </label>
                        <input
                            type='String'
                            value={thread_Colour_Quantity}
                            onChange={(e) => setthread_Colour_Quantity(e.target.value)}
                            className='w-full px-4 py-2 border-2 border-gray-500'
                        />
                        {errors.thread_Colour_Quantity && <span className="text-red-500">{errors.thread_Colour_Quantity}</span>}
                    </div>
                    <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>other_Materials </label>
                    <input
                            type='String'
                            value={other_Materials}
                            onChange={(e) => setother_Materials(e.target.value)}
                            className='w-full px-4 py-2 border-2 border-gray-500'
                        />
                        {errors.other_Materials && <span className="text-red-500">{errors.other_Materials}</span>}
                    </div>
                    <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>recivedDate </label>
                    <input
                            type='Date'
                            value={recivedDate}
                            onChange={(e) => setrecivedDate(e.target.value)}
                            className='w-full px-4 py-2 border-2 border-gray-500'
                        />
                        {errors.recivedDate && <span className="text-red-500">{errors.recivedDate}</span>}
                    </div>
                    <SubmitButton type="submit" className="mr-2">Submit</SubmitButton>
                </form>
            </div>
            <StaffFooter/>
        </div>
    )
}

export default AddSupplieredRaws;
