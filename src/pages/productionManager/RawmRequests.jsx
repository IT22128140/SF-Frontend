import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import TableView from '../../components/table/TableView';
import { Link } from 'react-router-dom';

const RawmRequests = () => {
  const [rmrequests, setrmRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const headers = ['RequestID', 'Date', 'Fabric Type', 'Button Type', 'Thread Type', 'Other Materials', 'Status', 'Operations'];

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/rmRequests')
      .then((response) => {
        setrmRequests(response.data.data);
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
        <Link to='/rmRequests/create'>
         <button className='bg-orange-400 hover:bg-orange-600 text-white px-4 py-1 rounded-lg m-5'> Add new Requests </button>
        </Link>
      </div>
      {loading ? (
        <Spinner/>
      ) : (
        <table className = 'min-w-full font-BreeSerif'>
          <TableView headers={headers} />
          <tbody>
          {rmrequests.map((rmrequest, index) => (
            <tr key={rmrequest._id} className='h-8'>
              <td className='border border-slate-700 rounded-md'>
                {rmrequest.RequestID}
              </td>
              <td className='border border-slate-700 rounded-md'>
                {rmrequest.Date}
              </td>
              <td className='border border-slate-700 rounded-md'>
                {rmrequest.FabricType_Colour_Amount}
              </td>
              <td className='border border-slate-700 rounded-md'>
                {rmrequest.ButtonType_Colour_Amount}
              </td>
              <td className='border border-slate-700 rounded-md'>
                {rmrequest.ThreadType_Colour_Amount}
              </td>
              <td className='border border-slate-700 rounded-md'> 
                {rmrequest.Other_Materials}
              </td>
              <td className='border border-slate-700 rounded-md'>
                {rmrequest.Status}
              </td>
              <td className='border border-slate-700 rounded-md'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={ `/rmRequests/details/${rmrequest._id}`}>
                    <button className='bg-black hover:bg-black text-white px-4 py-1 rounded-lg'>View</button>
                  </Link>
                  <Link to={`/rmRequests/edit/${rmrequest._id}`}>
                    <button className='bg-red-800 hover:bg-red-900 text-white px-4 py-1 rounded-lg'>Edit</button>
                  </Link>
                  <Link to={`/rmRequests/delete/${rmrequest._id}`}>
                    <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg'>Delete</button>
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

export default RawmRequests