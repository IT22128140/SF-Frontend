import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import TableView from '../../components/table/TableView';
import { Link } from 'react-router-dom';

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
    <div className='p-4'>
      <div className = 'flex justify-between items-center'>
        <Link to='/rmDistributes/create'>
         <button className='bg-orange-400 hover:bg-orange-600 text-white px-4 py-1 rounded-lg m-5'> Add new Distributions </button>
        </Link>
      </div>
      {loading ? (
        <Spinner/>
      ) : (
        <table className = 'min-w-full font-BreeSerif'>
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
                    <button className='bg-black hover:bg-black text-white px-4 py-1 rounded-lg'>View</button>
                  </Link>
                  <Link to={`/rmDistributes/edit/${rmdistribute._id}`}>
                    <button className='bg-red-800 hover:bg-red-900 text-white px-4 py-1 rounded-lg'>Edit</button>
                  </Link>
                  <Link to={`/rmRequests/create`}>
                    <button className='bg-black hover:bg-black text-white px-4 py-1 rounded-lg'>Request</button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody> 
      </table>
      )}
    </div>
  )
}

export default RawmDistributions