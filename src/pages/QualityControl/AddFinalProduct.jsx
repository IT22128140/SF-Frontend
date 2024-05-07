import React, { useState ,useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import Button from '../../components/button/Button';
import BackButton from '../../components/button/BackButton';
import PMHeader from '../../components/navbar/PMHeader';
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import Picture1 from '../../../public/Picture1.jpg'
import { FormProvider, useForm } from 'react-hook-form';


const AddFinalProduct = () => {
  const methods = useForm();
  const [productCode, setProductCode] = useState('');
  const [fabricType, setFabricType] = useState('');
  const [color, setColor] = useState('');
  const [stitchingType, setStitchingType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveProductRequest = async (data) => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5555/qualityControl/productRequest', data);
      setLoading(false);
      navigate('/qualityControl/reviewRequest/add');//has to change in PM Home
    } catch (error) {
      setLoading(false);
      alert('An error happened. Please check console');
      console.log(error);
    }
  };

  const handleCancel = () => {
    navigate('/'); // Change the path as needed
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
    <div className='relative' style={{ backgroundImage: "/Picture1.jpg", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <PMHeader />
      <h1 className='text-4xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'brown' }}>Request Quality Evaluation For Final Product</h1>
      {loading ? <Spinner /> : ''}
      
      <FormProvider {...methods}> 
        <form onSubmit={methods.handleSubmit(handleSaveProductRequest)} className="flex flex-col bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif">
        <Input
            formtype='textarea'
            label='Product Code'
            id='productCode'
            type='text'
            placeholder='Enter Product Code (PR0000)'
            name='productCode'
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
            validation={{
              required: 'Product Code is required',
              pattern: {
                  value: /^PR\d{4}$/, // Regex pattern for "PR" followed by four digits
                  message: 'Product Code must start with PR followed by four digits',
              }
          }}
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
            value={color}
            onChange={(e) => setColor(e.target.value)}
            validation={{ required: 'Color is required' }}
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
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            validation={{
              required: 'Quantity is required',
              pattern: {
                  value: /^[0-9]+$/,
                  message: 'Quantity must be a number',
              },
              max: {
                  value: 100,
                  message: 'Maximum quantity of one set is 100',
              }
          }}
          />
          
         
         <div className="flex justify-end mt-4">
            
            <Button onClick={handleCancel} className="mr-2" style={{ backgroundColor: 'red' }}>Cancel</Button>
            <Button type="submit">Add</Button>
         </div>
        </form>
      </FormProvider>
      <div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>
      <StaffFooter />
    </div>
  )
}

export default AddFinalProduct;