import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import Button from '../../components/button/Button';
import QENavbar from "../../components/navbar/staffheader/QENavbar";
import html2pdf from 'html2pdf.js';

const ViewReleaseProduct = () => {
  const [releaseProduct, setReleaseProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/qualityControl/releaseProduct/${id}`)
      .then((response) => {
        setReleaseProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])

  const handlePrint = () => {
    const element = document.getElementById('pdfContent');

    html2pdf()
      .from(element)
      .save();
  };

  return (
    <div className='relative'>
      <QENavbar
        home={true}
        cel={false}
        rel={false}
        fel={false}
        att={false}
        sal={false}
      />
      <h1 className='text-3xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'brown' }}>Release Product Report</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div id="pdfContent" className='flex flex-col bg-gray-200 rounded-xl w-[600px] p-4 mx-auto font-BreeSerif text-ternary'>
          <h1 className='text-3xl my-4 text-center font-semibold'>SERENDIP FASHION</h1>
          <div className='my-4'>
            <span className='text-xl mr-4'>Review Id :</span>
            <span>{releaseProduct.releaseId}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>ProductCode :</span>
            <span>{releaseProduct.productCode}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Fabric Type :</span>
            <span>{releaseProduct.fabricType}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Color :</span>
            <span>{releaseProduct.color}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>stitchingType :</span>
            <span>{releaseProduct.stitchingType}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>quantity :</span>
            <span>{releaseProduct.quantity}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Release Type :</span>
            <span>{releaseProduct.customerID}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Create Time :</span>
            <span>{new Date(releaseProduct.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Last Update :</span>
            <span>{new Date(releaseProduct.updatedAt).toString()}</span>
          </div>
          
        </div>
      )}
      <div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Button onClick={handlePrint}>Print</Button>
            
          </div>
    </div>
  )
}

export default ViewReleaseProduct;

