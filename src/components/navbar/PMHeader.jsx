import React from 'react'
// import Logo from "./NavbarLogo.jsx";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const PMHeader = () => {
  return (
    <div>
      <div className="flex h-[70px] flex-row justify-between bg-white w-[100%] mt-3 pb-3">
      <div>
        <Link to="/" className="flex flex-row mt-2 w-full">
          <img
            src="/Logo1.png"
            alt="logo"
            className="w-full h-[3rem] ml-[1rem] mr-[2rem]"
          />
          <img src="/Logo2.png" alt="logo" className="w-[13rem] hidden lg:block" />
        </Link>
      </div>
      <div className="flex flex-row h-[70px] justify-between">
        <div className = 'flex flex-col h-[66px] justify-between font-BreeSerif' >
            <div className=''>Production Manager</div>
            <button className=" h-10 border-2 bg-orange-600 hover:bg-orange-700 w-20 text-white rounded-xl ml-8">LogOut</button>
        </div>
        <div className="group relative cursor-pointer py-2">
          <div className="flex items-center">
            <a className="menu-hover lg:mx-4">
              <IoPersonCircleOutline className="text-[50px] text-orange-600" />
            </a>
          </div>
          {/* <div className="invisible absolute z-50 flex w-full flex-col bg-bgc rounded-md text-ternary shadow-xl group-hover:visible">
            <a className="rounded-md p-2 my-2 block font-semibold text-ternary  hover:bg-primary">
                Login
            </a>
          </div> */}
        </div>
      </div>
      </div>
      <div className='flex h-[50px] flex-row justify-between bg-PMnavbar w-[100%] mt-3 pb-3 shadow-md font-BreeSerif my-10'>
        <div className='flex flex-row h-[66px] justify-between mt-1 mb-2 ml-12'>
            <Link to = "" >
                <button className='h-10 bg-PMnavbar hover:bg-primary w-40 text-ternary rounded-xl text-center'>Home</button>
            </Link>
            <Link to = "/rmRequests/create" >
                <button className='h-10 bg-PMnavbar hover:bg-primary w-60 text-ternary rounded-xl'>Requesting Raw Materials</button>
            </Link>
            <Link to = "/RawmRequests" >
                <button className='h-[40px] bg-PMnavbar hover:bg-primary w-40 text-ternary rounded-xl'>Requests</button>
            </Link>
            <Link to = "/rmDistributes/create" >
                <button className='h-[40px] bg-PMnavbar hover:bg-primary w-60 text-ternary rounded-xl'>Distributing for Lines</button>
            </Link>
            <Link to = "/RawmDistributes" >
                <button className='h-[40px] bg-PMnavbar hover:bg-primary w-40 text-ternary rounded-xl'>Distribution</button>
            </Link>
            <Link to = "/EmployeePerformance" >
                <button className='h-[40px] bg-PMnavbar hover:bg-primary w-60 text-ternary rounded-xl'>Employee Performance</button>
            </Link>
            <Link to = "/empPerformances/create" >
                <button className='h-[40px] bg-PMnavbar hover:bg-primary w-60 text-ternary rounded-xl'>Performance Reports</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PMHeader;