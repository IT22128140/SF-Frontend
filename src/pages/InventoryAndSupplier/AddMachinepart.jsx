import React, {useState} from 'react';
import BackButton from '../../components/button/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/button2/SubmitButton';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';




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
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <IsNavbar/>
        <BackButton />
        <div className="flex items-center justify-center mb-9">

        <h1 className="my-8 text-6xl font-semibold font-Philosopher text-ternary alignment-center ">Add Machine Part </h1>
      </div>
        {loading ? <Spinner/> : ''}
        <div className='bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif '>

       
        <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Part ID</label>
                <input
                 type='String'
                 value={partID}
                 onChange={(e) => setpartID(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
            <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>partName</label>
                <input
                 type='String'
                 value={partName}
                 onChange={(e) => setpartName(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>purchasedDate</label>
                <input
                 type='date'
                 value={purchasedDate}
                 onChange={(e) => setpurchasedDate(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>condition</label>
                <input
                 type='String'
                 value={condition}
                 onChange={(e) => setcondition(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>costPerUnit</label>
                <input
                 type='number'
                 value={costPerUnit}
                 onChange={(e) => setcostPerUnit(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Lavish'>quantity</label>
                <input
                 type='number'
                 value={quantity}
                 onChange={(e) => setquantity(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>manufacturer</label>
                <input
                 type='String'
                 value={manufacturer}
                 onChange={(e) => setqmanufacturer(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
              
                
                
              <SubmitButton onClick={handleSaveRmaterials} className="mr-2">Submit</SubmitButton>

    
            </div>
            <StaffFooter/>
        </div>

  )
}

export default Addmachinepart;