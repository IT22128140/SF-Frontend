import React, { useState } from 'react';
import BackButton from '../../components/button/BackButton';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/button2/SubmitButton';
import IsNavbar from '../../components/navbar/staffheader/IsNavbar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const AddRMaterial = () => {
     const [materialID, setMaterialID] = useState('');
    const [materialType, setMaterialType] = useState('');
    const [colorAndDesign, setColorAndDesign] = useState('');
    const [initialquantity, setInitialQuantity] = useState('');
    const [costperunit, setCostPerUnit] = useState('');
    const [restockingdate, setRestockingDate] = useState('');
    const [availablequantity, setAvailableQuantity] = useState('');
    const [loading, setLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const navigate = useNavigate();

    const handleSaveRmaterials = () => {
      const errors = {};
      if (!materialID.startsWith('RM')) {
        errors.materialID = 'Material ID should start with RM';
    }

    if (initialquantity < 0) {
        errors.initialquantity = 'Initial quantity should not be negative numbers.';
    }

    if (availablequantity < 0) {
        errors.availablequantity = 'Available quantity should not be negative numbers.';
    }

    if (costperunit < 0) {
      errors.costperunit = 'Cost should not be negative value.';
  }

    if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        return;
    }
      const data = {
          materialID,
          materialType,
            colorAndDesign,
            initialquantity,
            restockingdate,
            availablequantity,
            costperunit,
      };
  
      setLoading(true);
       axios
         .post('http://localhost:5555/RMstock', data)
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
        <div className='w-full h-full bg-fixed bg-no-repeat bg-bgform' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
            <IsNavbar />
            <BackButton />
            <div className="flex items-center justify-center mb-9">
                <h1 className="my-8 text-6xl font-semibold font-Philosopher text-ternary alignment-center">Add raw material details</h1>
            </div>
            {loading && <Spinner />}
            <div className='bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif '>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Material ID</label>
                    <input
                        type='String'
                        value={materialID}
                        onChange={(e) => setMaterialID(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    {validationErrors.materialID && <small className="text-red-500">{validationErrors.materialID}</small>}
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Material Type</label>
                    <input
                        type='String'
                        value={materialType}
                        onChange={(e) => setMaterialType(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    {validationErrors.materialType && <small className="text-red-500">{validationErrors.materialType}</small>}
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Color and Design</label>
                    <input
                        type='String'
                        value={colorAndDesign}
                        onChange={(e) => setColorAndDesign(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    {validationErrors.colorAndDesign && <small className="text-red-500">{validationErrors.colorAndDesign}</small>}
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Initial Quantity</label>
                    <input
                        type='Number'
                        value={initialquantity}
                        onChange={(e) => setInitialQuantity(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    {validationErrors.initialquantity && <small className="text-red-500">{validationErrors.initialquantity}</small>}
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Restocking Date</label>
                    <input
                        type='Date'
                        value={restockingdate}
                        onChange={(e) => setRestockingDate(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    {validationErrors.restockingDate && <small className="text-red-500">{validationErrors.restockingDate}</small>}
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Lavish'>Available Quantity</label>
                    <input
                        type='Number'
                        value={availablequantity}
                        onChange={(e) => setAvailableQuantity(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    {validationErrors.availablequantity && <small className="text-red-500">{validationErrors.availablequantity}</small>}
                </div>
                <div className='my-4'>
                    <label className='mr-4 text-xl text-gray-500 font-Philosopher'>Cost Per Unit</label>
                    <input
                        type='Number'
                        value={costperunit}
                        onChange={(e) => setCostPerUnit(e.target.value)}
                        className='w-full px-4 py-2 border-2 border-gray-500'
                    />
                    {validationErrors.costperunit && <small className="text-red-500">{validationErrors.costperunit}</small>}
                </div>
                <SubmitButton onClick={handleSaveRmaterials} className="mr-2">Submit</SubmitButton>
            </div>
            <StaffFooter />
        </div>
    );
};

export default AddRMaterial;
