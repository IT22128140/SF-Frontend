import React from 'react'
import CustomerNavbar from './navbar/CustomerNavbar';
import Footer from './footer/Footer';

const AboutUs = () => {
  return (
    <div>
        <CustomerNavbar/>
        <div className='h-60 border-2 bg-aboutUs opacity-80'>
            <center className='text-white mt-10 text-6xl font-Lavish'>About Us</center>
            <div className=' p-10'>
                <center>
                <p className='font-Philosopher text-lg text-white'>Welcome to Serendib Fashion Clothing Store. We are passionate about making creative fashionable clothes with a dedicated team which works incredibly to ensure the standards of quality of service, aiming to make a meaningful impact on the clothing industry.</p>
                </center>
            </div>
            </div>
            <div className="flex justify-around mt-6 ">
          <div className="w-64 h-60 bg-gray-400 opacity-80 shadow-sm rounded-lg">
            <center className='mt-4 mb-4 font-Lavish text-xl font-bold'>Our Mission</center>
            <center className='font-Philosopher'>To inspire confidence and individuality through innovative, high-quality fashion garments that exceed expectations in design and service.</center>
          </div>
          <div className="w-64 h-60 bg-gray-400 opacity-80 shadow-sm rounded-lg">
            <center className='mt-4 mb-4 font-Lavish text-xl font-bold'>Our Vission</center>
            <center className='font-Philosopher'>To be a global fashion leader, celebrated for creativity, sustainability, and fostering a diverse and inclusive community.</center>
          </div>
          <div className="w-64 h-60 bg-gray-400 opacity-80 shadow-sm rounded-lg">
            <center className='mt-4 mb-4 font-Lavish text-xl font-bold'>Our Values</center>
            <center className='font-Philosopher'>"At Serendib Fashion, our values are clear: creativity drives our designs, quality defines our craftsmanship, sustainability guides our choices, integrity shapes our interactions, and community unites us."</center>
            <center></center>
          </div>
        </div>

        <div className='pb-8 mt-8 border-2 bg-div2 opacity-90'>
  <center className='text-4xl font-Lavish mt-6'>Meet Our Team</center>
  <div className="grid grid-cols-4 gap-4 mt-6">
    <div className="flex flex-col justify-center items-center">
      <img src="emp.png" alt="Profile 1" className="h-20 w-20 rounded-full" />
      <p className="mt-2">Maneth Dewpura</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="emp.png" alt="Profile 2" className="h-20 w-20 rounded-full" />
      <p className="mt-2">Sandithi Nethsiluni</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="emp.png" alt="Profile 3" className="h-20 w-20 rounded-full" />
      <p className="mt-2">Isuru Kulathunga</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="emp.png" alt="Profile 4" className="h-20 w-20 rounded-full" />
      <p className="mt-2">Gihan Banuka</p>
    </div>



    <div className="flex flex-col justify-center items-center">
      <img src="emp.png" alt="Profile 5" className="h-20 w-20 rounded-full" />
      <p className="mt-2">Perinparaja Sageevan</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="emp.png" alt="Profile 6" className="h-20 w-20 rounded-full" />
      <p className="mt-2">Ridmi Rupasinghe</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="emp.png" alt="Profile 7" className="h-20 w-20 rounded-full" />
      <p className="mt-2">Hiranya Kuruppu</p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="emp.png" alt="Profile 8" className="h-20 w-20 rounded-full" />
      <p className="mt-2">Maheshwaran Varagan</p>
    </div>
  </div>
</div>
        <Footer/>
    </div>
  )
};

export default AboutUs
