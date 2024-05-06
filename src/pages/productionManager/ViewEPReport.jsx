import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import Spinner from '../../components/Spinner';
import PMHeader from '../../components/navbar/staffheader/PMHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const ViewEPReport = () => {
  const [empPerformance, setEmpPerformance] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const reportRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/empPerformances/${id}`)
      .then((response) => {
        setEmpPerformance(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  // Calculate efficiency
  const calculateEfficiency = () => {
    if (empPerformance.StandardMinuteValue && empPerformance.WorkingHours) {
      return (empPerformance.StandardMinuteValue * 0.6) / empPerformance.WorkingHours;
    }
    return 0;
  };

  const downloadPDF = () => {

    const opt = {
      margin: 1,
      filename: `EmployeePerformanceReport_${id}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(reportRef.current).set(opt).save();
  };

  return (
    <div className="relative">
      <PMHeader emp={true}/>
      <center>
        <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
          Employee Performance
        </h1>
      </center>
      {loading ? (
        <Spinner />
      ) : (
        <div ref={reportRef} className="flex flex-col bg-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif text-ternary mb-5">
          <h1 className="text-3xl my-4 text-center font-semibold">Employee Performance Report</h1>
          <div className="my-4">
            <span className="text-xl mr-4">Employee ID</span>
            <span>{empPerformance.EmployeeID}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4">Employee Name</span>
            <span>{empPerformance.EmployeeName}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4">Line Number</span>
            <span>{empPerformance.LineNumber}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4">Position Number</span>
            <span>{empPerformance.PositionNumber}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4">Standard Minute Value</span>
            <span>{empPerformance.StandardMinuteValue}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4">Working Hours</span>
            <span>{empPerformance.WorkingHours}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4">Special Notes</span>
            <span>{empPerformance.OtherNotes}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4">Employee Efficiency</span>
            <span>{calculateEfficiency()}</span>
          </div>
        </div>
      )}
      <div className="flex justify-center mb-4">
        <button onClick={downloadPDF} className="bg-black text-white font-BreeSerif py-2 px-4 rounded">
          Download PDF
        </button>
      </div>
      <StaffFooter />
    </div>
  );
};

export default ViewEPReport;
