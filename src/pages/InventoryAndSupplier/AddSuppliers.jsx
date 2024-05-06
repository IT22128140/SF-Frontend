import React, {useState} from 'react';
import BackButton from '../../components/button/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/button2/SubmitButton';






const AddSuppliers =() => {
  const [SRequestID, setSRequestID] = useState('');
    const [supplierName, setsupplierName] = useState('');
    const [address, setaddress] = useState ('');
    const [contactNumber, setcontactNumber] = useState('');
    const [email, setemail]= useState('');
    const [supplierType , setsupplierType] = useState('');
    const [contractExpiary, setcontractExpiary] = useState('');
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    
    const handleSaveSupplier = () => {
       const data = {
        SRequestID,
        supplierName,
        address,
        contactNumber,
        email,
        supplierType,
        contractExpiary,

       };
       setLoading(true);
       axios
         .post('http://localhost:5555/supdetails', data)
         .then(() => {
            setLoading(false);
            navigate('/SupplierDetails');
         })
         .catch((error) => {
            setLoading(false);
            alert('AN error happened.please check console');
            console.log(error);
         });
    };
    
  return (
    
    <div className='p-4 '>
        <BackButton />
        <div className="flex items-center justify-center mb-9">

        <h1 className="my-8 text-6xl font-semibold font-philosopher text-ternary alignment-center">Add supplier </h1>
      </div>
        {loading ? <Spinner/> : ''}
        <div className='bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif '>

        <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>supplier ID</label>
                <input
                 type='String'
                 value={SRequestID}
                 onChange={(e) => setSRequestID(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
            <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>supplier Name</label>
                <input
                 type='String'
                 value={supplierName}
                 onChange={(e) => setsupplierName(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Address</label>
                <input
                 type='String'
                 value={address}
                 onChange={(e) => setaddress(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>contact Number</label>
                <input
                 type='number'
                 value={contactNumber}
                 onChange={(e) => setcontactNumber(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
              
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher '>Email</label>
                <input
                 type='String'
                 value={email}
                 onChange={(e) => setemail(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Supplier Type</label>
                <input
                 type='String'
                 value={supplierType}
                 onChange={(e) => setsupplierType(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Contract Expiary</label>
                <input
                 type='Date'
                 value={contractExpiary}
                 onChange={(e) => setcontractExpiary(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                
         <SubmitButton onClick={handleSaveSupplier} className="mr-2">Submit</SubmitButton>

    
            </div>
        </div>

  )
}

export default AddSuppliers;