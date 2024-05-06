import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import PMHeader from '../../components/navbar/staffheader/PMHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const ViewrmDistributes = () => {
  const [rmdistributes, setrmDistributes] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/rmDistributes/${id}`)
      .then((response) => {
        setrmDistributes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])

  return (
    <div className='relative'>
      <PMHeader drm = {true} />
      <center>
        <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
          Raw Material Distribution
        </h1>
      </center>
      {loading ? (
        <Spinner/>
      ) : (
        <div className='flex flex-col bg-bgc rounded-xl w-[600px] p-4 mx-auto font-BreeSerif text-ternary mb-5'>
          <h1 className='text-3xl my-4 text-center font-semibold'>View Raw Material Distributions</h1>
          <div className= 'my-4'>
            <span className='text-xl mr-4'>Distribute ID</span>
            <span>{rmdistributes.DistributeID}</span>
          </div>
          <div className= 'my-4'>
            <span className='text-xl mr-4'>Date</span>
            <span>{rmdistributes.Date}</span>
          </div>
          <div className= 'my-4'>
            <span className='text-xl mr-4'>Line Number</span>
            <span>{rmdistributes.LineNumber}</span>
          </div>
          <div className= 'my-4'>
            <span className='text-xl mr-4'>Position Number</span>
            <span>{rmdistributes.PositionNumber}</span>
          </div>
          <div className= 'my-4'>
            <span className='text-xl mr-4'>Distributed</span>
            <span>{rmdistributes.Distributed}</span>
          </div>
          <div className= 'my-4'>
            <span className='text-xl mr-4'>Shortage</span>
            <span>{rmdistributes.Shortage}</span>
          </div>
          <div className= 'my-4'>
            <span className='text-xl mr-4'>Create Time</span>
            <span>{new Date(rmdistributes.createdAt).toString()}</span>
          </div>
          <div className= 'my-4'>
            <span className='text-xl mr-4'>Last Update Time</span>
            <span>{new Date(rmdistributes.updatedAt).toString()}</span>
          </div>
        </div>
      )}
      <StaffFooter/>
    </div>
  )
}

export default ViewrmDistributes

