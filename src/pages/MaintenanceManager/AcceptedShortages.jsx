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
import DeleteMPshortage from "./DeleteMPshortage";

const mpShortagesTable = () => {
    const [mpshortages, setmpshortages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedShortage, setSelectedShortage] = useState(null);
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
        <div className='w-full h-full bg-fixed bg-no-repeat bg-bgimg' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
            <MaintenanceManagerHeader sh={true}/>
            <div >
            <Link to={'/mpshortages/view'}>
            <button className="flex items-center mt-4  justify-between w-fit h-fit p-1.5 text-md font-BreeSerif bg-red-900 text-white rounded-lg shadow-md">View Pending Shortages</button>
            </Link>
            <SearchBar data= {data3} navigate={`/mpshortages/view/`} placeholder={"Enter Request ID"}/>


                <h1 className='text-6xl text-center font-philosopher text-ternary font-semibold my-8 alignment-center'>Machine Part Shortages List</h1>

            
            {loading ? (
                <Spinner />
            ) : (

                <table className='bg-white ml-1 mr-1 font-BreeSerif'>
                    <TableView headers={headers} />
                    <tbody>
                        {mpshortages.map((mpshortage, index) => (
                            <tr key={mpshortage._id} className='h-8'>
                                
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {mpshortage.RequestID}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                {new Date(mpshortage.createdAt).toDateString()}
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
                                    {mpshortage.NeededBeforeDate.split("T")[0]}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4 ml-2 mr-2'>
                                        <Link to={`/mpshortages/view/${mpshortage._id}`}>
                                            <ViewButton/>
                                        </Link>
                                        <Link to={`/mpshortages/edit/${mpshortage._id}`}>
                                            <EditButton/>
                                        </Link>
                                        <DeleteButton
                                        onClick={() => {
                                            setSelectedShortage(mpshortage);
                                            setShowDelete(true)
                                        }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            )}

                {showDelete && (
                    <DeleteMPshortage
                        id={selectedShortage._id}
                        onClose={() => setShowDelete(false)}
                    />
                )}

            <div className="h-40 mt-10 ml-5"></div>
            </div>
                <StaffFooter/>
        </div>
    );
};

export default mpShortagesTable
