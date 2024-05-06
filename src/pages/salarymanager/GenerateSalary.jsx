import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import { useParams, Link } from 'react-router-dom';
import SubmitButton from '../../components/button2/SubmitButton';
import HrNavbar from '../../components/navbar/staffheader/HrNavbar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import { useNavigate } from 'react-router-dom';

const GenerateSalary = () => {
  const [employeeData, setEmployeeData] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [basicSalary, setBasicSalary] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [employeeID, setEmployeeID] = useState('');
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
      totalAmountValue = (basic + (overtime * 200) + bonusAmount).toFixed(2);
    } else if (attendance >= 24 && attendance < 27) {
      const adjustedSalary = basic + (overtime * 200) + bonusAmount + 3000;
      totalAmountValue = adjustedSalary.toFixed(2);
    } else {
      totalAmountValue = 'Invalid attendance range';
    }

    setTotalAmount(totalAmountValue);

    // axios.put(`http://localhost:5555/editsalary/${id}`, { totalAmount: totalAmountValue })
    //   .then(response => {
    //     console.log('Total amount updated successfully:', response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error updating total amount:', error);
    //   });
  };

//   const handleSaveSalary = () => {
//     const data = {
//       firstName,
//       lastName,
//       employeeID,
//       contactNo,
//       email,
//       basicSalary,
//       attendance,
//       overtime,
//       bonus,
//       totalAmount,
    

//     };
//     setLoading(true);
//     axios
//       .post(`http://localhost:5555/salary`, data)
//       .then(() => {
//          setLoading(false);
//          navigate('/SalaryTable');
//       })
//       .catch((error) => {
//          setLoading(false);
//          alert('AN error happened.please check console');
//          console.log(error);
//       });
//  };


const handleSaveSalary = () => {
  const data = {
    firstName,
    lastName,
    employeeID,
    contactNo,
    email,
    basicSalary,
    attendance,
    overtime: overtimeHours, // Corrected variable name
    bonus,
    totalAmount,
    // notice: '', // You need to provide a value for notice
    // cheque1: '', // You need to provide a value for cheque1
    // cheque2: '', // You need to provide a value for cheque2
    // profile: '', // You need to provide a value for profile
  };
  setLoading(true);
  axios
    .post(`http://localhost:5555/salary`, data)
    .then(() => {
       setLoading(false);
        alert('Salary generated successfully');
        navigate('/employees/CurrentEmployeeList');
    })
    .catch((error) => {
       setLoading(false);
       alert('An error happened. Please check console');
       console.log(error);
    });
};


  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/employee/${id}`)
      .then((response) => {
        const data = response.data;
        setEmployeeData(data);
        setFirstName(data.firstName); // Ensure default value is set
        setLastName(data.lastName); // Ensure default value is set
        setEmployeeID(data.employeeID); // Ensure default value is set
        setContactNo(data.contactNo); // Ensure default value is set
        setEmail(data.email); // Ensure default value is set
        setBasicSalary(data.basicSalary); // Ensure default value is set
        setAttendance(data.attendance || 0); // Ensure default value is set
        setOvertimeHours(data.overtime || 0); // Ensure default value is set
        setBonus(data.bonus || 0); // Ensure default value is set
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <HrNavbar sal={true} />
      <div className='p-4 h-screen overflow-y-auto'>
        <div className='flex justify-center items-center'>
          <h1 className='text-3xl my-8 font-Philosopher text-ternary font-semibold'>Generate Employee Salary</h1>
        </div>
        <div className="w-1/3 p-4">
          <h2 className="text-xl mb-4">Profile</h2>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className='p-4 mx-auto max-w-lg '>
            <div className="mb-4">
              <label className="block text-ternary text-sm font-bold mb-3">Full Name</label>
              <span className="border border-black border-1 p-2 block mb-2">{employeeData.firstName} {employeeData.lastName}</span>
              <br/>
              <label className="block text-ternary text-sm font-bold mb-3">Employee ID</label>
              <span className="border border-black border-1 p-1 block mb-2">{employeeData.employeeID}</span>
              <br/>
              <label className="block text-ternary text-sm font-bold mb-3">Employee Contact Number</label>
              <span className="border border-black border-1 p-1 block mb-2">{employeeData.contactNo}</span>
              <br/>
              <label className="block text-ternary text-sm font-bold mb-3">Employee Email</label>
              <span className="border border-black border-1 p-1 block mb-2">{employeeData.email}</span>
              <br/>
              <label className="block text-ternary text-sm font-bold mb-3">Basic Salary</label>
              <span className="border border-black border-1 p-1 block mb-2">{employeeData.basicSalary}</span>
              <br/>
              <label className="block text-ternary text-sm font-bold mb-3">Attendance</label>
              <input 
                type="number"
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                className="border border-black border-1 p-1 block mb-2"
              />
              <br/>
              <label className="block text-ternary text-sm font-bold mb-3">Over Time Hours</label>
              <input 
                type="number"
                value={overtimeHours}
                onChange={(e) => setOvertimeHours(e.target.value)}
                className="border border-black border-1 p-1 block mb-2"
              />
              <br/>
              <label className="block text-ternary text-sm font-bold mb-3">Bonus</label>
              <input 
                type="number"
                value={bonus}
                onChange={(e) => setBonus(e.target.value)}
                className="border border-black border-1 p-1 block mb-2"
              />
              <br/>
            </div>
            <br />
            <div className='flex justify-center'>
              <button type="button" onClick={calculateTotalAmount} className="mr-4 bg-black p-2 rounded text-white  ">Generate</button>
             
            </div> 
            <br />
            <br />
            <label className="block text-ternary text-2xl font-bold mb-3">Total Amount</label>
            <span className="border border-black border-1 p-1 block mb-2">{totalAmount}</span> 
            <br />
            <br />
            <div className='flex justify-center'>
            <SubmitButton onClick={handleSaveSalary} className="mr-2">Submit</SubmitButton>
              
            </div> 
          </div>
        )}
      </div>
      <StaffFooter />
    </div>
  );
}

export default GenerateSalary;
