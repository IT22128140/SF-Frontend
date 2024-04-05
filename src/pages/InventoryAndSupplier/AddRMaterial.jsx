import React, { useState } from 'react';
import BackButton from '../../components/button/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/button2/SubmitButton';

const AddRMaterial = () => {
    const [materialType, setMaterialType] = useState('');
    const [colorAndDesign, setColorAndDesign] = useState('');
    const [quantity, setQuantity] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveRmaterials = () => {
        const data = {
            materialType,
            colorAndDesign,
            quantity,
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/RMstock', data)
            .then(() => {
                setLoading(false);
                navigate('/'); // Navigate to the RawMaterialStock page
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
                    <label className='mr-4 text-xl text-gray-500'>material Type</label>
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
                    <label className='mr-4 text-xl text-gray-500'>quantity</label>
                    <input
                        type='number'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>

                <SubmitButton onClick={handleSaveRmaterials} className="mr-2">Submit</SubmitButton>


            </div>
        </div>

    )
}

export default AddRMaterial;
