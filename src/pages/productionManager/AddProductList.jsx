import React, { useState ,useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import Button from '../../components/button/Button';
import BackButton from '../../components/button/BackButton';
import PMHeader from '../../components/navbar/staffheader/PMHeader';
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import { FormProvider, useForm } from 'react-hook-form';
import SubmitButton from '../../components/button2/SubmitButton.jsx';
import { paraValidation, productCodeValidation, quantityValidation} from '../../utils/inputValidations.js';

const AddProductList = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
//   const [productCode, setProductCode] = useState('');
//   const [fabricType, setFabricType] = useState('');
//   const [color, setColor] = useState('');
//   const [stitchingType, setStitchingType] = useState('');
//   const [quantity, setQuantity] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveProductList = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      await axios.post('http://localhost:5555/garmentProduct', data);
      setLoading(false);
      navigate('/sfProduct');//has to change in PM Home
    } catch (error) {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
    }
  };

  const option1 = [
    { id: 1, value: 'Cotton', option: 'Cotton' },
    { id: 2, value: 'Polyester', option: 'Polyester'},
    { id: 3, value: 'Silk', option: 'Silk'},
    { id: 4, value: 'Linen', option: 'Linen'},
    { id: 5, value: 'Denim', option: 'Denim'},
  ];

  const option2 = [
  { id: 1, value: 'Straight Stitch', option: 'Straight Stitch' },
  { id: 2, value: 'Zigzag Stitch', option: 'Zigzag Stitch' },
  { id: 3, value: 'Overlock Stitch', option: 'Overlock Stitch'},
  { id: 4, value: 'Double Stitch', option: 'Double Stitch'},
  { id: 5, value: 'Topstitching', option: 'Topstitching'},
  ];

  return (
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <PMHeader qr= {true}/>
      <div>
      <center>
        <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
          Garment Product List
        </h1>
      </center>

      {loading ? <Spinner /> : ''}
      
      <FormProvider {...methods}> {/* Providing methods from useForm */}
        <form 
           onSubmit={handleSubmit(handleSaveProductList)} 
           className="flex flex-col bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif"
        >
        <h1 className='text-3xl my-4 text-center'>Add Final Products</h1>
        <Input
            formtype='textarea'
            label='Product Code'
            id='productCode'
            type='text'
            placeholder='Enter Product Code (PR0000)'
            name='productCode'
            // value={productCode}
            // onChange={(e) => setProductCode(e.target.value)}
           {...productCodeValidation}
          />
          <Select
            label='Fabric Type'
            id='fabricType'
            name='fabricType'
            firstOption="Select Fabric Type"
            options={option1}
            validation={{ required: 'Fabric Type is required' }}
          />
          <Input
            formtype='textarea'
            label='Color'
            id='color'
            type='text'
            placeholder='Enter Color'
            name='color'
            // value={color}
            // onChange={(e) => setColor(e.target.value)}
            // validation={{ required: 'Color is required' }}
            {...paraValidation}
          />
          <Select
            label='Stitching Type'
            id='stitchingType'
            name='stitchingType'
            firstOption="Select stitching Type"
            options={option2}
            validation={{ required: 'Stitching Type is required' }}
          />
          <Input
            formtype='textarea'
            label='Quantity'
            id='quantity'
            type='text'
            placeholder='Enter Quantity'
            name='quantity'
            // value={quantity}
            // onChange={(e) => setQuantity(e.target.value)}
            {...quantityValidation}
          />
          <center className="mt-3"><SubmitButton/></center>
        </form>
      </FormProvider>
      <div className="h-40 mt-10 ml-5"></div>
      </div>
      <StaffFooter />
    </div>
  )
}

export default AddProductList;