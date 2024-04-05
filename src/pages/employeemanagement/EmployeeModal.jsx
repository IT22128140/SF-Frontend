// eslint-disable-next-line no-unused-vars
import { useState, useEffect, useRef } from "react";
import { MdOutlineCancel } from "react-icons/md";
import PropTypes from "prop-types";
import QRCode from "qrcode.react";

const EmployeeModal = ({ employee, onClose }) => {

  const qrCode = employee._id;

  const download = () => {
    const qrCodeUrl = document.getElementById("qrCode").toDataURL("image/png").replace("image/png", "image/octet-stream");  
    console.log(qrCodeUrl);
    let aEl = document.createElement("a");
    aEl.href = qrCodeUrl;
    aEl.download = "qr_code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-auto bg-white rounded-xl p-4 flex flex-col relative"
      >
        <h2 className="text-3xl text-red-700 pl-4 pt-2">User Profile</h2>
        <MdOutlineCancel
          className="absolute top-6 right-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <div
          key={employee._id}
          className="border-2 border-gray-500 rounded-lg px-4 py-2 mt-6 ml-4 mr-4 mb-4 relative hover:shadow-xl"
        >
          <h2 className="w-full px-4 py-1 bg-red-300 rounded-lg">
            {employee._id} <br />
            Full Name : {employee.firstName} &nbsp;
            {employee.lastName}
          </h2>
          <h4 className="my-2 text-gray-500"></h4>
          <div className="flex justify-start items-center gap-x-2">
            NIC : {employee.nic} <br />
            Address : {employee.address} <br />
            Email : {employee.email} <br />
            Contact No : {employee.contactNo} <br />
            Date of Birth : {employee.dateOfBirth} <br />
            Age : {employee.age} <br />
            Occupation : {employee.occupation} <br />
            Basic Salary : {employee.basicSalary} <br />
            Admission Date : {employee.admissionDate} <br />
          </div>

          <div>
            <div
              style={{
                height: "auto",
                margin: "0 auto",
                maxWidth: 64,
                width: "100%",
              }}
            >

              {qrCode && 
                <QRCode
                id='qrCode'
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={qrCode}
              />}

              <button onClick={download}>Download</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EmployeeModal.propTypes = {
  employee: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default EmployeeModal;
