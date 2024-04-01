import React,{ useState } from 'react'
import Spinner from '../../components/Spinner';
import axios from 'axios';
import  { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeletermRequests = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackBar } = useSnackbar();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/rmRequests/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackBar('Request deleted successfully', { variant: 'success' });
        navigate('/RawmRequests');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Check console');
        enqueueSnackBar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col items-center bg-stone-200 rounded-xl w-[600px] p-8 mx-auto font-BreeSerif'>
        <h3 className='text-2xl'>Are You Sure You want to Delete this Request?</h3>

        <button className='p-4 bg-red-600 text-white m-8 w-full rounded-xl'
        onClick={handleDeleteBook}>Yes, Delete it</button>
      </div>
    </div>
  )
}

export default DeletermRequests