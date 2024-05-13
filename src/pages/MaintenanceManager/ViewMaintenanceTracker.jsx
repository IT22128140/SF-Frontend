import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { Link } from "react-router-dom";
import AddButton from "../../components/button2/AddButton";
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const MaintenanceView = () => {
    const [maintenanceRecords, setMaintenanceRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const { MachineID } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
        .get(`http://localhost:5555/maintenance/machine/${MachineID}`)
        .then((response) => {
            setMaintenanceRecords(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, []);

    return (
        <div className='relative'>
            <MaintenanceManagerHeader/>
            {loading ? (
             <Spinner/>
            ) : (
                <div className="font-BreeSerif">
                    <h1 className='text-3xl text-center my-4 font-BreeSerif'>Maintenance Records for Machine ID: {MachineID}</h1>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Maintenance ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Machine Parts</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Changed Motor</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Changed Needle</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Oiled</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {maintenanceRecords.map((record) => (
                                <tr key={record._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{record.MaintenanceID}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{record.Date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{record.Category}</td>
                                    <td className='my-4'>
                                        
                                        <div>
                                            {record.Machineparts && record.Machineparts.map((part, index) => (
                                                <div key={index}>
                                                    <span className='font-BreeSerif'>{part.partID} - {part.partName} {part.condition}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{record.ChangedMotor}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{record.ChangedNeedle}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{record.Oiled}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
            )}

            <div className="flex h-40 mt-10 ml-5">
                <Link to='/maintenance/create'>
                    <AddButton />
                </Link>
            </div>
            <div className='h-60'></div>
            <StaffFooter/>
        </div>
    );
};

export default MaintenanceView;
