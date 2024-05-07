import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SubmitButton from '../../components/button2/SubmitButton';
import HrNavbar from '../../components/navbar/staffheader/HrNavbar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import { set } from 'react-hook-form';

const EditSalaryBalance = () => {
  const [editSalaryBalance, setEditSalaryBalance] = useState({});
  const [attendance, setAttendance] = useState(0);
  const [overtime, setOverTime] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [date, setDate] = useState('');
    const [notice, setNotice] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const calculateTotalAmount = () => {
    const basic = parseFloat(editSalaryBalance.basicSalary);
    const overtimeValue = parseFloat(overtime);
    const bonusAmount = parseFloat(bonus);

    let totalAmountValue;

    if (attendance >= 27 && attendance <= 30) {
      totalAmountValue = (basic + (overtimeValue * 200) + bonusAmount).toFixed(2);
    } else if (attendance >= 24 && attendance < 27) {
      const adjustedSalary = basic + (overtimeValue * 200) + bonusAmount + 3000;
      totalAmountValue = adjustedSalary.toFixed(2);
    } else {
      totalAmountValue = 'Invalid attendance range';
    }

    setTotalAmount(totalAmountValue);

    // Update the total amount in the database
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
    axios.get(`http://localhost:5555/salary/${id}`)
      .then((response) => {
        setEditSalaryBalance(response.data);
        setAttendance(response.data.attendance);
        setOverTime(response.data.overtime);
        setBonus(response.data.bonus);
        setTotalAmount(response.data.totalAmount);
        setDate(response.data.date);
        setNotice(response.data.notice);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])

  const handleSalary = () => {
    const data = {
      attendance: attendance,
      overtime: overtime,
      bonus: bonus,
      date: date,
        notice: notice,
      totalAmount: totalAmount
    };
    setLoading(true);

    axios
      .put(`http://localhost:5555/salary/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate(`/SalaryTable`);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      })
  };

  return (
    <div  className='w-full h-full bg-scroll bg-repeat bg-bgimg'>
      <HrNavbar sal={true} />
      <div className='p-4 h-screen overflow-y-auto'>
        <div className='flex justify-center items-center'>
          <h1 className='text-3xl my-8 font-Philosopher text-ternary font-semibold'>Edit Salary Details</h1>
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
          <div className='bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif'>
          <div className='p-4 mx-auto max-w-lg '>
            <div className="mb-4">
              <label className="block text-ternary text-sm font-bold mb-3">Full Name</label>
              <span className="border border-black border-1 p-2 block mb-2">{editSalaryBalance.firstName} {editSalaryBalance.lastName}</span>
              <br />
              <label className="block text-ternary text-sm font-bold mb-3">Employee ID</label>
              <span className="border border-black border-1 p-1 block mb-2">{editSalaryBalance.employeeID}</span>
              <br />
              <label className="block text-ternary text-sm font-bold mb-3">Basic Salary</label>
              <span className="border border-black border-1 p-1 block mb-2">{editSalaryBalance.basicSalary}</span> <br />
              <label className="block text-ternary text-sm font-bold mb-3">Attendance</label>
<input
  type="number"
  value={attendance}
  onChange={(e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value <= 30) {
      setAttendance(value);
    }
  }}
  className="border border-black border-1 p-1 block mb-2"
/>
{attendance > 30 && (
  <p className="text-red-500">Attendance cannot exceed 30</p>
)}
<br />
<label className="block text-ternary text-sm font-bold mb-3">Over Time Hours</label>
<input
  type="number"
  value={overtime}
  onChange={(e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value <= 250) {
      setOverTime(value);
    }
  }}
  className="border border-black border-1 p-1 block mb-2"
/>
{overtime > 250 && (
  <p className="text-red-500">Overtime hours cannot exceed 250</p>
)}
<br />
<label className="block text-ternary text-sm font-bold mb-3">Bonus</label>
<input
  type="number"
  value={bonus}
  onChange={(e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value <= 200000) {
      setBonus(value);
    }
  }}
  className="border border-black border-1 p-1 block mb-2"
/>
{bonus > 200000 && (
  <p className="text-red-500">Bonus cannot exceed 200,000</p>
)}
<br />
              <div className='flex justify-center'>
                <button type="button" onClick={calculateTotalAmount} className="mr-4 bg-black p-2 rounded text-white">Generate</button>
              </div>
              <label className="block text-ternary text-sm font-bold mb-3">Total Amount</label>
              <span className="border border-black border-1 p-1 block mb-2">{totalAmount}</span>
              <br />
              <label className="block text-ternary text-sm font-bold mb-3">DAte</label>
              <input
                type="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border border-black border-1 p-1 block mb-2"
              /> <br />
              <label className="block text-ternary text-sm font-bold mb-3">Notice</label>
              <textarea // Change to textarea for multiline input
              value={notice}
             onChange={(e) => setNotice(e.target.value)}
             className="border border-black border-1 p-1 block mb-2"
              />
                {notice.split(/\s+/).filter(Boolean).length > 50 && (
                 <p className="text-red-500">Notice text cannot exceed 50 words</p>
                  )}
                <br />
               <br /> <br /> <br />
            </div>
            <br />
            <div className='flex justify-center'>
              <SubmitButton onClick={handleSalary}>Submit</SubmitButton>
            </div>
          </div>
        </div>
        )}
      </div>
      <StaffFooter />
    </div>
  );
};

export default EditSalaryBalance;
