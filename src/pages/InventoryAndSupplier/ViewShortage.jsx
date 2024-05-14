import React,{useEffect,useState} from 'react';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import RejectButton from '../../components/button2/RejectButton';

const Viewshortage = () =>{
    const [mpshortage, setMPshortage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
        .get(`http://localhost:5555/mpshortages/${id}`)
        .then((response) => {
            setMPshortage(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, [])

    const handleAccept = () => {
        setLoading(true);
        axios
            .put(`http://localhost:5555/mpshortages/${id}`, { ...mpshortage, Status: 'Accepted' })
            .then(() => {
                setMPshortage({ ...mpshortage, Status: 'Accepted' });
                setLoading(false);
                navigate('/Shortages/Accepted');
            })
            .catch((error) => {
                console.error('Error accepting shortage:', error);
                setLoading(false);
            });
    };

    const handleReject = () => {
        setLoading(true);
        axios
            .put(`http://localhost:5555/mpshortages/${id}`, { ...mpshortage, Status: 'Rejected' })
            .then(() => {
                setMPshortage({ ...mpshortage, Status: 'Rejected' });
                setLoading(false);
                
                navigate(`/Shortages/delete/${mpshortage._id}`);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };
    
    

    return(
        <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
            <IsNavbar/>
            {loading ? (
             <Spinner/>
            ):(
                <div className="bg-formBackground flex flex-col border-2 rounded-xl w-[600px] p-4 mx-auto">
                    <h1 className='my-4 text-3xl text-center font-BreeSerif'>Show Machine Part Shortage Request</h1>
                    <div className='my-4'>
                        <span className='mr-4 text-xl text-ternary font-BreeSerif'>Request ID</span>
                        <span className='font-BreeSerif'>{mpshortage.RequestID}</span>
                    </div>
                    <div className='my-4'>
                        <span className='mr-4 text-xl text-ternary font-BreeSerif'>Requested Date</span>
                        <span className='font-BreeSerif'>{new Date(mpshortage.createdAt).toDateString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='mr-4 text-xl text-ternary font-BreeSerif'>Part Name</span>
                        <span className='font-BreeSerif'>{mpshortage.PartName}</span>
                    </div>
                    <div className='my-4'>
                        <span className='mr-4 text-xl text-ternary font-BreeSerif'>Description</span>
                        <span className='font-BreeSerif'>{mpshortage.Description}</span>
                    </div>
                    <div className='my-4'>
                        <span className='mr-4 text-xl text-ternary font-BreeSerif'>Quantity</span>
                        <span className='font-BreeSerif'>{mpshortage.Quantity}</span>
                    </div>
                    <div className='my-4'>
                        <span className='mr-4 text-xl text-ternary font-BreeSerif'>Condition</span>
                        <span className='font-BreeSerif'>{mpshortage.Condition}</span>
                    </div>
                    <div className='my-4'>
                        <span className='mr-4 text-xl text-ternary font-BreeSerif'>Part Needed Before</span>
                        <span className='font-BreeSerif'>{mpshortage.NeededBeforeDate}</span>
                    </div>
                    <div className='my-4'>
                        <span className='mr-4 text-xl text-ternary font-BreeSerif'>Status</span>
                        <span className='font-BreeSerif'>{mpshortage.Status}</span>
                    </div>
                    
                    <div className='my-4'>
                        <span className='mr-4 text-xl text-ternary font-BreeSerif'>Last Updated Time</span>
                        <span className='font-BreeSerif'>{new Date(mpshortage.updatedAt).toDateString()}</span>
                    </div>
                    {mpshortage.Status === 'Pending' && (

                         <div className='flex-col'>
                          <button
                         onClick={handleAccept}
                          className={`flex items-center justify-between h-fit w-fit p-1.5 bg-orange-600 text-md text-white rounded-lg shadow-md font-BreeSerif `}
                             >
                             <AiOutlineCheckCircle className="mr-2 text-xl" />
                             <span className="mr-2">Accept</span>
                            </button >

                            
                            <button 
                            onClick={handleReject}
                            className='flex items-center justify-betweenh-fit w-fit p-1.5 font-BreeSerif text-md bg-red-700 text-white rounded-lg shadow-md'>
                              <MdOutlineCancel className="text-xl" />
                               <span className="px-2">Reject</span>
                               </button>
                                  </div>
                                   )}
                     
                          
                        

                </div>
            )}
            
            <StaffFooter/> 
        </div>
    );
};
export default Viewshortage;