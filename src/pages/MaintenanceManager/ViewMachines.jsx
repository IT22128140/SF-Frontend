import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";
import TableView from '../../components/table/TableView'

const MachineTable = () => {
    const [machines, setMachines] = useState([]);
    const [loading, setLoading] = useState(false);
    const headers = ['Machine ID', 'Machine Name', 'Purchased Date', 'Condition', 'Cost', 'Quantity', 'Manufacture', 'Category', 'Operations']
    
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/machines')
            .then((response) => {
                setMachines(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [])
    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Machines List</h1>
            </div>
            
            <SearchBar placeholder={"Enter Machine ID here"} />
            {loading ? (
                <Spinner />
            ) : (

                <table className='min-w-full'>
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
                                    {machine.PurchasedDate}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {machine.Condition}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {machine.Cost}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {machine.Quantity}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {machine.Manufacturer}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {machine.Category}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/machines/details/${machine._id}`}>
                                            <BsInfoCircle className='text-2xl text-green-800' />
                                        </Link>
                                        <Link to={`/machines/edit/${machine._id}`}>
                                            <BsInfoCircle className='text-2xl text-yellow-600' />
                                        </Link>
                                        <Link to={`/machines/delete/${machine._id}`}>
                                            <BsInfoCircle className='text-2xl text-red-800' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                


                
            )}

                <Link to='/machines/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
        </div>
    );
};

export default MachineTable
