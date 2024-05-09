import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AiOutlineCheckCircle } from "react-icons/ai";
import Spinner from '../../components/Spinner';
import { useNavigate } from 'react-router-dom';
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import RejectButton from '../../components/button2/RejectButton';
import { MdOutlineCancel } from "react-icons/md";

const AcceptedMPshortages = () => {

    const [mpshortage, setMPshortage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
        .get(`http://localhost:5555/mpshortages/${id}`)
        .then((response) => {
            setMPshortage(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, [])



    return(
        <div className='relative'>
            <MaintenanceManagerHeader/>
            {loading ? (
             <Spinner/>
            ):(
                <div className="bg-formBackground flex flex-col border-2 rounded-xl w-[600px] p-4 mx-auto">
                    <h1 className='text-3xl text-center my-4 font-BreeSerif'>Show Machine Part Shortage Request</h1>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Request ID</span>
                        <span className='font-BreeSerif'>{mpshortage.RequestID}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Requested Date</span>
                        <span className='font-BreeSerif'>{mpshortage.Requested}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Part Name</span>
                        <span className='font-BreeSerif'>{mpshortage.PartName}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Description</span>
                        <span className='font-BreeSerif'>{mpshortage.Description}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Quantity</span>
                        <span className='font-BreeSerif'>{mpshortage.Quantity}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Condition</span>
                        <span className='font-BreeSerif'>{mpshortage.Condition}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Part Needed Before</span>
                        <span className='font-BreeSerif'>{mpshortage.NeededBeforeDate}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Status</span>
                        <span className='font-BreeSerif'>{mpshortage.Status}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Created Time</span>
                        <span className='font-BreeSerif'>{new Date(mpshortage.createdAt).toString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Last Updated Time</span>
                        <span className='font-BreeSerif'>{new Date(mpshortage.updatedAt).toString()}</span>
                    </div>
     
                </div>
            )}
            <StaffFooter/>
        </div>
    )
}

export default AcceptedMPshortages
