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

const PendingrmRequests = () => {
  const [rmrequests, setrmRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const headers = ['RequestID', 'Date', 'Fabric Type', 'Button Type', 'Thread Type', 'Other Materials', 'Status'];

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/rmRequests/pending')
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
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bgimg' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <PMHeader rmr = {true} />
      <div>
      {/* <div className = 'flex justify-between items-center m-5'>
        <Link to='/rmRequests/create'>
         <AddButton/>
        </Link>
      </div> */}
      <div className = 'flex justify-between items-center m-5 font-BreeSerif'>
        <Link to = '/rmRequests/completed'>
          <button className = 'p-2 bg-RawmRequest m-8 text-ternary rounded-xl'>Completed Requests</button>
        </Link>
        <Link to = '/RawmRequests'>
          <button className = 'p-2 bg-RawmRequest m-8 text-ternary rounded-xl'>All Requests</button>
        </Link>
        <Link to = '/rmRequests/pending'>
          <button className = 'p-2 bg-RawmRequest m-8  text-ternary rounded-xl'>Pending Requests</button>
        </Link>
      </div>
      <center>
        <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
          Pending Raw Material Requests
        </h1>
      </center>
      {loading ? (
        <Spinner/>
      ) : (
        <table className = 'ml-1 mr-1 font-BreeSerif mb-5 bg-white'>
          <TableView headers={headers} />
          <tbody>
          {rmrequests.map((rmrequest, index) => (
            <tr key={rmrequest._id} className='h-8'>
              <td className='border border-slate-700 rounded-md'>
                {rmrequest.RequestID}
              </td>
              <td className='border border-slate-700 rounded-md'>
              {new Date(rmrequest.createdAt).toDateString()}
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
              {/* <td className='border border-slate-700 rounded-md'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={ `/rmRequests/details/${rmrequest._id}`}>
                    <ViewButton/>
                  </Link>
                  <Link to={`/rmRequests/edit/${rmrequest._id}`}>
                    <EditButton/>
                  </Link>
                  <Link to={`/rmRequests/delete/${rmrequest._id}`}>
                    <DeleteButton/>
                  </Link>
                </div>
              </td> */}
            </tr>
          ))}
        </tbody> 
      </table>
      )}
      <div className="h-40 mt-10 ml-5"></div>
      </div>
      <StaffFooter/>
    </div>
  )
}

export default PendingrmRequests