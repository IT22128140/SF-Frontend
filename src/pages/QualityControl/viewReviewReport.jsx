import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import AcceptButton from '../../components/button2/AcceptButton';
import RejectButton from '../../components/button2/RejectButton';
import Button from '../../components/button/Button';
import QENavbar from "../../components/navbar/staffheader/QENavbar";
import html2pdf from 'html2pdf.js';

const ViewReviwReport = () => {
  const [reviwReport, setReviwReport] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/qualityControl/productReview/${id}`)
      .then((response) => {
        setReviwReport(response.data);
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
      <h1 className='text-6xl my-4 font-BreeSerif' style={{ textAlign: 'center', color: 'brown' }}>Quality Evaluation Report</h1>
      <div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}></div>
      {loading ? (
        <Spinner />
      ) : (
        <div id="pdfContent" className='flex flex-col bg-gray-200 rounded-xl w-[600px] p-4 mx-auto font-BreeSerif text-ternary'>
          <div className='flex flex-row'>
          <img src="/Logo2.png" alt="logo" className="w-[13rem] h-[3rem] lg:w-[15rem] lg:h-[4rem]" />
          <img src="/Logo1.png" alt="logo" className="w-[4rem] h-[3rem] lg:w-[6rem] lg:h-[4.5rem]  ml-auto" />
      </div>
          
          <div className='my-4'>
            <span className='text-xl mr-4'>reviewId :</span>
            <span>{reviwReport.reviewId}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>productCode :</span>
            <span>{reviwReport.productCode}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>fabricType :</span>
            <span>{reviwReport.fabricType}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>color :</span>
            <span>{reviwReport.color}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>stitchingType :</span>
            <span>{reviwReport.stitchingType}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>quantity :</span>
            <span>{reviwReport.quantity}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>inspectionResult :</span>
            <span>{reviwReport.inspectionResult}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>defects :</span>
            <span>{reviwReport.defects}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Create Time :</span>
            <span>{new Date(reviwReport.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Last Update :</span>
            <span>{new Date(reviwReport.updatedAt).toString()}</span>
          </div>
          
        </div>
      )}
      <div className='flex justify-center gap-x-20' style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Button onClick={handlePrint}>Print</Button>
            
          </div>
    </div>
  )
}

export default ViewReviwReport;

