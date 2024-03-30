import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";

const RepairTable = () => {
    const [repairs, setRepairs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/repairs')
            .then((response) => {
                setRepairs(response.data.data);
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
                <h1 className='text-3xl my-8'>Repairs List</h1>
            </div>
            
            <SearchBar placeholder={"Enter Repair ID here"} />
            {loading ? (
                <Spinner />
            ) : (

                <table className='w-full border-seperate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>ID</th>
                            <th className='border border-slate-600 rounded-md'>Description</th>
                            <th className='border border-slate-600 rounded-md'>Requested Date</th>
                            <th className='border border-slate-600 rounded-md'>Requested Time</th>
                            <th className='border border-slate-600 rounded-md'>Urgency Level</th>
                            <th className='border border-slate-600 rounded-md'>Status</th>
                            <th className='border border-slate-600 rounded-md'>Completed Date</th>
                            <th className='border border-slate-600 rounded-md'>Operations</th>
                        </tr>
                    </thead>
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
                                    {repair.RequestedDate}
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
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {repair.CompletedDate}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/repairs/details/${repair._id}`}>
                                            <BsInfoCircle className='text-2xl text-green-800' />
                                        </Link>
                                        <Link to={`/repairs/edit/${repair._id}`}>
                                            <BsInfoCircle className='text-2xl text-yellow-600' />
                                        </Link>
                                        <Link to={`/repairs/delete/${repair._id}`}>
                                            <BsInfoCircle className='text-2xl text-red-800' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                


                
            )}

                <Link to='/repairs/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
        </div>
    );
};

export default RepairTable