import React, { useState } from 'react';
import BackButton from '../../components/button/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/button2/SubmitButton';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const AddRMaterial = () => {
    const [materialID, setMaterialID] = useState('');
    const [materialType, setMaterialType] = useState('');
    const [colorAndDesign, setColorAndDesign] = useState('');
    const [initialQuantity, setInitialQuantity] = useState('');
    const [costPerUnit, setCostPerUnit] = useState('');
    const [restockingDate, setRestockingDate] = useState('');
    const [availableQuantity, setAvailableQuantity] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;

        if (!materialID.trim()) {
            isValid = false;
            alert('Please enter Material ID');
        } else if (!materialID.trim().startsWith('RM')) {
            isValid = false;
            alert('Material ID should start with "RM"');
        }

        if (!materialType.trim()) {
            isValid = false;
            alert('Please enter Material Type');
        }

        

        return isValid;
    };

    const handleSaveRmaterials = () => {
        if (validateForm()) {
            const data = {
                materialID,
                materialType,
                colorAndDesign,
                initialQuantity,
                restockingDate,
                availableQuantity,
                costPerUnit,
            };
            setLoading(true);
            axios
                .post('http://localhost:5555/RMstock', data)
                .then(() => {
                    setLoading(false);
                    navigate('/RawMaterialStock');
                })
                .catch((error) => {
                    setLoading(false);
                    alert('An error occurred. Please check console.');
                    console.log(error);
                });
        }
    };

    return (
        <div className='p-4'>
            <BackButton />
            <IsNavbar/>
            
            <div className="flex items-center justify-center mb-9">
                <h1 className="text-6xl my-9 font-Philosopher">Add raw material details</h1>
            </div>
            {loading ? <Spinner /> : ''}
            <div className='bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif
 '>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Material ID</label>
                    <input
                        type='String'
                        value={materialID}
                        onChange={(e) => setMaterialID(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Material Type</label>
                    <input
                        type='String'
                        value={materialType}
                        onChange={(e) => setMaterialType(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Color and Design</label>
                    <input
                        type='String'
                        value={colorAndDesign}
                        onChange={(e) => setColorAndDesign(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Initial Quantity</label>
                    <input
                        type='number'
                        value={initialQuantity}
                        onChange={(e) => setInitialQuantity(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Restocking Date</label>
                    <input
                        type='Date'
                        value={restockingDate}
                        onChange={(e) => setRestockingDate(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Available Quantity</label>
                    <input
                        type='number'
                        value={availableQuantity}
                        onChange={(e) => setAvailableQuantity(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Cost Per Unit</label>
                    <input
                        type='string'
                        value={costPerUnit}
                        onChange={(e) => setCostPerUnit(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <SubmitButton onClick={handleSaveRmaterials} className="mr-2">Submit</SubmitButton>
            </div>
            <StaffFooter/>
        </div>
    );
};

export default AddRMaterial;
