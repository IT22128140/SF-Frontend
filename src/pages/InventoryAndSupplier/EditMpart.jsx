import React, {useState,useEffect} from 'react';
import BackButton from '../../components/button/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import SubmitButton from '../../components/button2/SubmitButton';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';





const EditMpart =() => {
  const [partID, setpartID] = useState('');
    const [partName, setpartName] = useState('');
    const [purchasedDate, setpurchasedDate] = useState ('');
    const [condition, setcondition] = useState('');
    const [costPerUnit, setcostPerUnit]= useState('');
    const [quantity , setquantity] = useState('');
    const [manufacturer, setmanufacturer] = useState('');
    const [loading,setLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();
    
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/MPstock/${id}`)
            .then((response) =>{
              setpartName(response.data.partID);
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
      
      const errors = {};

      if (!partID) {
          errors.partID = 'Part ID is required';
      }

      if (!partName) {
          errors.partName = 'Part Name is required';
      }

      if (!purchasedDate) {
          errors.purchasedDate = 'Purchased Date is required';
      }

      if (!condition) {
          errors.condition = 'Condition is required';
      }

      if (costPerUnit < 0) {
          errors.costPerUnit = 'Cost Per Unit should not be negative';
      }

      if (quantity < 0) {
          errors.quantity = 'Quantity should not be negative';
      }

      if (!manufacturer) {
          errors.manufacturer = 'Manufacturer is required';
      }

      if (Object.keys(errors).length > 0) {
          setValidationErrors(errors);
          return;
      }
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
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
        <BackButton />
        <IsNavbar/>
        <div className="flex items-center justify-center mb-9">

        <h1 className="my-8 text-6xl font-semibold font-Philosopher text-ternary alignment-center">Edit Machine Part Stock</h1>
      </div>
        {loading ? <Spinner/> : ''}
        <div className='bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif '>
        <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>partID</label>
                <input
                 type='String'
                 value={partID}
                 onChange={(e) => setpartID(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                 {validationErrors.partID && <small className="text-red-500">{validationErrors.partID}</small>}
                </div>
            <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>partName</label>
                <input
                 type='String'
                 value={partName}
                 onChange={(e) => setpartName(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                 {validationErrors.partName && <small className="text-red-500">{validationErrors.partName}</small>}
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>purchasedDate</label>
                <input
                 type='Date'
                 value={purchasedDate}
                 onChange={(e) => setpurchasedDate(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                {validationErrors.purchasedDate && <small className="text-red-500">{validationErrors.purchasedDate}</small>}
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-philosopher'>condition</label>
                <input
                 type='String'
                 value={condition}
                 onChange={(e) => setcondition(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                 {validationErrors.condition && <small className="text-red-500">{validationErrors.condition}</small>}
                </div>
              
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>costPerUnit</label>
                <input
                 type='String'
                 value={costPerUnit}
                 onChange={(e) => setcostPerUnit(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                  {validationErrors.costPerUnit && <small className="text-red-500">{validationErrors.costPerUnit}</small>}
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>quantity</label>
                <input
                 type='String'
                 value={quantity}
                 onChange={(e) => setquantity(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                  {validationErrors.quantity && <small className="text-red-500">{validationErrors.quantity}</small>}
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>manufacturer</label>
                <input
                 type='String'
                 value={manufacturer}
                 onChange={(e) => setmanufacturer(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                  {validationErrors.manufacturer && <small className="text-red-500">{validationErrors.manufacturer}</small>}
                </div>
                <SubmitButton onClick={handleEditmachinepart} className="mr-2">Submit</SubmitButton>
    
            </div>
            <StaffFooter/>
        </div>

  )
}

export default EditMpart;