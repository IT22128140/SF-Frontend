import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import SearchBar from "../../components/SearchBar";
import TableView from '../../components/table/TableView';
import EditButton from "../../components/button2/EditButton";
import DeleteButton from "../../components/button2/DeleteButton";
import ViewButton from "../../components/button2/ViewButton";
import AddButton from "../../components/button2/AddButton";
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import NotificationComponent from './Notifications'; 
import DeleteMachine from "./DeleteMachine";

const MachineTable = () => {
    const [machines, setMachines] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data1, setdata1] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);
    const headers = ['Machine ID', 'Machine Name', 'Purchased Date', 'Condition', 'Cost (Rs)', 'Manufacture', 'Category', 'Operations']
    
    useEffect(() => {
        setLoading(true);
        axios
          .get('http://localhost:5555/machines')
          .then((response) => {
            setMachines(response.data.data);
            const set = response.data.data.map(obj => ({name:obj.MachineID, _id:obj._id}));
            setdata1(set);
            setLoading(false);

          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, []);


      console.log(data1);

    return (
        <div className='w-full h-full bg-fixed bg-no-repeat bg-bgimg' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
            <MaintenanceManagerHeader m={true}/>
            <div>
            <NotificationComponent /> 
            <SearchBar data= {data1} navigate={`/machines/view/`} placeholder={"Enter Machine ID"}/>
          
                <h1 className='text-6xl text-center font-philosopher text-ternary font-semibold my-8 alignment-center'>Machines List</h1>
            
            
            {loading ? (
                <Spinner />
            ) : (

                <table className='bg-white ml-1 mr-1 font-BreeSerif'>
                    <TableView headers={headers} />
                    <tbody>
                        {machines.map((machine, index) => (
                            <tr key={machine._id} className='h-8'>
                                
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {machine.MachineID}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {machine.MachineName}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {machine.PurchasedDate.split("T")[0]}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {machine.Condition}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {machine.Cost}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {machine.Manufacturer}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {machine.Category}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4 ml-2 mr-2'>
                                        <Link to={`/machines/view/${machine._id}`}>
                                            <ViewButton/>
                                        </Link>
                                        <Link to={`/machines/edit/${machine._id}`}>
                                            <EditButton />
                                        </Link>
                                        <DeleteButton
                                        onClick={() => {
                                            setSelectedMachine(machine);
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
                <DeleteMachine
                id={selectedMachine._id}
                onClose={()=> setShowDelete(false)}
                />
            )}

               <div className="flex h-40 mt-10 ml-5">
                <Link to='/machines/create'>
                    <AddButton />
                </Link>
                </div>
                </div>
                <StaffFooter/>
        </div>
    );
};

export default MachineTable
