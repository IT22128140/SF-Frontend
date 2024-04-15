import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import SearchBar from "../../components/SearchBar";
import TableView from '../../components/table/TableView'
import AcceptButton from "../../components/button2/AcceptButton";
import EditButton from "../../components/button2/EditButton";
import DeleteButton from "../../components/button2/DeleteButton";


const ReleaseProduct = () => {
    const [releaseProducts, setReleaseProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const headers = ['release_ID', 'Product Code', 'Bill ID', 'Release Date', 'Reject Date', 'rejected Reason', 'Operations']
    
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/qualityControl/releaseProduct')
            .then((response) => {
                setReleaseProducts(response.data.data);
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
                <h1 className='text-3xl my-8'>Release Product</h1>
            </div>
            
            <SearchBar placeholder={"Enter Machine ID here"} />
            {loading ? (
                <Spinner />
            ) : (

                <table className='min-w-full'>
                    <TableView headers={headers} />
                    <tbody>
                        {releaseProducts && releaseProducts.map((releaseProduct, index) => (
                            <tr key={releaseProduct._id} className='h-8'>
                                
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {releaseProduct.release_ID}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {releaseProduct.productCode}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {releaseProduct.customerID}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {releaseProduct.releaseDate}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {releaseProduct.reject_Date}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    {releaseProduct.rejectedReason}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center'>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/machines/details/`}>
                                            <BsInfoCircle className='text-2xl text-green-800' />
                                        </Link>
                                        <Link to={`/machines/edit/`}>
                                            <BsInfoCircle className='text-2xl text-yellow-600' />
                                        </Link>
                                        <Link to={`/machines/delete/`}>
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

export default ReleaseProduct
