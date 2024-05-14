import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import html2pdf from 'html2pdf.js';
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
  const reportRef = useRef(null);



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

  const downloadPDF = () => {
    const opt = {
      margin: 1,
      filename: 'maintenance_report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(reportRef.current).save();
  };


  return (
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bgimg' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <MaintenanceManagerHeader/>
      <div >
      <h2 className='text-4xl text-center font-philosopher text-ternary font-semibold my-8 alignment-center'>Search Repair Details, Machine Details Within Date Range</h2>
      <div className="bg-bgc flex flex-col border-2 rounded-xl w-[600px] h-auto p-4 mx-auto font-BreeSerif mt-10 " ref={reportRef}>
      <div className='flex flex-row'>
          <img src="/Logo2.png" alt="logo" className="w-[13rem] h-[3rem] lg:w-[15rem] lg:h-[4rem]" />
          <img src="/Logo1.png" alt="logo" className="w-[4rem] h-[4rem] lg:w-[6rem] lg:h-[5.5rem]  ml-auto" />
      </div>
      <h2 className='mt-10 text-center text-ternary text-2xl'>Maintenance Report</h2>
        
        <p className='text-center mt-10 text-black text-xl'>Date Range </p>
        <div className='ml-20 mt-7 mb-10'>
        <label>From :  </label>
        <input className='mr-12 bg-bgc text-black' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label>To : </label>
        <input className='bg-bgc text-black' type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>

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
              <p>{new Date(repair.createdAt).toDateString()}</p>
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
              
              
            </div>
          ))}
           <div className='m-auto mt-8 w-56 p-2 border-gray-200 rounded-md border-2 text-center'>
        <h3 className='text-xl  text-center text-ternary mb-2'>Repair Workers Summary:</h3>
        <ul className='flex flex-col'>
          {Object.keys(workerRepairsMap).map(workerId => (
            <li  key={workerId}>
              <div className='mb-4'>
                <p className='mr-1'> Worker ID : {workerId}</p>
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
      <div className="flex justify-center mb-4">
        <button onClick={downloadPDF} className="bg-black text-white font-BreeSerif py-2 px-4 rounded">
          Download PDF
        </button>
      </div>
      <div className='h-40'></div>
      </div>
      <StaffFooter/>
    </div>
  );
};

export default RepairDetailsInRange;
