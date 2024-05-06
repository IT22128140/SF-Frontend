import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import RejectButton from '../../components/button2/RejectButton';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';
import MyModal from '../../components/MyModal';

const ViewrmRequests = () => {
  const [rmrequest, setrmRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal,setShowModal] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/rmRequests/${id}`)
      .then((response) => {
        setrmRequests(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])

  return (
    <div className='relative'>
      <IsNavbar RmR= {true}/>
      <center>
        <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
          Raw Material Requests
        </h1>
      </center>
      {loading ? (
        <Spinner/>
      ) : (
        <div className='flex flex-col bg-bgc rounded-xl w-[600px] p-4 mx-auto font-BreeSerif text-ternary mb-5 mt-10'>
          <h1 className='text-3xl my-4 text-center font-semibold'>View Raw Material Requests</h1>
          <div className= 'my-4'>
            <span className='text-xl mr-4'>Request ID</span>
            <span>{rmrequest.RequestID}</span>
          </div>
          <div className= 'my-4'>
            <span className='text-xl mr-4'>Fabric Type</span>
            <span>{rmrequest.FabricType_Colour_Amount}</span>
          </div>
          <div className= 'my-4'>
            <span className='text-xl mr-4'>Button Type</span>
            <span>{rmrequest.ButtonType_Colour_Amount}</span>
          </div>
          <div className= 'my-4'>
            <span className='text-xl mr-4'>Thread Type</span>
            <span>{rmrequest.ThreadType_Colour_Amount}</span>
          </div>
          <div className= 'my-4'>
            <span className='text-xl mr-4'>Other Materials</span>
            <span>{rmrequest.Other_Materials}</span>
          </div>
          <div className= 'my-4'>
            <span className='text-xl mr-4'>Create Time</span>
            <span>{new Date(rmrequest.createdAt).toString()}</span>
          </div>
          <div className= 'my-4'>
            <span className='text-xl mr-4'>Last Update Time</span>
            <span>{new Date(rmrequest.updatedAt).toString()}</span>
          </div>
          <div className='flex justify-center gap-x-20'>

            <button onClick={() => setShowModal(true)} className='flex items-center justify-between h-fit w-fit p-1.5 bg-orange-600 text-md text-white rounded-lg shadow-md font-BreeSerif'>Accept</button>
            {showModal && <MyModal onClose={() => setShowModal(false)}/>}

            <Link to={`/rmRequests/delete/${rmrequest._id}`}>
              <RejectButton/>
            </Link>
          </div>
        </div>
      )}
      <StaffFooter/>
    </div>
  )
}

export default ViewrmRequests

