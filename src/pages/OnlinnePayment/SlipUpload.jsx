import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';  
import Spinner from '../../components/Spinner';
import SubmitButton from '../../components/button2/SubmitButton';
import CustomerNavbar from '../../components/navbar/CustomerNavbar';
import Footer from '../../components/footer/Footer';

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
        <div>
        <div>
             <CustomerNavbar />
            
       
        <div className='p-4 h-screen overflow-y-auto' >
            <div className='flex justify-center items-center'>
                <h1 className='text-4xl my-8'>Payment Slip Page</h1>
            </div>
            <label className="block text-ternary text-2xl font-bold mb-2 absolute top-[200px] left-[300px] ">Bank Details</label>
            <br />

            <label className="block text-ternary text-sm font-bold mb-3 absolute top-[280px] left-[300px]">Bank Name</label>
            <span className="border border-black border-1 p-1 block mb-2 absolute top-[310px] left-[300px]">Seylan Bank</span>

            
            <label className="block text-ternary text-sm font-bold mb-3 absolute top-[365px] left-[300px]">Account Number</label>
            <span className="border border-black border-1 p-1 block mb-2 absolute top-[395px] left-[300px]">123456789</span>

            <label className="block text-ternary text-sm font-bold mb-3 absolute top-[450px] left-[300px]">Branch</label>
            <span className="border border-black border-1 p-1 block mb-2 absolute top-[485px] left-[300px]">malabe</span>

            <hr className="border border-black border-1 absolute left-0 right-0 w-full top-0 absolute top-[550px]  " />

            <label className="block text-ternary text-sm font-bold mb-3 absolute top-[580px] left-[300px]">Add Slip image</label>
            <input
                  type="file"
                className="appearance-none border border-black border-1 p-1 block mb-2 absolute top-[610px] left-[300px] w-60 h-20"
            />
                
            <label className="block text-ternary text-sm font-bold mb-3 absolute top-[715px] left-[300px]">Bank Name</label>
            <input
                 type="text"
                 className="border border-black border-1 p-1 block mb-2 absolute top-[745px] left-[300px]"
            /> 

            <label className="block text-ternary text-sm font-bold mb-3 absolute top-[800px] left-[300px]">Branch</label>
            <input
                 type="text"
                 className="border border-black border-1 p-1 block mb-2 absolute top-[830px] left-[300px]"
            /> 
             <label className="block text-ternary text-sm font-bold mb-3 absolute top-[580px] left-[900px]">Email Address</label>
                   <input
                     type="email"
                    className="border border-black border-1 p-1 block mb-2 absolute top-[610px] left-[900px]"
            /> 

            <label className="block text-ternary text-sm font-bold mb-3 absolute top-[715px] left-[900px]">Full Name</label>
                <input
                 type="text"
                 className="border border-black border-1 p-1 block mb-2 absolute top-[745px] left-[900px]"
            /> 
             <label className="block text-ternary text-sm font-bold mb-3 absolute top-[800px] left-[900px]">Phone Number</label>
            <input
                 type="number"
                 className="border border-black border-1 p-1 block mb-2 absolute top-[830px] left-[900px]"
            /> 
            <div>
            <SubmitButton className=" absolute top-[1000px] left-[600px]">Confirm</SubmitButton>
            </div>
            </div>
            
            
            </div>
            <Footer/>
            </div>
            

            

            
        
    );
}

export default SlipUpload