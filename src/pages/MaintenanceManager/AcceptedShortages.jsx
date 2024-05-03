import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import TableView from '../../components/table/TableView';
import EditButton from "../../components/button2/EditButton";
import DeleteButton from "../../components/button2/DeleteButton";
import ViewButton from "../../components/button2/ViewButton";
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import SearchBar from "../../components/SearchBar";

const mpShortagesTable = () => {
    const [mpshortages, setmpshortages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data3, setdata3] = useState([]);
    const headers = ['Request ID', 'Requested Date', 'Part Name', 'Description', 'Quantity', 'Condition', 'Need Before', 'Operations']
    
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/mpshortages/accepted')
            .then((response) => {
                setmpshortages(response.data.data);
                const set = response.data.data.map(obj => ({name:obj.RequestID, _id:obj._id}));
                setdata3(set);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [])

    console.log(data3);


    return (
        <div className='relative'>
            <MaintenanceManagerHeader sh={true}/>
            <Link to={'/mpshortages/view'}>
            <button>Pending Shortages</button>
            </Link>
            <SearchBar data= {data3} navigate={`/mpshortages/view/`} placeholder={"Enter Request ID"}/>

            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Machine Part Shortages List</h1>
            </div>
            
            {loading ? (
                <Spinner />
            ) : (

                <table className='ml-1 mr-1 font-BreeSerif'>
                    <TableView headers={headers} />
                    <tbody>
                        {mpshortages.map((mpshortage, index) => (
                            <tr key={mpshortage._id} className='h-8'>
                                
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {mpshortage.RequestID}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {mpshortage.Requested}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {mpshortage.PartName}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {mpshortage.Description}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {mpshortage.Quantity}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {mpshortage.Condition}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {mpshortage.NeededBeforeDate}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4 ml-2 mr-2'>
                                        <Link to={`/mpshortages/view/${mpshortage._id}`}>
                                            <ViewButton/>
                                        </Link>
                                        <Link to={`/mpshortages/edit/${mpshortage._id}`}>
                                            <EditButton/>
                                        </Link>
                                        <Link to={`/mpshortages/delete/${mpshortage._id}`}>
                                            <DeleteButton />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                


                
            )}

                <Link to='/mpshortages/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
                <StaffFooter/>
        </div>
    );
};

export default mpShortagesTable
