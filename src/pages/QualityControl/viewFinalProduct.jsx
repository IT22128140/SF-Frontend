import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import QENavbar from "../../components/navbar/staffheader/QENavbar";
import AcceptButton from '../../components/button2/AcceptButton';
import CancelButton from '../../components/button2/CancelButton';
import Button from '../../components/button/Button';
// import html2pdf from 'html2pdf.js';

const ViewFinalProduct = () => {
  const [productRequest, setProductRequest] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/qualityControl/productRequest/${id}`)
      .then((response) => {
        setProductRequest(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])

  const handleAccept = async () => {
    try {
      await axios.put(`http://localhost:5555/qualityControl/productRequest/${id}/updateAcceptStatus`);
      // Update the acceptStatus in the local state
      setProductRequest(prevState => ({ ...prevState, acceptStatus: 'Accept' }));
      setLoading(false);
      navigate('/qualityControl/reviewRequest/pendingRequest');
    } catch (error) {
      console.log(error);
      // Handle error if needed
    }
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
      <h1 className='text-3xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'brown' }}>Accept Preview</h1>
      
      {loading ? (
        <Spinner />
      ) : (
        <div id="pdfContent" className='flex flex-col bg-gray-200 rounded-xl w-[600px] p-4 mx-auto font-BreeSerif text-ternary'>
    
          <div className='my-4'>
            <span className='text-xl mr-4'>RequestId        :</span>
            <span>{productRequest.requestId}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Product Code     :</span>
            <span>{productRequest.productCode}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Fabric Type      :</span>
            <span>{productRequest.fabricType}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Color            :</span>
            <span>{productRequest.color}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Stitching Type   :</span>
            <span>{productRequest.stitchingType}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Quantity         :</span>
            <span>{productRequest.quantity}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Accept Status    :</span>
            <span>{productRequest.acceptStatus}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Requested Time   :</span>
            <span>{new Date(productRequest.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Last Update Time :</span>
            <span>{new Date(productRequest.updatedAt).toString()}</span>
          </div>
          <div className='flex justify-center gap-x-20'>
            <Button onClick={handleAccept}>Accept</Button>
            <Link to={`/qualityControl/reviewRequest`}>
              <CancelButton >Cancel</CancelButton>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default ViewFinalProduct;

