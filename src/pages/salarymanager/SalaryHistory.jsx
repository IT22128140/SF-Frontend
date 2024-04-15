import React , {useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { set } from 'react-hook-form';
import TableView from '../../components/table/TableView';
import Spinner from '../../components/Spinner';
import SearchBar from '../../components/SearchBar';
import ViewButton from '../../components/button2/ViewButton';




const SalaryHistory = () => {
  const [salaryHistory, setSalaryHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const headers = ['EmployeeID','Employee Name','Operation','Time'];

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/salary')
      .then((response) => {
        console.log(response.data);
        setSalaryHistory(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  const handleView = () =>{
  
  };

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Salary List</h1>
      </div>
      <br>
      </br>
      <br>
      </br>
      <SearchBar placeholder={"Enter Employee Name OR Employee ID"} />
      {loading ? (
        <Spinner />
      ) :(
        <table className='min-w-full'>
          <TableView headers={headers} />
          <tbody>
            {salaryHistory.map((salary,index) => (
              <tr key={salary._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>{salary._id}</td>
                <td className='border border-slate-700 rounded-md text-center'>{salary.name}</td>
                <td className='border border-slate-700 rounded-md text-center'><div className='flex justify-center gap-x-4'>
                  <Link to={`/ViewSalary/${salary._id}`}>
                    <ViewButton>View</ViewButton></Link></div></td>
                <td className='border border-slate-700 rounded-md text-center'>{salary.time}</td>
                
              </tr>
               ))}

          </tbody>
        </table>
          

      )}  
 
      
    </div>
  );
};

export default SalaryHistory