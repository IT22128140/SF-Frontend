import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Deleteshortage =()=>{
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const handleDeleteMPshortage = () => {
      setLoading(true);
      axios
      .delete(`http://localhost:5555/mpshortages/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/Shortages/view');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      });
    };
  
  
    return (
      <div className='relatiev'>
     
        <h1 className='my-4 text-3xl font-Philosopher'>Delete Machine Part Shortage</h1>
        {loading ? <Spinner/> : ''}
        <div className='flex flex-col items-center border-2 border-black-400 rounded-xl w-[600px] p-8 mx-auto'>
          <h3 className='text-2xl font-BreeSerif'>Are Yoy Sure You Want to Delete This Machine</h3>
  
          <button className='w-full p-4 m-8 text-white bg-red-600 font-BreeSerif' onClick={handleDeleteMPshortage}> 
            Yes, Delete it
          </button>
        </div>
  
      </div>
    )
  }

export default Deleteshortage;


