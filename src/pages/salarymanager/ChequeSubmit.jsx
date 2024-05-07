import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../components/button2/SubmitButton";
import AddButton from "../../components/button2/AddButton";
import HrNavbar from '../../components/navbar/staffheader/HrNavbar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import axios from 'axios';

const ChequeSubmit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cheque1, setcheque1] = useState(null);
  const [cheque2, setcheque2] = useState(null);
  const [notice, setNotice] = useState("");
  const [showNewSlipInput, setShowNewSlipInput] = useState(false);
  const [showNoticeInput, setShowNoticeInput] = useState(false);

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', cheque1);
      formData.append('file', cheque2);
      formData.append('notice', notice);

      await axios.put(`http://localhost:5555/salary/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log("File uploaded successfully");
      navigate("/SalaryTable"); // Redirect to SalaryTable after successful upload
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleAddCheque = () => {
    setShowNewSlipInput(true);
    setShowNoticeInput(true);
  };

  return (
    <div>
      <HrNavbar sal={true} />
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-full max-w-lg relative">
          <br />
          <br />
          <div className="text-3xl text-center font-semibold text-black mb-8">
            Cheque Submission
          </div>
          <div className="mb-8">
            <br />
            <br />
            <div className="text-xl text-black mb-4">Attach Payment Slip</div>
            <div>
              <br />
              <input type="file" onChange={(e) => setcheque1(e.target.cheque1)} />
            </div>
          </div>
          {showNoticeInput && (
            <div className="mb-8">
              <div className="text-xl text-black mb-4">Notice</div>
              <div>
                <input type="text" placeholder="Enter notice" value={notice} onChange={(e) => setNotice(e.target.value)} className="w-full h-12 mb-2 px-4 border border-black" />
              </div>
            </div>
          )}
          {showNewSlipInput && (
            <div>
              <div className="text-xl text-black mb-4">Attach New Slip</div>
              <div>
                <input type="file" onChange={(e) => setcheque2(e.target.cheque2)} />
              </div>
            </div>
          )}
          <br />
          <div className='flex justify-between mt-8'>
            <SubmitButton onClick={handleUpload}>Submit</SubmitButton>
            {!showNoticeInput && (
              <AddButton onClick={handleAddCheque}>Add Cheque</AddButton>
            )}
          </div>
        </div>
      </div>
      <br />
      <br />
      < br />
      <StaffFooter />
    </div>
  );
};

export default ChequeSubmit;
