import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import RejectButton from '../../components/button2/RejectButton';
import EditButton from '../../components/button2/EditButton';
import SubmitButton from '../../components/button2/SubmitButton';
import AddButton from '../../components/button2/AddButton';
import { Input } from 'postcss';

const  GenerateSalary = () => {
  const [generateSalary, setGenerateSalary] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [basicSalary, setBasicSalary] = useState(0);
  const [attendance, setAttendance] = useState(0);
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotalAmount = () => {
    const basic = parseFloat(basicSalary);
    const overtime = parseFloat(overtimeHours);
    const bonusAmount = parseFloat(bonus);

    let totalAmountValue;

    if (attendance >= 27 && attendance <= 30) {
        // No change in salary
        totalAmountValue = (basicSalary + (overtimeHours * 200) + bonus).toFixed(2);
    } else if (attendance >= 24 && attendance < 27) {
        // Increase basic salary by 3000
        const adjustedSalary = basic + (overtime * 200) + bonusAmount;
        totalAmountValue = adjustedSalary.toFixed(2);
    } else {
        // Invalid attendance range
        totalAmountValue = 'Invalid attendance range';
    }

    setTotalAmount(totalAmountValue);

    // Send request to update total amount in the database
    axios.put(`http://localhost:5555/editsalary/${id}`, { totalAmount: totalAmountValue })
        .then(response => {
            console.log('Total amount updated successfully:', response.data);
        })
        .catch(error => {
            console.error('Error updating total amount:', error);
        });
};

  useEffect(() => {
    setLoading(true);
    axios
    
      .get(`http://localhost:5555/salary/${id}`)
      .then((response) => {
        setGenerateSalary(response.data);
        setBasicSalary(response.data.basicSalary);
        setAttendance(response.data.attendance);
        setOvertimeHours(response.data.overtime);
        setBonus(response.data.bonus);
        // setTotalAmount(response.data.totalAmount)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  } , []);
  return (
    <div className='p-4 h-screen overflow-y-auto'>
     
        <div className='flex justify-center items-center'>
          <h1 className='text-3xl my-8'>Generate Employee Salary</h1>
        </div>
        <br />
        <div className="w-1/3 p-4">
          <h2 className="text-xl mb-4">Profile</h2>
        </div>
        <br />
        <br />
        {loading ? (
          <Spinner />
        ) : (
          <div className='p-4 mx-auto max-w-lg '>
          <div className="mb-4">
          <label className="block text-ternary text-sm font-bold mb-3">Full Name</label>
            <span className="border border-black border-1 p-2 block mb-2">{generateSalary.fullName}</span>
            <br/>
            <label className="block text-ternary text-sm font-bold mb-3">Employee ID</label>
            <span className="border border-black border-1 p-1 block mb-2">{generateSalary._id}</span>
            <br/>
            <label className="block text-ternary text-sm font-bold mb-3">Basic Salary</label>
            <span className="border border-black border-1 p-1 block mb-2">{generateSalary.basicSalary}</span>
            <br/>
            <label className="block text-ternary text-sm font-bold mb-3">Attendance</label>
            <span className="border border-black border-1 p-1 block mb-2">{generateSalary.attendance}</span>
            <br/>
            <label className="block text-ternary text-sm font-bold mb-3">Over Time Hours</label>
            <span className="border border-black border-1 p-1 block mb-2">{generateSalary.overtime}</span>
            <br/>
             <label className="block text-ternary text-sm font-bold mb-3">Bonus</label>
            <span className="border border-black border-1 p-1 block mb-2"  >{generateSalary.bonus}</span>
            <br/> 
            <br/>
           
          </div>
          <br />
          <div className='flex justify-between'>
          <button type="button" onClick={calculateTotalAmount} 
                  className=" mr-4 bg-black p-2 rounded text-white">Generate</button>
            <Link to={`/EditSalaryBalance/${generateSalary._id}`}>
              <EditButton>Edit</EditButton>
            </Link>
          </div> 
          <br />
          <br />
          <label className="block text-ternary text-2xl font-bold mb-3">Total Amount</label>
         <span className="border border-black border-1 p-1 block mb-2">{totalAmount}</span> 
          <br />
          <br />
         <div className='flex justify-between'>
         <Link to={`/ChequeSubmit`}>
              <SubmitButton>Submit</SubmitButton>
            </Link>
            <Link to={`/ChequeSubmit/${generateSalary._id}`}>
              <AddButton>Add Cheque</AddButton>
            </Link>
          
           
          </div> 
       </div>
         )}
        </div>
  );}

export default GenerateSalary