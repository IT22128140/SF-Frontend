import React, { useState } from 'react'
import { X } from 'lucide-react'
import { useRef } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../components/button2/SubmitButton';

function MyModal({onClose}) {
    const modalRef = useRef();
    
    const closeModal = (e) => {
        if(modalRef.current === e.target){
            onClose();
        }
    }


    
    const [requstId, setrequstId] = useState('');
    const [fabricType, setfabricType] = useState('');
    const [buttonType, setbuttonType] = useState('');
    const [threadType, setthreadType] = useState('');
    const [otherMaterial, setotherMaterial] = useState('');
    const [fillingDate, setfillingDate] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveRequest = () => {
        const data = {
            requstId,
            fabricType,
            buttonType,
            threadType,
            otherMaterial,
            fillingDate
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/ReqFF', data)
            .then(() => {
                setLoading(false);
                alert('Submit succesfull!');
                navigate('/Fullfillrequset'); 
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please check console');
                console.log(error);
            });
    };
  return (
    <div ref={modalRef} onClick={closeModal} className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
        <div className='flex flex-col items-center justify-center gap-5 mt-10 text-black'>
            <button onClick={onClose} className='place-self-end'><X size={50}/></button>
            <div className='p-4'>
       
            <h1 className='my-8 text-6xl font-semibold text-black font-philosopher alignment-center'>Full fill the Request</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 rounded border-sky-300-xl w-[500px] p-4 mx-auto '>
            <div className='pt-3 my-4'>
                    <label className='mr-4 text-3xl text-white '>Request Id</label>
                    <input
                        type='String'
                        value={requstId}
                        onChange={(e) => setrequstId(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-3xl text-white'>Fabric Type</label>
                    <input
                        type='String'
                        value={fabricType}
                        onChange={(e) => setfabricType(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-3xl text-white'>Button Type</label>
                    <input
                        type='String'
                        value={buttonType}
                        onChange={(e) => setbuttonType(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-3xl text-white'>Thread Type</label>
                    <input
                        type='String'
                        value={threadType}
                        onChange={(e) => setthreadType(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div> <div className='my-4'>
                    <label className='mr-4 text-3xl text-white'>Other Material</label>
                    <input
                        type='String'
                        value={otherMaterial}
                        onChange={(e) => setotherMaterial(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-3xl text-white'>Filling Date</label>
                    <input
                        type='Date'
                        value={fillingDate}
                        onChange={(e) => setfillingDate(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                </div>

                <SubmitButton onClick={handleSaveRequest} className="mr-2">Submit</SubmitButton>


            </div>
        </div>
            </div>    
        </div>
  )
}

export default MyModal;