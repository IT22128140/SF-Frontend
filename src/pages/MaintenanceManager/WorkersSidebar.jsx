import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from "axios";

export default function WorkersSidebar() {
  
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    setLoading(true);
    axios
        .get('http://localhost:5555/repairs/rworkers')
        .then((response) => {
            setWorkers(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
}, [])

  return (
    <div className='flex mt-4 pr-4'>
        <div className=''>
      {/* Button to toggle the visibility of the sidebar */}
      <button onClick={toggleSidebar} className=" top-0 left-0 z-10 p-2 m-2 bg-white text-ternary rounded-md hover:bg-bgc">
        {showSidebar ? 'Close' : 'Show Workers'}
      </button>

      {/* Sidebar container */}
      {showSidebar && (
        <div className="absolute top-30 left-0 z-20  w-64   bg-white p-4 overflow-y: auto">
          
          <h2 className="text-lg text-ternary font-semibold mb-10"> Repair Workers</h2>

          {loading ? (
                <Spinner />
            ) : (

                <div className='ml-1 mr-1 font-BreeSerif'>
                        {workers.map((worker, index) => (
                            <div key={worker._id} className='h-flex flex-col '>
                                
                                <div className='mb-10 ml-5  '>
                                <p className='text-center'>
                                    {worker.employeeID}
                                </p>
                                <p className=' text-center'>
                                    {worker.firstName} {worker.lastName}
                                </p>
                                <p className='text-center'>
                                    {worker.occupation}
                                </p>
                                <p className='text-center'>
                                    {worker.employeeStatus}
                                </p >
                                <p className='text-center'>
                                    {worker.contactNo}
                                </p >
                                <p className='text-center'>
                                    {worker.email}
                                </p >
                                </div>
                               
                            </div>
                        ))}
                </div>
                


                
            )}
        </div>
      )}
    </div>
    </div>
  );
}
