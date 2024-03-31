import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import SearchBar from "../../components/SearchBar";
import TableView from '../../components/table/TableView'

const mpShortagesTable = () => {
    const [mpshortages, setmpshortages] = useState([]);
    const [loading, setLoading] = useState(false);
    const headers = ['Request ID', 'Part ID', 'Part Name', 'Description', 'Quantity', 'Condition', 'Need Before', 'Operations']
    
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/mpshortages')
            .then((response) => {
                setmpshortages(response.data.data);
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
                <h1 className='text-3xl my-8'>Machine Part Shortages List</h1>
            </div>
            
            <SearchBar placeholder={"Enter Machine Part Shortage Request ID here"} />
            {loading ? (
                <Spinner />
            ) : (

                <table className='min-w-full'>
                    <TableView headers={headers} />
                    <tbody>
                        {mpshortages.map((mpshortage, index) => (
                            <tr key={mpshortage._id} className='h-8'>
                                
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {mpshortage.RequestID}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {mpshortage.PartID}
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
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/mpshortages/details/${mpshortage._id}`}>
                                            <BsInfoCircle className='text-2xl text-green-800' />
                                        </Link>
                                        <Link to={`/mpshortages/edit/${mpshortage._id}`}>
                                            <BsInfoCircle className='text-2xl text-yellow-600' />
                                        </Link>
                                        <Link to={`/mpshortages/delete/${mpshortage._id}`}>
                                            <BsInfoCircle className='text-2xl text-red-800' />
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
        </div>
    );
};

export default mpShortagesTable
