import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LWMenuBar = () => {
    const [lineworkers, setlineworkers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        setLoading(true);
        axios
          .get('http://localhost:5555/empPerformances/lineworkers')
          .then((response) => {
            setlineworkers(response.data.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, []);

    return (
        <div>
        <button 
          onClick={toggleSidebar}
          className="z-10 bg-formbg text-ternary font-bold py-2 px-4 rounded"
        >
          {isSidebarOpen ? 'Hide LineWorkers' : 'Show LineWorkers'}
        </button>
        {isSidebarOpen && (
          <div className="absolute z-9 mt-10 h-100px w-100px p-2 bg-formbg font-BreeSerif overflow-y-auto">
          <div className="flex flex-col justify-between p-6">
          <div>
            <h1 className="text-ternary text-xl font-semibold">Line Workers Details</h1>
            <div className="mt-6">
              {lineworkers.map(lineworker => (
                <div key= {lineworker._id} className="text-ternary mb-4">
                  <div>EmployeeID : {lineworker.employeeID}</div>
                  <div>Full Name : {lineworker.firstName} {lineworker.lastName}</div>
                  <div>Email : {lineworker.email}</div>
                  <div>Occupation : {lineworker.occupation}</div>
                  <div>Status : {lineworker.employeeStatus}</div>
                </div>
              ))}
            </div>
          </div>
          </div>
          </div>
        )}
      </div>
  )
}

export default LWMenuBar

