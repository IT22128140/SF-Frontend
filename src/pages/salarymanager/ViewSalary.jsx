import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import { useParams } from 'react-router';
import BackButton from '../../components/button/BackButton';
import DeleteButton from '../../components/button2/DeleteButton';
import { Link } from 'react-router-dom';
import RejectButton from '../../components/button2/RejectButton';

const ViewSalary = () => {
  const [viewSalary, setViewSalary] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/salary/${id}`)
      .then((response) => {
        
        setViewSalary(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
 
  return (
    <div className='p-4 h-screen overflow-y-auto'>
     
        <div className='flex justify-center items-center'>
          <h1 className='text-3xl my-8'>View Salary Details</h1>
        </div>
        <br />
        <div className=" text-left-10 m-2 font-semibold text-2xl">Profile</div>
        <br />
        <br />
        {loading ? (
          <Spinner />
        ) : (
          
          <div className='p-4 mx-auto max-w-lg '>
          <div className="mb-4">
          <label className="block text-ternary text-sm font-bold mb-3">Full Name</label>
            <span className="border border-black border-1 p-2 block mb-2">{viewSalary.fullName}</span>
            <br/>
            <label className="block text-ternary text-sm font-bold mb-3">Employee ID</label>
            <span className="border border-black border-1 p-1 block mb-2">{viewSalary._id}</span>
            <br/>
            <label className="block text-ternary text-sm font-bold mb-3">Basic Salary</label>
            <span className="border border-black border-1 p-1 block mb-2">{viewSalary.basicSalary}</span>
            <br/>
            <label className="block text-ternary text-sm font-bold mb-3">Attendance</label>
            <span className="border border-black border-1 p-1 block mb-2">{viewSalary.attendance}</span>
            <br/>
            <label className="block text-ternary text-sm font-bold mb-3">Over Time Hours</label>
            <span className="border border-black border-1 p-1 block mb-2">{viewSalary.overtime}</span>
            <br/>
            <label className="block text-ternary text-sm font-bold mb-3">Bonus</label>
            <span className="border border-black border-1 p-1 block mb-2">{viewSalary.bonus}</span>
            <br/>
            <label className="block text-ternary text-sm font-bold mb-3">Total Amount</label>
            <span className="border border-black border-1 p-1 block mb-2">{viewSalary.totalAmount}</span>
            <br/>
            <label className="block text-ternary text-sm font-bold mb-3">Notice</label>
            <span className="border border-black border-1 p-1 block mb-2">{viewSalary.notice}</span>
          
          </div>
          <br />
          <br />
          <div className='flex justify-between'>
            <Link to={`/SalaryHistory`}>
              <RejectButton>Back</RejectButton>
            </Link>
            <Link to={`/DeleteSalary/${viewSalary._id}`}>
              <DeleteButton>Delete</DeleteButton>
            </Link>
          </div>


         



          </div>
          

              
         
         
        )}
        
      
    </div>
    
  );
};

export default ViewSalary;
