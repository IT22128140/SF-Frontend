import React,{ useState } from 'react'
import Spinner from '../../components/Spinner';
import axios from 'axios';
import  { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import PMHeader from '../../components/navbar/staffheader/PMHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const DeletermDistributes = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackBar } = useSnackbar();
  const { id } = useParams();

  const handleDeleteDistribution = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/rmDistributes/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackBar('Request deleted successfully', { variant: 'success' });
        navigate('/RawmDistributes');
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
      <PMHeader drm = {true} />
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col items-center bg-stone-200 rounded-xl w-[600px] p-8 mx-auto font-BreeSerif mb-5'>
        <h3 className='text-2xl'>Are You Sure You want to Delete this Distribution?</h3>

        <button className='p-4 bg-red-600 text-white m-8 w-full rounded-xl'
        onClick={handleDeleteDistribution}>Yes, Delete it</button>
      </div>
      <StaffFooter/>
    </div>
  )
}

export default DeletermDistributes