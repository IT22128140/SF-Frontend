// eslint-disable-next-line no-unused-vars
// import { useState, useEffect, useRef } from "react";
import { MdOutlineCancel } from "react-icons/md";
// import { TbDownload } from "react-icons/tb";
import DownloadButton from "../../components/button2/DownloadButton.jsx";
import PropTypes from "prop-types";
import QRCode from "qrcode.react";

const EmployeeModal = ({ employee, onClose }) => {
  const qrCode = employee._id;

  const download = () => {
    const qrCodeUrl = document
      .getElementById("qrCode")
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeUrl);
    let aEl = document.createElement("a");
    aEl.href = qrCodeUrl;
    aEl.download = "qr_code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  };

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[700px] max-w-full h-auto bg-white rounded-xl p-4 flex flex-col relative"
      >
        <h2 className="text-4xl text-secondary font-Philosopher font-semibold pl-4 pt-2">
          Profile
        </h2>
        <MdOutlineCancel
          className="absolute top-6 right-6 text-3xl text-secondary cursor-pointer"
          onClick={onClose}
        />
        <div
          key={employee._id}
          className="border-2 border-gray-500 rounded-lg px-4 py-2 mt-6 ml-4 mr-4 mb-4 relative hover:shadow-xl"
        >
          <div className="flex flex-row justify-evenly">
            <img
              src="../../../public/emp.png"
              className="w-36 m-4"
              alt="Employee Image"
            />

            <div className="m-4">
              <div
                style={{
                  height: "auto",
                  margin: "0 auto",
                  maxWidth: 64,
                  width: "100%",
                }}
              >
                {qrCode && (
                  <QRCode
                    id="qrCode"
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={qrCode}
                  />
                )}
              </div>

              <div className="mt-4">
                <DownloadButton download={download} />
              </div>
            </div>
          </div>
          <hr className="border-gray-500" />
          <div className="flex flex-col gap-x-2 text-2xl font-BreeSerif p-2">
            <div className="flex flex-row justify-between m-2">
              <label className="mr-4 text-ternary">Full Name :</label>
              <input
                type="text"
                readOnly
                value={employee.firstName + " " + employee.lastName}
                className="border border-gray-500 rounded-lg text-gray-600"
              ></input>
            </div>
            <div className="flex flex-row m-2 justify-between">
              <label className="mr-4 text-ternary">NIC : </label>
              <input
                type="text"
                readOnly
                value={employee.nic}
                className="border border-gray-500 rounded-lg text-gray-600"
              ></input>
            </div>
            <div className="flex flex-row m-2 justify-between">
              <label className="mr-4 text-ternary">Address :</label>
              <input
                type="text"
                readOnly
                value={employee.address}
                className="border border-gray-500 rounded-lg text-gray-600"
              ></input>
            </div>
            <div className="flex flex-row m-2 justify-between">
              <label className="mr-4 text-ternary">Email :</label>
              <input
                type="text"
                readOnly
                value={employee.email}
                className="border border-gray-500 rounded-lg text-gray-600"
              ></input>
            </div>
            <div className="flex flex-row m-2 justify-between">
              <label className="mr-4 text-ternary">Contact No :</label>
              <input
                type="text"
                readOnly
                value={employee.contactNo}
                className="border border-gray-500 rounded-lg text-gray-600"
              ></input>
            </div>
            <div className="flex flex-row m-2 justify-between">
              <label className="mr-4 text-ternary">Date Of Birth :</label>
              <input
                type="text"
                readOnly
                value={employee.dateOfBirth}
                className="border border-gray-500 rounded-lg text-gray-600"
              ></input>
            </div>
            <div className="flex flex-row m-2 justify-between">
              <label className="mr-4 text-ternary">Age :</label>
              <input
                type="text"
                readOnly
                value={employee.age}
                className="border border-gray-500 rounded-lg text-gray-600"
              ></input>
            </div>
            <div className="flex flex-row m-2 justify-between">
              <label className="mr-4 text-ternary">Occupation :</label>
              <input
                type="text"
                readOnly
                value={employee.occupation}
                className="border border-gray-500 rounded-lg text-gray-600"
              ></input>
            </div>
            <div className="flex flex-row m-2 justify-between">
              <label className="mr-4 text-ternary">Basic Salary :</label>
              <input
                type="text"
                readOnly
                value={employee.basicSalary}
                className="border border-gray-500 rounded-lg text-gray-600"
              ></input>
            </div>
            <div className="flex flex-row m-2 justify-between">
              <label className="mr-4 text-ternary">Admission Date :</label>
              <input
                type="text"
                readOnly
                value={employee.admissionDate}
                className="border border-gray-500 rounded-lg text-gray-600"
              ></input>
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
