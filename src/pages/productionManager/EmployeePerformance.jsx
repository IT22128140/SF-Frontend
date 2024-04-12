import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import TableView from '../../components/table/TableView';
import { Link } from 'react-router-dom';
import AddButton from '../../components/button2/AddButton';
import DeleteButton from '../../components/button2/DeleteButton';
import EditButton from '../../components/button2/EditButton';
import ViewButton from '../../components/button2/ViewButton';
import PMHeader from '../../components/navbar/staffheader/PMHeader';
import SearchBar from '../../components/SearchBar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import LWMenuBar from './LWMenuBar';

const EmployeePerformance = () => {
  const [empPerformance, setempPerformance] = useState([]);
  const [loading, setLoading] = useState(false);
  const headers = ['Employee ID', 'Line Number', 'Position Number', 'Standard Minute Value(SMV)', 'Working Hours', 'Other Notes', 'Operations'];

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/empPerformances')
      .then((response) => {
        setempPerformance(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className='relative'>
      <PMHeader emp = {true} />
      <SearchBar
        placeholder = 'Enter Employee ID' 
        onSearch = ''
      />
      <LWMenuBar/>
      <div className = 'flex justify-between items-center m-5'>
        <Link to='/empPerformances/create'>
         <AddButton/>
        </Link>
      </div>
      {loading ? (
        <Spinner/>
      ) : (
        <table className = 'mx-auto font-BreeSerif mb-5'>
          <TableView headers={headers} />
          <tbody>
          {empPerformance.map((empPerformance, index) => (
            <tr key={empPerformance._id} className='h-8'>
              <td className='border border-slate-700 rounded-md'>
                {empPerformance.EmployeeID}
              </td>
              <td className='border border-slate-700 rounded-md'>
                {empPerformance.LineNumber}
              </td>
              <td className='border border-slate-700 rounded-md'>
                {empPerformance.PositionNumber}
              </td>
              <td className='border border-slate-700 rounded-md'>
                {empPerformance.StandardMinuteValue}
              </td>
              <td className='border border-slate-700 rounded-md'>
                {empPerformance.WorkingHours}
              </td>
              <td className='border border-slate-700 rounded-md'> 
                {empPerformance.OtherNotes}
              </td>
              <td className='border border-slate-700 rounded-md'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={ `/empPerformances/details/${empPerformance._id}`}>
                    <ViewButton/>
                  </Link>
                  {/* <Link to={`/empPerformances/edit/${rmrequest._id}`}>
                    <EditButton/>
                  </Link>
                  <Link to={`/empPerformances/delete/${rmrequest._id}`}>
                    <DeleteButton/>
                  </Link> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody> 
      </table>
      )}
      <StaffFooter/>
    </div>
  )
}

export default EmployeePerformance