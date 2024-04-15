import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';  
import Spinner from '../../components/Spinner';

const SlipUpload = () => {
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

    }, []);
    return (
        <div className='p-4 h-screen overflow-y-auto'>
            <div className='flex justify-center items-center'>
                <h1 className='text-4xl my-8'>Payment Slip Page</h1>
            </div>

            <label className="block text-ternary text-2xl font-bold mb-2 absolute top-[250px] left-[200px] ">Bank Details</label>
            <br />

            <label className="block text-ternary text-sm font-bold mb-3 absolute top-[300px] left-[200px]">Bank Name</label>
            <span className="border border-black border-1 p-1 block mb-2 absolute top-[325px] left-[200px]">Seylan Bank</span>
            

            



                {/* {loading ? (
                    <Spinner />
                ) : (
                    // <>
                    //     <div className="mb-4">

                    //         <h3 className="text-sm font-semibold leading-relaxed absolute top-[150px] left-[200px] ">Easily handle payments on our safe online platform. Quick, simple, and secure transactions ensure a smooth digital experience, <br />

                    //         making your financial interactions trouble-free and efficient.</h3>

                    //         <label className="block text-ternary text-lg font-bold mb-2 absolute top-[250px] left-[200px] ">Total Payment</label>

                    //         <span className="border border-black border-1 p-2 block mb-2 absolute top-[290px] left-[200px]">Rs.{payment.totalpayment}</span>

                    //         <label className="block text-ternary text-lg font-bold mb-2 absolute top-[360px] left-[200px] ">Select your payment method</label>
                            
                    //         <button className="border border-black border-1 p-2 block mb-2 absolute top-[420px] left-[200px]">Cash on delivery</button>

                    //         <button className="border border-black border-1 p-2 block mb-2 absolute top-[490px] left-[200px]">Slip Upload</button>

                    //     </div>
                        
                    // </>
                )} */}
            </div>
    );
}

export default SlipUpload