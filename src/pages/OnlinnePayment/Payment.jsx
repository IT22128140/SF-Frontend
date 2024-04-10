import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';  
import RejectButton from '../../components/button2/RejectButton';
import DeleteButton from '../../components/button2/DeleteButton';
import Spinner from '../../components/Spinner';

const Payment = () => {
    const [payment, setPayment] = useState({});
    const [loading, setLoading] = useState(false); // Initially set to true to show loading spinner
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5555/payment/${id}`)
            .then((response) => {
                setPayment(response.data);
                setLoading(false); // Once data is fetched, set loading to false
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false); // Set loading to false even if there's an error
            });

    }, []); // Include id in dependency array to re-fetch data when id changes

    return (
        <div className='p-4 h-screen overflow-y-auto'>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl my-8'>Payment</h1>
            </div>
            <div className='p-4 mx-auto max-w-lg '>
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <div className="mb-4">
                            <h3 className='text-sm font-semibold'>Easily handle payments on our safe online platform. Quick, simple, and secure transactions ensure a smooth digital experience, making your financial interactions trouble-free and efficient.</h3>
                            <label className="block text-ternary text-sm font-bold mb-3">Total Payment</label>
                            <span className="border border-black border-1 p-1 block mb-2">{payment.totalpayment}</span>
                        </div>
                        <div className='flex justify-between'>
                            <RejectButton>Back</RejectButton>
                            <DeleteButton>Delete</DeleteButton>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Payment;
