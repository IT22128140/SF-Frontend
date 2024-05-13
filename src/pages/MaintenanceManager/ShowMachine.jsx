import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const ShowMachine = () => {

    const [machine, setMachine] = useState('');
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
        .get(`http://localhost:5555/machines/${id}`)
        .then((response) => {
            setMachine(response.data);
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
                <div className="bg-bgc flex flex-col border-2 rounded-xl w-[600px] p-4 mx-auto">
                    <h1 className='text-3xl text-center my-4 font-BreeSerif'>Show Machine</h1>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Machine ID</span>
                        <span className='font-BreeSerif'>{machine.MachineID}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Machine Name</span>
                        <span className='font-BreeSerif'>{machine.MachineName}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Purchased Date</span>
                        <span className='font-BreeSerif'>{machine.PurchasedDate}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Condition</span>
                        <span className='font-BreeSerif'>{machine.Condition}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Cost</span>
                        <span className='font-BreeSerif'>{machine.Cost}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Manufacturer</span>
                        <span className='font-BreeSerif'>{machine.Manufacturer}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Category</span>
                        <span className='font-BreeSerif'>{machine.Category}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Created Time</span>
                        <span className='font-BreeSerif'>{new Date(machine.createdAt).toString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Last Updated Time</span>
                        <span className='font-BreeSerif'>{new Date(machine.updatedAt).toString()}</span>
                    </div>
                </div>
            )}
            <StaffFooter/>
        </div>
    )
}

export default ShowMachine
