import React, {useState,useEffect} from 'react';
import BackButton from '../../components/button/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import SubmitButton from '../../components/button2/SubmitButton';







const EditMpart =() => {
    const [partName, setpartName] = useState('');
    const [purchasedDate, setpurchasedDate] = useState ('');
    const [condition, setcondition] = useState('');
    const [costPerUnit, setcostPerUnit]= useState('');
    const [quantity , setquantity] = useState('');
    const [manufacturer, setmanufacturer] = useState('');
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/MPstock/${id}`)
            .then((response) =>{
                setpartName(response.data.partName);
                setpurchasedDate(response.data.purchasedDate);
                setcondition(response.data.condition);
                setcostPerUnit(response.data.costPerUnit);
                setquantity(response.data.quantity);
                setmanufacturer(response.data.manufacturer);
                setLoading(false);
            }).catch((error) =>{
                setLoading(false);
                alert('An error happened');
                console.log(error);
            });
    }, [id]);
    
    const handleEditmachinepart = () => {
       const data = {
        partName,
        purchasedDate,
        condition,
        costPerUnit,
        quantity,
        manufacturer,

       };
       setLoading(true);
       axios
         .put(`http://localhost:5555/mpstock/${id}`, data)
         .then(() => {
            setLoading(false);
            navigate('/MachinePartStock');
         })
         .catch((error) => {
            setLoading(false);
            alert('AN error happened.please check console');
            console.log(error);
         });
    };
    
  return (
    <div className='p-4'>
        <BackButton />
        <h1 className='my-4 text-3xl'>Edit Machinepart</h1>
        {loading ? <Spinner/> : ''}
        <div className='flex flex-col border-2 rounded border-sky-400-xl w-[600px] p-4 mx-auto '>
            <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>partName</label>
                <input
                 type='String'
                 value={partName}
                 onChange={(e) => setpartName(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>purchasedDate</label>
                <input
                 type='String'
                 value={purchasedDate}
                 onChange={(e) => setpurchasedDate(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>condition</label>
                <input
                 type='String'
                 value={condition}
                 onChange={(e) => setcondition(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
              
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>costPerUnit</label>
                <input
                 type='String'
                 value={costPerUnit}
                 onChange={(e) => setcostPerUnit(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>quantity</label>
                <input
                 type='String'
                 value={quantity}
                 onChange={(e) => setquantity(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>manufacturer</label>
                <input
                 type='Date'
                 value={manufacturer}
                 onChange={(e) => setmanufacturer(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <SubmitButton onClick={handleEditmachinepart} className="mr-2">Submit</SubmitButton>
    
            </div>
        </div>

  )
}

export default EditMpart;