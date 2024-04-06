import React, {useState,useEffect} from 'react';
import BackButton from '../../components/button/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';







const EditSuppliers =() => {
    const [supplierName, setsupplierName] = useState('');
    const [address, setaddress] = useState ('');
    const [contactNumber, setcontactNumber] = useState('');
    const [email, setemail]= useState('');
    const [supplierType , setsupplierType] = useState('');
    const [contractExpiary, setcontractExpiary] = useState('');
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/supdetails/${id}`)
            .then((response) =>{
                setsupplierName(response.data.supplierName);
                setaddress(response.data.address);
                setcontactNumber(response.data.contactNumber);
                setemail(response.data.email);
                setsupplierType(response.data.supplierType);
                setcontractExpiary(response.data.contractExpiary);
                setLoading(false);
            }).catch((error) =>{
                setLoading(false);
                alert('An error happened');
                console.log(error);
            });
    }, [id]);
    
    const handleEditSupplier = () => {
       const data = {
        supplierName,
        address,
        contactNumber,
        email,
        supplierType,
        contractExpiary,

       };
       setLoading(true);
       axios
         .put(`http://localhost:5555/supdetails/${id}`, data)
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
    <div className='p-4'>
        <BackButton />
        <h1 className='my-4 text-3xl'>Edit supplier</h1>
        {loading ? <Spinner/> : ''}
        <div className='flex flex-col border-2 rounded border-sky-400-xl w-[600px] p-4 mx-auto '>
            <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>supplier Name</label>
                <input
                 type='String'
                 value={supplierName}
                 onChange={(e) => setsupplierName(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>Adsress</label>
                <input
                 type='String'
                 value={address}
                 onChange={(e) => setaddress(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>contact Number</label>
                <input
                 type='number'
                 value={contactNumber}
                 onChange={(e) => setcontactNumber(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
              
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>Email</label>
                <input
                 type='String'
                 value={email}
                 onChange={(e) => setemail(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>Supplier Type</label>
                <input
                 type='String'
                 value={supplierType}
                 onChange={(e) => setsupplierType(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>Contract Expiary</label>
                <input
                 type='Date'
                 value={contractExpiary}
                 onChange={(e) => setcontractExpiary(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <SubmitButton onClick={handleEditSupplier} className="mr-2">Submit</SubmitButton>
            </div>
        </div>

  )
}

export default EditSuppliers;