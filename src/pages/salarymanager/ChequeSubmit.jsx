import { Axios } from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import SubmitButton from "../../components/button2/SubmitButton";
import AddButton from "../../components/button2/AddButton";
import HrNavbar from '../../components/navbar/staffheader/HrNavbar';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import { Link } from "react-router-dom";



const ChequeSubmit = () => {
  const { id } = useParams();
  const [file, setFile] = useState();
  const [showNewSlipInput, setShowNewSlipInput] = useState(false);
  const [notice, setNotice] = useState("");
  const [showNoticeInput, setShowNoticeInput] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);
    


    // Upload file
    Axios.put(`http://localhost:5555/uploads/${id}`, formData)
      .then(res => console.log(res))
      .catch(err => console.log(err));

    // Add notice
    if (notice.trim() !== "") {
      // Handle adding notice logic here
      console.log("Notice added:", notice);
    }
  }

  const handleAddCheque = () => {
    setShowNewSlipInput(true);
    setShowNoticeInput(true);
  }

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
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
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
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              </div>
            </div>
          )}
          <br />
          <div className='flex justify-between mt-8'>
            <Link to={`/SalaryTable`}>
            <SubmitButton onClick={handleUpload}>Submit</SubmitButton>
            </Link>
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
