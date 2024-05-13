import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const ShowRepair = () => {

    const [repair, setRepair] = useState('');
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
        .get(`http://localhost:5555/repairs/${id}`)
        .then((response) => {
            setRepair(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, [id])

    return(
        <div className='relative'>
            <MaintenanceManagerHeader/>
            <div className='w-full mt-6 h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
            {loading ? (
             <Spinner/>
            ):(
                <div className="bg-bgc flex flex-col border-2 rounded-xl w-[600px] p-4 mx-auto">
                    <h1 className='text-3xl text-center my-4 font-BreeSerif'>Show Repair</h1>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Repair ID</span>
                        <span className='font-BreeSerif'>{repair.RepairID}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Repair Description</span>
                        <span className='font-BreeSerif'>{repair.RepairDescription}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Requested Date</span>
                        <span className='font-BreeSerif'>{new Date(repair.createdAt).toDateString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Requested Time</span>
                        <span className='font-BreeSerif'>{repair.RequestedTime}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Urgency Level</span>
                        <span className='font-BreeSerif'>{repair.UrgencyLevel}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Status</span>
                        <span className='font-BreeSerif'>{repair.Status}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Completed Date</span>
                        <span className='font-BreeSerif'>{repair.CompletedDate}</span>
                    </div>


                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Workers</span>
                        <div>
                            {repair.Workers && repair.Workers.map((worker, index) => (
                                <div key={index}>
                                    <span className='font-BreeSerif'>{worker.employeeID} - {worker.firstName} {worker.lastName}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Last Updated Time</span>
                        <span className='font-BreeSerif'>{new Date(repair.updatedAt).toDateString()}</span>
                    </div>
                </div>
            )}
            </div>
            <StaffFooter/>
        </div>
    )
}

export default ShowRepair
