import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import TableView from '../../components/table/TableView';
import { Link } from 'react-router-dom';
import ViewButton from '../../components/button2/ViewButton';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';


const RequestforInventory = () => {
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
    <div className='relative'>
      <IsNavbar RmR= {true}/>
      <div className='w-full h-full bg-fixed bg-no-repeat bg-bgimg' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <center>
        <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
          Raw Material Requests
        </h1>
      </center>
      {loading ? (
        <Spinner/>
      ) : (
        <table className = 'ml-1 mr-1 font-BreeSerif mb-5 mt-5 bg-white'>
          <TableView headers={headers} />
          <tbody>
          {rmrequests.map((rmrequest, index) => (
            <tr key={rmrequest._id} className='h-8'>
              <td className='border rounded-md border-slate-700'>
                {rmrequest.RequestID}
              </td>
              <td className='border rounded-md border-slate-700'>
                {rmrequest.Date}
              </td>
              <td className='border rounded-md border-slate-700'>
                {rmrequest.FabricType_Colour_Amount}
              </td>
              <td className='border rounded-md border-slate-700'>
                {rmrequest.ButtonType_Colour_Amount}
              </td>
              <td className='border rounded-md border-slate-700'>
                {rmrequest.ThreadType_Colour_Amount}
              </td>
              <td className='border rounded-md border-slate-700'> 
                {rmrequest.Other_Materials}
              </td>
              <td className='border rounded-md border-slate-700'>
                {rmrequest.Status}
              </td>
              <td className='border rounded-md border-slate-700'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={ `/rmRequests/details/${rmrequest._id}`}>
                    <ViewButton/>
                  </Link>
                </div>
              </td>
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

export default RequestforInventory