import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const EditMachine = () => {
    const [MachineID, setMachineID] = useState('');
    const [MachineName, setMachineName] = useState('');
    const [PurchasedDate, setPurchasedDate] = useState('');
    const [Condition, setCondition] = useState('');
    const [Cost, setCost] = useState('');
    const [Quantity, setQuantity] = useState('');
    const [Manufacturer, setManufacturer] = useState('');
    const [Category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/machines/${id}`)
    .then((response) => {
      setMachineID(response.data.MachineID);
      setMachineName(response.data.MachineName);
      setPurchasedDate(response.data.PurchasedDate);
      setCondition(response.data.Condition);
      setCost(response.data.Cost);
      setQuantity(response.data.Quantity);
      setManufacturer(response.data.Manufacturer);
      setCategory(response.data.Category);
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
      alert("An error happened. Please Check Console");
      console.log(error);
    })
  }, [])

  const handleEditMachine = () => {
    const data = {
        MachineID,
        MachineName,
        PurchasedDate,
        Condition,
        Cost,
        Quantity,
        Manufacturer,
        Category,
    }
    setLoading(true);
      axios.put(`http://localhost:5555/machines/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/machines/view');
      })
      .catch ((error) => {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
    })
  };

  return (
    <div className='relative'>
      <MaintenanceManagerHeader/>
      <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      {loading ? <Spinner /> : ''}

       <div className="bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto mt-20 font-BreeSerif">
       <h1 className='text-3xl text-center my-4 font-BreeSerif'>Edit Machine Details</h1>

       <div className="flex w-[80%] justify-between mb-2">
        <label className='text-ternary'>Machine ID</label>
       </div>
       <div> 
          <input
            type='text'
            placeholder='Enter Machine ID'
            name='MachineID'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={MachineID}
            onChange={(e) => setMachineID(e.target.value)}
            validation={{ required: 'Machine ID is required' }}
            readOnly
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
           <label className='text-ternary'>Machine Name</label>
          </div>
          <div>
          <input
            type='text'
            placeholder='Enter Machine Name'
            name='MachineName'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={MachineName}
            onChange={(e) => setMachineName(e.target.value)}
            validation={{ required: 'Machine Name is required' }}
            readOnly
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
            <label className='text-ternary'>Purchased Date</label>
          </div>
          <div>  
          <input
            type='text'
            placeholder='Enter Purchased Date'
            name='PurchasedDate'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={PurchasedDate.split("T")[0]}
            onChange={(e) => setPurchasedDate(e.target.value)}
            validation={{ required: 'Purchased Date is required' }}
            readOnly
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
            <label className='text-ternary'>Condition</label>
          </div>
          <div>  
          <input
            type='text'
            placeholder='Enter Condition'
            name='Condition'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={Condition}
            onChange={(e) => setCondition(e.target.value)}
            validation={{ required: 'Condition is required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
            <label className='text-ternary'>Cost</label>
          </div>
          <div>
           <input
            type='text'
            placeholder='Enter Cost'
            name='Cost'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={Cost}
            onChange={(e) => setCost(e.target.value)}
            validation={{ required: 'Cost is required' }}
           />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
             <label className='text-ternary'>Manufacturer</label>
          </div>
          <div>   
          <input
            type='text'
            placeholder='Enter Manufacturer'
            name='Manufacturer'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={Manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
            validation={{ required: 'Manufacturer is required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
             <label className='text-ternary'>Category</label>
          </div>
          <div>   
          <input
            type='text'
            placeholder='Enter Category'
            name='Category'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            validation={{ required: 'Category is required' }}
          />
          </div>
        
          {/* Include other Input components here */}
          <button type="submit" className='font-BreeSerif bg-black rounded text-white text-center w-[100px] h-[35px] self-end justify-self-end' onClick={handleEditMachine}>Submit</button>
          </div>
          </div>
          <StaffFooter/>
    </div>
  )
}

export default EditMachine;
