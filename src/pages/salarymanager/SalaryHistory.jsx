import React , {useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { set } from 'react-hook-form';
import TableView from '../../components/table/TableView';
import Spinner from '../../components/Spinner';




const SalaryHistory = () => {
  const [salaryHistory, setSalaryHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const headers = ['EmployeeName','time', 'fullname', 'basicSalary','attendance',' overtime','bonus','totalAmount','notice','cheques','profile' ];

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/salary')
      .then((response) => {
        setSalaryHistory(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Salary List</h1>
      </div>
      {loading ? (
        <Spinner />
      ) :(
        <table className='min-w-full'>
          <TableView headers={headers} />
          <tbody>
            {salaryHistory.map((salary,index) => {
              <tr key={salary._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>{salary.name}</td>
                <td className='border border-slate-700 rounded-md text-center'>{salary.time}</td>
                <td className='border border-slate-700 rounded-md text-center'>{salary.fullName}</td>
                <td className='border border-slate-700 rounded-md text-center'>{salary.basicSalary}</td>
                <td className='border border-slate-700 rounded-md text-center'>{salary.attendance}</td>
                <td className='border border-slate-700 rounded-md text-center'>{salary.overtime}</td>
                <td className='border border-slate-700 rounded-md text-center'>{salary.bonus}</td>
                <td className='border border-slate-700 rounded-md text-center'>{salary.totalAmount}</td>
                <td className='border border-slate-700 rounded-md text-center'>{salary.notice}</td>
                <td className='border border-slate-700 rounded-md text-center'>{salary.cheques}</td>
                <td className='border border-slate-700 rounded-md text-center'>{salary.profile}</td>
               
               </tr>
               })}

          </tbody>
        </table>
          

      )}  
 
      
    </div>
  );
};

export default SalaryHistory