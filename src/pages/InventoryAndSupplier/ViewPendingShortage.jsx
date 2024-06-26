import React,{useEffect,useState} from 'react';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import EditButton from '../../components/button2/EditButton';
import DeleteButton from '../../components/button2/DeleteButton';
import ViewButton from '../../components/button2/ViewButton'; 
import TableView from '../../components/table/TableView';

const pendingshortsge = () =>{
    const [mpshortages, setmpshortages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data3, setdata3] = useState([]);
    const headers = ['Request ID', 'Requested Date', 'Part Name', 'Description', 'Quantity', 'Condition', 'Need Before', 'Operations']
    
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/mpshortages/pending')
            .then((response) => {
                setmpshortages(response.data.data);
                
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [])

    console.log(data3);


    return (
        <div className='w-full h-full bg-fixed bg-no-repeat bg-bgimg' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
            <IsNavbar sh={true}/>
            <Link to={'/Shortages/Accepted'}>
             <button className='px-4 py-2 text-white transition-colors duration-300 ease-in-out rounded-md shadow-md hite bg-ternary hover:ternary font-Lavish'>
              Accepted Shortages
             </button>
              </Link>


            <div className='flex items-center justify-center mb-9'>
                <h1 className='my-8 text-5xl font-semibold font-Philosopher text-ternary alignment-center'>Machine Part Requests</h1>
            </div>
            
            {loading ? (
                <Spinner />
            ) : (

                <table className='ml-1 mr-1 bg-white mb-9 font-BreeSerif'>
                    <TableView headers={headers} />
                    <tbody>
                        {mpshortages.map((mpshortage, index) => (
                            <tr key={mpshortage._id} className='h-8'>
                                
                                <td className='text-center border rounded-md border-slate-700'>
                                    {mpshortage.RequestID}
                                </td>
                                <td className='text-center border rounded-md border-slate-700'>
                                {new Date(mpshortage.createdAt).toDateString()}

                                </td>
                                <td className='text-center border rounded-md border-slate-700'>
                                    {mpshortage.PartName}
                                </td>
                                <td className='text-center border rounded-md border-slate-700'>
                                    {mpshortage.Description}
                                </td>
                                <td className='text-center border rounded-md border-slate-700'>
                                    {mpshortage.Quantity}
                                </td>
                                <td className='text-center border rounded-md border-slate-700'>
                                    {mpshortage.Condition}
                                </td>
                                <td className='text-center border rounded-md border-slate-700'>
                                {mpshortage.NeededBeforeDate.split("T")[0]}
                                </td>
                                <td className='text-center border rounded-md border-slate-700'>
                                    <div className='flex justify-center ml-2 mr-2 gap-x-4'>
                                        <Link to={`/Shortages/Viewshortage/${mpshortage._id}`}>
                                            <ViewButton/>
                                        </Link>
                                        
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                


                
            )}

                
                <StaffFooter/>
        </div>
    );
};

export default pendingshortsge;