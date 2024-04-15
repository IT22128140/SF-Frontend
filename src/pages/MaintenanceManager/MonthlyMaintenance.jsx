import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const RepairDetailsInRange = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [repairs, setRepairs] = useState([]);
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [workerRepairsMap, setWorkerRepairsMap] = useState({});
  const [totalMachineCost, setTotalMachineCost] = useState(0);



  useEffect(() => {
    if (startDate && endDate) {
      handleSearch();
    }
  }, [startDate, endDate]);



  useEffect(() => {
    if (repairs.length > 0) {
      generateWorkerRepairsMap();
    }
  }, [repairs]);



  useEffect(() => {
    calculateTotalMachineCost();
  }, [machines]);


  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5555/repairs/range?startDate=${startDate}&endDate=${endDate}`);
      console.log( response.data);
      setRepairs(response.data); 

      const machineResponse = await axios.get(`http://localhost:5555/machines/range?startDate=${startDate}&endDate=${endDate}`);
      setMachines(machineResponse.data);

    } catch (error) {
      console.error('Error retrieving repair details:', error);
    }
    setLoading(false);
  };


  //repair workers - no of repairs 
  const generateWorkerRepairsMap = () => {
    const workerMap = {};
    repairs.forEach(repair => {
      repair.Workers.forEach(worker => {
        const workerId = worker.employeeID;
        const fname = worker.firstName;
        const lname = worker.lastName;
        if (workerMap[workerId]) {
          workerMap[workerId].count++;
        } else {
          workerMap[workerId] = { count: 1, worker: worker };
        }
      });
    });
    setWorkerRepairsMap(workerMap);
  };


  //total machine cost
  const calculateTotalMachineCost = () => {
    const cost = machines.reduce((acc, machine) => acc + machine.Cost, 0);
    setTotalMachineCost(cost);
  };


  return (
    <div>
      <MaintenanceManagerHeader/>
      <h2 className='font-Philosopher text-3xl text-primary text-center mt-20'>Search Repair Details, Machine Details Within Date Range</h2>
      <div className="bg-formBackground flex flex-col border-2 rounded-xl w-[600px] h-auto p-4 mx-auto font-BreeSerif mt-10">
      
      <h2 className='text-center text-ternary text-2xl'>Maintenance Report</h2>
        
        <p className='text-center mt-10 text-white text-xl'>Enter Date Range </p>
        <div className='ml-20 mt-7 mb-10'>
        <label>From :  </label>
        <input className='mr-12 bg-formBackground text-white' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label>To : </label>
        <input className='bg-formBackground text-white' type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>


      {/* <button disabled={!startDate || !endDate}>
        Search
      </button> */}


      {loading && <Spinner/>}
      <h3 className='text-xl mb-3'>Repair Details:</h3>
      {repairs.length > 0 ? (
        <div>
          
          
          {repairs.map(repair => (
            <div className='mt-8' key={repair.RepairID}>
              <div className='flex flex-row mr-10'>
              <p className='mr-2'>Repair ID : </p>
              <p>{repair.RepairID}</p>
              </div>
              <div className='flex flex-row mr-10'>
              <p className='mr-2'>Requested Date : </p>
              <p>{repair.RequestedDate}</p>
              </div>
              <div className='flex flex-row mr-10'>
              <p className='mr-2'>Repair Description : </p>
              <p>{repair.RepairDescription}</p>
              </div>
              <div className='flex flex-row mr-10'>
              <p className='mr-2'>Workers : </p>
              <div>
                            {repair.Workers && repair.Workers.map((worker, index) => (
                                <div key={index}>
                                    <span className='font-BreeSerif'>{worker.employeeID} - {worker.firstName} {worker.lastName}</span>
                                </div>
                            ))}
                        </div>
              </div>
              
              
              {/* Add other fields as needed */}
            </div>
          ))}
           <div className='m-auto mt-8 w-56 p-2 border-gray-200 rounded-md border-2 text-center'>
        <h3 className='text-xl  text-center text-ternary mb-2'>Repair Workers Summary:</h3>
        <ul className='flex flex-col'>
          {Object.keys(workerRepairsMap).map(workerId => (
            <li  key={workerId}>
              <div className='mb-4'>
                <p className='mr-1'> Worker ID : {workerId}</p>
                {/* <p className='mr-1'> Name : {fname}</p> */}
                <p className='mr-1'> No. of Repairs : {workerRepairsMap[workerId].count}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
        </div>
        
      ) : (
        <p className='mt-5 mb-20'>No repair details found within the specified date range.</p>
      )}


     

      <div>
      <h3 className='text-xl mb-3 mt-20'>Machine Details:</h3>

        {machines.length > 0 ? (
          <ul>
            {machines.map(machine => (
              <div className='mt-8' key={machine.MachineID}>
                <div className='flex flex-row mr-10'>
                  <p className='mr-2'>Machine ID : </p>
                  <p>{machine.MachineID}</p>
                </div>
                <div className='flex flex-row mr-10'>
                  <p className='mr-2'>Category : </p>
                  <p>{machine.Category}</p>
                </div>
                <div className='flex flex-row mr-10'>
                  <p className='mr-2'>Cost : </p>
                  <p>Rs.{machine.Cost}</p>
                </div>      
              </div>
            ))}
            <p className='mt-5 text-xl'>Total Machine Cost for the Period : Rs.{totalMachineCost}</p>
          </ul>
          
        ) : (
          <p className='mt-5 '>No machines purchased within the specified date range.</p>
        )}
        
      </div>
     
      </div>
      <StaffFooter/>
    </div>
  );
};

export default RepairDetailsInRange;
