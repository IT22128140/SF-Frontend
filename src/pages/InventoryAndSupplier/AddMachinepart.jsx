import React, { useState } from 'react';
import BackButton from '../../components/button/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/button2/SubmitButton';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const Addmachinepart = () => {
    const [partID, setPartID] = useState('');
    const [partName, setPartName] = useState('');
    const [purchasedDate, setPurchasedDate] = useState('');
    const [condition, setCondition] = useState('');
    const [costPerUnit, setCostPerUnit] = useState('');
    const [quantity, setQuantity] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [loading, setLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const navigate = useNavigate();

    const handleSaveRmaterials = () => {
        const errors = {};

        if (!partID) {
            errors.partID = 'Part ID is required';
        }

        if (!partName) {
            errors.partName = 'Part Name is required';
        }

        if (!purchasedDate) {
            errors.purchasedDate = 'Purchased Date is required';
        }

        if (!condition) {
            errors.condition = 'Condition is required';
        }

        if (costPerUnit < 0) {
            errors.costPerUnit = 'Cost Per Unit should not be negative';
        }

        if (quantity < 0) {
            errors.quantity = 'Quantity should not be negative';
        }

        if (!manufacturer) {
            errors.manufacturer = 'Manufacturer is required';
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        const data = {
            partID,
            partName,
            purchasedDate,
            condition,
            costPerUnit,
            quantity,
            manufacturer,
        };

        setLoading(true);
        axios
            .post('http://localhost:5555/MPstock', data)
            .then(() => {
                setLoading(false);
                navigate('/MachinePartStock');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error occurred. Please check console for details.');
                console.error('Error:', error);
            });
    };

    return (
        <div>
         <IsNavbar />
         <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
           
            <BackButton />
            <div className="flex items-center justify-center mb-9">
                <h1 className="my-8 text-6xl font-semibold font-Philosopher text-ternary alignment-center ">Add Machine Part </h1>
            </div>
            {loading ? <Spinner /> : ''}
            <div className='bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif'>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Part ID</label>
                    <input
                        type='text'
                        value={partID}
                        onChange={(e) => setPartID(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    {validationErrors.partID && <small className="text-red-500">{validationErrors.partID}</small>}
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Part Name</label>
                    <input
                        type='text'
                        value={partName}
                        onChange={(e) => setPartName(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    {validationErrors.partName && <small className="text-red-500">{validationErrors.partName}</small>}
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Purchased Date</label>
                    <input
                        type='date'
                        value={purchasedDate}
                        onChange={(e) => setPurchasedDate(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    {validationErrors.purchasedDate && <small className="text-red-500">{validationErrors.purchasedDate}</small>}
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Condition</label>
                    <input
                        type='text'
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    {validationErrors.condition && <small className="text-red-500">{validationErrors.condition}</small>}
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Cost Per Unit</label>
                    <input
                        type='number'
                        value={costPerUnit}
                        onChange={(e) => setCostPerUnit(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    {validationErrors.costPerUnit && <small className="text-red-500">{validationErrors.costPerUnit}</small>}
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Quantity</label>
                    <input
                        type='number'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    {validationErrors.quantity && <small className="text-red-500">{validationErrors.quantity}</small>}
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Manufacturer</label>
                    <input
                        type='text'
                        value={manufacturer}
                        onChange={(e) => setManufacturer(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    {validationErrors.manufacturer && <small className="text-red-500">{validationErrors.manufacturer}</small>}
                </div>
                <SubmitButton onClick={handleSaveRmaterials} className="mr-2">Submit</SubmitButton>
            </div>
            <StaffFooter />
        </div></div>
    );
};

export default Addmachinepart;
