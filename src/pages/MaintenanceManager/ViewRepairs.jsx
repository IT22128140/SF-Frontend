import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import TableView from '../../components/table/TableView'
import EditButton from "../../components/button2/EditButton";
import DeleteButton from "../../components/button2/DeleteButton";
import ViewButton from "../../components/button2/ViewButton";
import AddButton from "../../components/button2/AddButton";
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import { fetchRepairWorkers } from './workers';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import SearchBar from "../../components/SearchBar";
import DeleteRepairs from "./DeleteRepairs";

const RepairTable = () => {
    const [repairs, setRepairs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedRepair, setSelectedRepair] = useState(null);
    const [data2, setdata2] = useState([]);
 
    const headers = ['ID', 'Description', 'Requested Date', 'Requested Time', 'Urgency Level', 'Status' , 'Completed Date', 'Operations'];
    
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/repairs')
            .then((response) => {
                setRepairs(response.data.data);
                const set = response.data.data.map(obj => ({name:obj.RepairID, _id:obj._id}));
                setdata2(set);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

    }, [])

 

    console.log(data2);

    return (
        <div className='w-full h-full bg-fixed bg-no-repeat bg-bgimg' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
            <MaintenanceManagerHeader r={true}/>
            <div >
            <SearchBar data= {data2} navigate={`/repairs/view/`} placeholder={"Enter Repair ID"}/>
       
                <h1 className='text-6xl text-center font-philosopher text-ternary font-semibold my-8 alignment-center'>Repairs List</h1>
    
            {loading ? (
                <Spinner />
            ) : (

                <table className='bg-white ml-1 mr-1 font-BreeSerif'>
                    <TableView headers={headers} />
                    <tbody>
                        {repairs.map((repair, index) => (
                            <tr key={repair._id} className='h-8'>
                                
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {repair.RepairID}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {repair.RepairDescription}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                {new Date(repair.createdAt).toDateString()}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {repair.RequestedTime}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {repair.UrgencyLevel}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {repair.Status}
                                </td>
                                {/* <td className='border border-slate-700 rounded-md text-center'>
                                    {repair.Workers}
                                </td> */}
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {repair.CompletedDate.split("T")[0]}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4 ml-2 mr-2'>
                                        <Link to={`/repairs/view/${repair._id}`}>
                                            <ViewButton/>
                                        </Link>
                                        <Link to={`/repairs/edit/${repair._id}`}>
                                              <EditButton/>
                                        </Link>
                                        <DeleteButton
                                        onClick={() => {
                                            setSelectedRepair(repair);
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
                    <DeleteRepairs
                        id={selectedRepair._id}
                        onClose={() => setShowDelete(false)}
                    />
                )}

                <div className="flex h-40 mt-10 ml-5">
                <Link to='/repairs/create'>
                    <AddButton />
                </Link>
                </div>
                </div>
                <StaffFooter/>
        </div>
    );
};

export default RepairTable