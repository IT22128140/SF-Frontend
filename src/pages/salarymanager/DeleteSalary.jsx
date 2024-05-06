import React from 'react';
import DeleteButton from '../../components/button2/DeleteButton';
import RejectButton from '../../components/button2/RejectButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { Link, useNavigate , useParams } from 'react-router-dom';
import { useState } from 'react'
import BackButton from '../../components/button/BackButton';



const DeleteSalary = ()  =>{
  const [deleteSalary, setDeleteSalary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/salary/${id}`)
      .then((response) => {
        setDeleteSalary(response.data);
        setLoading(false);
        navigate('/salaryhistory');
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  const handleBack = () => {


    setLoading(true);
    axios
    axios.get(`http://localhost:5555/salary/${id}`) 
         .then((response) => {
        setDeleteSalary(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

  }
 
      return (
        <div className="flex justify-center items-center h-screen">
        <div className="bg-orange-100 text-black p-5 rounded-lg w-96">
          <h2 className="text-xl font-bold text-primary">Delete Salary</h2>
          <br />
          <p>Are you sure you want to delete this employee's salary details?</p>
          <br />
          <p className='font-bold'>This action cannot be undone once you click on Confirm.</p>

          <p>To continue, please enter the password.</p>
        {loading ? <Spinner/> : ''}
    
          <input 
            type="password" 
            className="mt-2 p-2 w-full" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
    
          <div className="mt-4 flex justify-center space-x-16">
            
            <Link to = {`/ViewSalary/${deleteSalary._id}`}>
            <button className="bg-black p-2 rounded text-white">Cancel</button>
            </Link>
            
            <DeleteButton onClick={handleDelete} >Confirm</DeleteButton>
          </div>
        </div>
      </div>
      );
    
  
};

export default DeleteSalary