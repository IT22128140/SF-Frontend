import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableView from '../../components/table/TableView';
import Spinner from '../../components/Spinner';
import SearchBar from '../../components/SearchBar';
import ViewButton from '../../components/button2/ViewButton';
import HrNavbar from '../../components/navbar/staffheader/HrNavbar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const SalaryHistory = () => {
  const [salaryHistory, setSalaryHistory] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const headers = ['EmployeeID', 'Employee Name','Contact Number','Email','Basic Salary','Attendance','Over Time','Bonus','Total Amount','Operation'];
  const headers2 = ['EmployeeID', 'Employee Name','Total Amount', 'Time'];

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/salary')
      .then((response) => {
        console.log(response.data);
        setSalaryHistory(response.data);
        setOriginalData(response.data); // Save original data
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (searchName) => {
    if (searchName === '') {
      // If search input is empty, reset to original data
      setSalaryHistory(originalData);
    } else {
      // Filter data based on search input
      const filteredData = originalData.filter((salary) => {
        return (
          salary._id.toString().includes(searchName.toString()) ||
          salary.name.toLowerCase().includes(searchName.toLowerCase())
        );
      });
      setSalaryHistory(filteredData);
    }
  };

  const handleGenerateReport = () => {
    // Filter data based on the specified time range
    const filteredData = originalData.filter((salary) => {
      const salaryDate = new Date(salary.time);
      return salaryDate >= new Date(startDate) && salaryDate <= new Date(endDate);
    });

    // Create PDF
    const doc = new jsPDF();
    doc.text('Salary Report', 10, 10);
    doc.autoTable({
      head: [headers2],
      body: filteredData.map((salary) => [salary._id, salary.name,salary.totalAmount, salary.time]),
    });
    doc.save('salary_report.pdf');
  };

  return (
    <div>
      <HrNavbar sal={true} />
      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl my-8 font-Philosopher text-ternary font-semibold'>Salary List</h1>
        </div>

        <div className='flex justify-between items-center mb-4'>
          <SearchBar placeholder={'Enter Employee Name OR Employee ID'} onSearch={handleSearch} />
          <div>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <span className='mx-2'>to</span>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md ml-2' onClick={handleGenerateReport}>
              Generate Report
            </button>
          </div>
        </div>

        <br />
        <br />
        <table className='min-w-full'>
          <TableView headers={headers} />
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3" className="text-center">
                  <Spinner />
                </td>
              </tr>
            ) : (
              salaryHistory.map((salary, index) => (
                <tr key={salary._id} className='h-8'>
                  <td className='border border-slate-700 rounded-md text-center'>{salary.employeeID}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{salary.firstName} {salary.lastName}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{salary.contactNo}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{salary.email}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{salary.basicSalary}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{salary.attendance}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{salary.overtime}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{salary.bonus}</td>
                  <td className='border border-slate-700 rounded-md text-center'>{salary.totalAmount}</td>
                  <td className='border border-slate-700 rounded-md text-center'><div className='flex justify-center gap-x-4'>
                  <Link to={`/ViewSalary/${salary._id}`}>
                    <ViewButton>View</ViewButton></Link></div></td>
                  <td className='border border-slate-700 rounded-md text-center'>{salary.time}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />

      <StaffFooter />
    </div>
  );
};

export default SalaryHistory;
