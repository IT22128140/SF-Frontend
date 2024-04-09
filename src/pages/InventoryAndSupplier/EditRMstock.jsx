import React, {useState,useEffect} from 'react';
import BackButton from '../../components/button/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';








const EditRMstock =() => {
    const [materialType, setmaterialType] = useState('');
    const [colorAndDesign, setcolorAndDesign] = useState ('');
    const [quantity, setquantity] = useState('');
  
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/RMstock/${id}`)

            .then((response) =>{
                setmaterialType(response.data.materialType);
                setcolorAndDesign(response.data.colorAndDesign);
                setquantity(response.data.quantity);
             
                setLoading(false);
            }).catch((error) =>{
                setLoading(false);
                alert('An error happened');
                console.log(error);
            });
    }, [id]);
    
    const handleEditRmaterial = () => {
       const data = {
        materialType,
        colorAndDesign,
        quantity,
    

       };
       setLoading(true);
       axios
         .put(`http://localhost:5555/mpstock/${id}`, data)
         .then(() => {
            setLoading(false);
            navigate('/RawMaterialStock');
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
        <h1 className='my-4 text-3xl'>Edit Raw Materials</h1>
        {loading ? <Spinner/> : ''}
        <div className='flex flex-col border-2 rounded border-sky-400-xl w-[600px] p-4 mx-auto '>
            <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>material Type</label>
                <input
                 type='String'
                 value={materialType}
                 onChange={(e) => setmaterialType(e.target.value)}
                  className='w-full px-4 py-2 border-2 border-gray-500'
                />
                </div>
                <div className='my-4'>
                <label className='mr-4 text-xl text-gray-500'>colorAndDesign</label>
                <input
                 type='String'
                 value={colorAndDesign}
                 onChange={(e) => setcolorAndDesign(e.target.value)}
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
              
                <SubmitButton onClick={handleEditRmaterial} className="mr-2">Submit</SubmitButton>
    
            </div>
        </div>

  )
}

export default EditRMstock;