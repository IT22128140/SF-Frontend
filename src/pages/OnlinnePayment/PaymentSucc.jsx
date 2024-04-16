import React from 'react'
import CustomerNavbar from '../../components/navbar/CustomerNavbar';
import Footer from '../../components/footer/Footer';

const PaymentSucc = () => {
    return (
        <div>
            <CustomerNavbar />

        <div className='p-4 h-screen overflow-y-auto' >
            <div className='flex justify-center items-center'>
                <h1 className='text-4xl my-8'>Payment Successful </h1>
            </div>

            <label className="block text-ternary text-2xl font-bold mb-2 absolute top-[220px] left-[320px] ">Thank you for your purches</label>

            <br />

            <button className='border border-black border-1 p-2 block mb-2 absolute top-[280px] left-[350px] '> Print </button>
            <button className='border border-black border-1 p-2 block mb-2 absolute top-[280px] left-[500px]' >Home</button>




            </div>
            <Footer />
            </div>
        
      );
}

export default PaymentSucc