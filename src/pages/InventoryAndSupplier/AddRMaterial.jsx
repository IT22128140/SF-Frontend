import React, { useState } from 'react';
import BackButton from '../../components/button/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/button2/SubmitButton';


const AddRMaterial = () => {
    const [requestID,setrequestID] = useState('');
    const [materialType, setMaterialType] = useState('');
    const [colorAndDesign, setColorAndDesign] = useState('');
    const [initialquantity, setinitialquantity] = useState('');
    const [costperunit, setcostperunit] = useState('');
    const [restockingdate, setrestockingdate] = useState('');
    const [availablequantity, setavailablequantity] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveRmaterials = () => {
        const data = {
            
            requestID,
            materialType,
            colorAndDesign,
            initialquantity,
            costperunit,
            restockingdate,
            availablequantity
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/RMstock', data)
            .then(() => {
                setLoading(false);
                navigate('/RawMaterialStock'); // Navigate to the RawMaterialStock page
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please check console');
                console.log(error);
            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='my-4 text-3xl'>Add Raw materialStock</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 rounded border-sky-400-xl w-[600px] p-4 mx-auto '>
            <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500'>Request id </label>
                    <input
                        type='String'
                        value={requestID}
                        onChange={(e) => setrequestID(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500'>Material Type</label>
                    <input
                        type='String'
                        value={materialType}
                        onChange={(e) => setMaterialType(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500'>colorAndDesign</label>
                    <input
                        type='String'
                        value={colorAndDesign}
                        onChange={(e) => setColorAndDesign(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500'>Initialquantity</label>
                    <input
                        type='number'
                        value={initialquantity}
                        onChange={(e) => setinitialquantity(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500'>restockingdate</label>
                    <input
                        type='Date'
                        value={restockingdate}
                        onChange={(e) => setrestockingdate(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500'>Availablequantity</label>
                    <input
                        type='number'
                        value={availablequantity}
                        onChange={(e) => setavailablequantity(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <SubmitButton onClick={handleSaveRmaterials} className="mr-2">Submit</SubmitButton>


            </div>
        </div>

    )
}

export default AddRMaterial;
