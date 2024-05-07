import React,{ useState } from 'react'
import Spinner from '../../components/Spinner';
import axios from 'axios';
import  { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import PMHeader from '../../components/navbar/staffheader/PMHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import DeleteButton from '../../components/button2/DeleteButton';

const DeletermRequests = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackBar } = useSnackbar();
  const { id } = useParams();

  const handleDeleteRequest = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/rmRequests/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/RawmRequests');
        enqueueSnackBar('Request deleted successfully', { variant: 'success' });
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Check console');
        enqueueSnackBar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='relative'>
      <PMHeader rmr = {true} />
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col items-center bg-stone-200 rounded-xl w-[600px] p-8 mx-auto font-BreeSerif mb-5'>
        <h3 className='text-2xl'>Are You Sure You want to Delete this Request?</h3>

        {/* <button className='p-4 bg-red-600 text-white m-8 w-full rounded-xl'
        onClick={handleDeleteRequest}>Yes, Delete it</button> */}
        <center className="mt-3" onClick={handleDeleteRequest}><DeleteButton/></center>
      </div>
      <div className="h-40 mt-10 ml-5"></div>
      <StaffFooter/>
    </div>
  )
}

export default DeletermRequests