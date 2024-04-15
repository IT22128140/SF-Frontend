import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import {useNavigate, useParams} from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import AddButton from '../../components/button2/AddButton';
import SubmitButton from '../../components/button2/SubmitButton';


const EditSalaryBalance = () => {
    const [editSalaryBalance, setEditSalaryBalance] = useState({});
    const [basicSalary, setBasicSalary] = useState(0);
    const [attendance, setAttendance] = useState(0);
    const [overtime,setOverTime] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        
        setLoading(true);
        axios.get(`http://localhost:5555/salary/${id}`)
        .then((response) => {
            setEditSalaryBalance(response.data);
            setBasicSalary(response.data.basicSalary);
            setAttendance(response.data.attendance);
            setOverTime(response.data.overtime);
            setBonus(response.data.bonus);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });

    }, [])
    
   const handleSalary = () => {
    const data = {
        basicSalary:basicSalary,
        attendance:attendance,
        overtime:overtime,
        bonus:bonus,

    }
    setLoading(true);
   
    axios
        .put(`http://localhost:5555/salary/${id}`, data)
        .then(() => {
            setLoading(false);
            navigate(`/GenerateSalary/${id}`);
        })
        .catch((error) => {
            console.error('Error:', error);
            setLoading(false);
        })
};

    return (
        
        <div className='p-4 h-screen overflow-y-auto'>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl my-8'>Edit Salary Details</h1>
            </div>
            <br />
            <div className="w-1/3 p-4">
                <h2 className="text-xl mb-4">Profile</h2>
            </div>
            <br />
            <br />
            {loading ? (
                <Spinner />
            ) : (
                <div className='p-4 mx-auto max-w-lg '>
                    <div className="mb-4">
                        <label className="block text-ternary text-sm font-bold mb-3">Full Name</label>
                        <span className="border border-black border-1 p-2 block mb-2">{editSalaryBalance.fullName}</span>
                        <br />
                        <label className="block text-ternary text-sm font-bold mb-3">Employee ID</label>
                        <span className="border border-black border-1 p-1 block mb-2">{editSalaryBalance._id}</span>
                        <br />
                        <label className="block text-ternary text-sm font-bold mb-3">Basic Salary</label>
                        <input
                            type="number"
                            value={basicSalary}
                            onChange={(e) => setBasicSalary(e.target.value)}
                            className="border border-black border-1 p-1 block mb-2"
                        />                        <br />
                        <label className="block text-ternary text-sm font-bold mb-3">Attendance</label>
                        <input
                            type="number"
                            value={attendance}
                            onChange={(e) => setAttendance(e.target.value)}
                            className="border border-black border-1 p-1 block mb-2"
                        />                        <br />
                        <label className="block text-ternary text-sm font-bold mb-3">Over Time Hours</label>
                        <input
                            type="number"
                            value={overtime}
                            onChange={(e) => setOverTime(e.target.value)}
                            className="border border-black border-1 p-1 block mb-2"
                        />              <br />
                        <label className="block text-ternary text-sm font-bold mb-3">Bonus</label>
                        <input
                            type="number"
                            value={bonus}
                            onChange={(e) => setBonus(e.target.value)}
                            className="border border-black border-1 p-1 block mb-2"
                        />
                        <br />
                        <br />
                    </div>
                    <br />
                    <div className='flex justify-center'>
                        
                            <SubmitButton onClick={handleSalary}>Submit </SubmitButton> 
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditSalaryBalance;
