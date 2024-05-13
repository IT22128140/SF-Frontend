import React, { useState } from 'react';
import BackButton from '../../components/button/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/button2/SubmitButton';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const AddSuppliers = () => {
    const [SrequestID, setSrequestID] = useState('');
    const [supplierName, setSupplierName] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [supplierType, setSupplierType] = useState('');
    const [contractExpiary, setContractExpiary] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveSupplier = () => {
        // Frontend validation
        if (
            !SrequestID ||
            !supplierName ||
            !address ||
            !contactNumber ||
            !email ||
            !supplierType ||
            !contractExpiary
        ) {
            alert('Please fill in all fields');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Validate contact number format
        const contactNumberRegex = /^\d{10}$/;
        if (!contactNumberRegex.test(contactNumber)) {
            alert('Please enter a valid 10-digit contact number');
            return;
        }

        // If all validations pass, proceed with saving the supplier
        setLoading(true);
        const data = {
            SrequestID,
            supplierName,
            address,
            contactNumber,
            email,
            supplierType,
            contractExpiary,
        };
        axios
            .post('http://localhost:5555/supdetails', data)
            .then(() => {
                setLoading(false);
                navigate('/SupplierDetails');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error occurred. Please check console for details.');
                console.error('Error:', error);
            });
    };

    return (
        <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
            <BackButton />
            <IsNavbar />
            <div className="flex items-center justify-center mb-9">
                <h1 className="my-8 text-6xl font-semibold font-philosopher text-ternary alignment-center">Add supplier </h1>
            </div>
            {loading ? <Spinner /> : ''}
            <div className='bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif'>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Supplier ID</label>
                    <input
                        type='text'
                        value={SrequestID}
                        onChange={(e) => setSrequestID(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Supplier Name</label>
                    <input
                        type='text'
                        value={supplierName}
                        onChange={(e) => setSupplierName(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Address</label>
                    <input
                        type='text'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Email</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Contact Number</label>
                    <input
                        type='tel'
                        pattern="[0-9]{10}"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Supplier Type</label>
                    <input
                        type='text'
                        value={supplierType}
                        onChange={(e) => setSupplierType(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Contract Expiry</label>
                    <input
                        type='date'
                        value={contractExpiary}
                        onChange={(e) => setContractExpiary(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <SubmitButton onClick={handleSaveSupplier} className="mr-2">Submit</SubmitButton>
            </div>
            <StaffFooter />
        </div>
    );
};

export default AddSuppliers;
