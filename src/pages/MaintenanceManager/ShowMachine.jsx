import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
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
        <div className='w-full mt-6 h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
            <MaintenanceManagerHeader/>
            {loading ? (
             <Spinner/>
            ):(
                <div className="bg-bgc flex flex-col border-2 rounded-xl w-[600px] p-4 mt-20 mx-auto">
                    <h1 className='text-3xl text-center my-4 font-BreeSerif'>Machine Details</h1>
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
                        <span className='font-BreeSerif'>{new Date(machine.createdAt).toDateString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Last Updated Time</span>
                        <span className='font-BreeSerif'>{new Date(machine.updatedAt).toDateString()}</span>
                    </div>

                        {machine.Category && machine.Category.toLowerCase() === "sewing machine" && (
                            <Link to={`/maintenance/view/${machine.MachineID}`}>
                                <button className="bg-ternary ml-52 text-white font-bold py-2 px-4 rounded mt-4">
                                    Maintenance Tracker
                                </button>
                            </Link>
                        )}
                </div>
            )}
            <div className='h-40'></div>
            <StaffFooter/>
        </div>
    )
}

export default ShowMachine
