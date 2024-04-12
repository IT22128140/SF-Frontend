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
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const RawmDistributions = () => {
  const [rmdistributes, setrmDistributes] = useState([]);
  const [loading, setLoading] = useState(false);
  const headers = ['Distribute ID', 'Date', 'Line Number', 'Position Number', 'Distributed', 'Shortage', 'Operations'];

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/rmDistributes')
      .then((response) => {
        setrmDistributes(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className='relative'>
      <PMHeader drm = {true} />
      <div className = 'flex justify-between items-center m-5'>
        <Link to='/rmDistributes/create'>
         <AddButton/>
        </Link>
      </div>
      {loading ? (
        <Spinner/>
      ) : (
        <table className = 'mx-auto font-BreeSerif mb-5'>
          <TableView headers={headers} />
          <tbody>
          {rmdistributes.map((rmdistribute, index) => (
            <tr key={rmdistribute._id} className='h-8'>
              <td className='border border-slate-700 rounded-md'>
                {rmdistribute.DistributeID}
              </td>
              <td className='border border-slate-700 rounded-md'>
                {rmdistribute.Date}
              </td>
              <td className='border border-slate-700 rounded-md'>
                {rmdistribute.LineNumber}
              </td>
              <td className='border border-slate-700 rounded-md'>
                {rmdistribute.PositionNumber}
              </td>
              <td className='border border-slate-700 rounded-md'>
                {rmdistribute.Distributed}
              </td>
              <td className='border border-slate-700 rounded-md'> 
                {rmdistribute.Shortage}
              </td>
              <td className='border border-slate-700 rounded-md'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={ `/rmDistributes/details/${rmdistribute._id}`}>
                    <ViewButton/>
                  </Link>
                  <Link to={`/rmDistributes/edit/${rmdistribute._id}`}>
                    <EditButton/>
                  </Link>
                  <Link to={`/rmDistributes/delete/${rmdistribute._id}`}>
                    <DeleteButton/>
                  </Link>
                  <Link to={`/rmRequests/create`}>
                    <AddButton/>
                  </Link>
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

export default RawmDistributions