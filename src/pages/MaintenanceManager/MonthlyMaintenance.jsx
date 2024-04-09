import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';

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
      console.log('Response data:', response.data);
      setRepairs(response.data); // Assuming response.data contains an array of repair objects

      const machineResponse = await axios.get(`http://localhost:5555/machines/range?startDate=${startDate}&endDate=${endDate}`);
      setMachines(machineResponse.data);

    } catch (error) {
      console.error('Error retrieving repair details:', error);
    }
    setLoading(false);
  };

  const generateWorkerRepairsMap = () => {
    const workerMap = {};
    repairs.forEach(repair => {
      repair.Workers.forEach(worker => {
        const workerId = worker.employeeID;
        if (workerMap[workerId]) {
          workerMap[workerId].count++;
        } else {
          workerMap[workerId] = { count: 1, worker: worker };
        }
      });
    });
    setWorkerRepairsMap(workerMap);
  };

  const calculateTotalMachineCost = () => {
    const cost = machines.reduce((acc, machine) => acc + machine.Cost, 0);
    setTotalMachineCost(cost);
  };

  return (
    <div>
      <h2>Search Repair Details Within Date Range</h2>
      <div>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div>
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <button disabled={!startDate || !endDate}>
        Search
      </button>
      {loading && <Spinner/>}
      {repairs.length > 0 ? (
        <div>
          <h3>Repair Details:</h3>
          {repairs.map(repair => (
            <div key={repair.RepairID}>
              <span>Repair ID: {repair.RepairID}</span>
              <span>Repair Description: {repair.RepairDescription}</span>
              <span>Requested Date: {repair.RequestedDate}</span>
              <div className='my-4'>
                        <span className='text-xl mr-4 text-ternary font-BreeSerif'>Workers</span>
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
        </div>
      ) : (
        <p>No repair details found within the specified date range.</p>
      )}


      <div>
        <h3>Machine Details:</h3>

        {machines.length > 0 ? (
          <ul>
            {machines.map(machine => (
              <li key={machine.MachineID}>
                Machine ID: {machine.MachineID}, Model: {machine.Model}, Cost: {machine.Cost}
              </li>
            ))}
          </ul>
        ) : (
          <p>No machines purchased within the specified date range.</p>
        )}
        <p>Total Machine Cost: {totalMachineCost}</p>
      </div>
      <div>
        <h3>Worker Repairs Summary:</h3>
        <ul>
          {Object.keys(workerRepairsMap).map(workerId => (
            <li key={workerId}>
              Worker ID: {workerId}, No. of Repairs: {workerRepairsMap[workerId].count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RepairDetailsInRange;
