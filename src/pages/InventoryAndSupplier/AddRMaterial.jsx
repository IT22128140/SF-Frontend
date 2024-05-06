import React, { useState } from 'react';
import BackButton from '../../components/button/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/button2/SubmitButton';


const AddRMaterial = () => {
    const [materialID,setmaterialID] = useState('');
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
            
            materialID,
            materialType,
            colorAndDesign,
            initialquantity,
             restockingdate,
            availablequantity ,
            costperunit,
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
            <div className="flex items-center justify-center mb-9">
        <h1 className="text-6xl my-9 font-Philosopher">Add raw material details </h1>
      </div>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 bg-formbg rounded border-sky-300-xl w-[500px] p-4 mx-auto '>
            <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Material id </label>
                    <input
                        type='String'
                        value={materialID}
                        onChange={(e) => setmaterialID(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-philosopher'>Material Type</label>
                    <input
                        type='String'
                        value={materialType}
                        onChange={(e) => setMaterialType(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-philosopher'>colorAndDesign</label>
                    <input
                        type='String'
                        value={colorAndDesign}
                        onChange={(e) => setColorAndDesign(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Initialquantity</label>
                    <input
                        type='number'
                        value={initialquantity}
                        onChange={(e) => setinitialquantity(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>restockingdate</label>
                    <input
                        type='Date'
                        value={restockingdate}
                        onChange={(e) => setrestockingdate(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Availablequantity</label>
                    <input
                        type='number'
                        value={availablequantity}
                        onChange={(e) => setavailablequantity(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>cost per unit</label>
                    <input
                        type='string'
                        value={costperunit}
                        onChange={(e) => setcostperunit(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <SubmitButton onClick={handleSaveRmaterials} className="mr-2">Submit</SubmitButton>


            </div>
        </div>

    )
}

export default AddRMaterial;
