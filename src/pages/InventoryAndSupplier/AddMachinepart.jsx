import React, {useState} from 'react';
import BackButton from '../../components/button/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/button2/SubmitButton';






const Addmachinepart =() => {
     const [partID, setpartID] = useState('');
    const [partName, setpartName] = useState('');
    const [purchasedDate, setpurchasedDate] = useState ('');
    const [condition, setcondition] = useState('');
    const [costPerUnit, setcostPerUnit] = useState('');
    const [quantity, setquantity] = useState('');
    const [manufacturer, setqmanufacturer] = useState('');
    
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    
    const handleSaveRmaterials = () => {
       const data = {
        partID,
        partName,
        purchasedDate,
        condition,
        costPerUnit,
        quantity,
        manufacturer,
       

       };
       setLoading(true);
       axios
         .post('http://localhost:5555/MPstock', data)
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
        <h1 className='my-4 text-3xl'>Add Machine partStock</h1>
        {loading ? <Spinner/> : ''}
        <div className='flex flex-col border-2 rounded border-sky-400-xl w-[600px] p-4 mx-auto '>
        <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>Part ID</label>
                <input
                 type='String'
                 value={partID}
                 onChange={(e) => setpartID(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
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
                 type='date'
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
                 type='number'
                 value={costPerUnit}
                 onChange={(e) => setcostPerUnit(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>quantity</label>
                <input
                 type='number'
                 value={quantity}
                 onChange={(e) => setquantity(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>manufacturer</label>
                <input
                 type='String'
                 value={manufacturer}
                 onChange={(e) => setqmanufacturer(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
              
                
                
              <SubmitButton onClick={handleSaveRmaterials} className="mr-2">Submit</SubmitButton>

    
            </div>
        </div>

  )
}

export default Addmachinepart;