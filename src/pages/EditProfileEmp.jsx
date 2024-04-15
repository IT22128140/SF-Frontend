import React, { useState } from "react";
import Footer from "../components/footer/Footer.jsx";

function EditProfile() {
    const [profileInfo, setProfileInfo] = useState({
      FirstName: 'John',
      LastName: 'Doe',
      emailAddress: 'john.doe@example.com',
      phoneNumber: '555-1234',
      Employeetype: 'Employee type',
      password: '*********'
    });
  

  const handleInputChange = (e, field) => {
    setProfileInfo({ ...profileInfo, [field]: e.target.value });
  };
  const handleSaveProfile = () => {
    // Add code to save profile information
    console.log("Profile information saved:", profileInfo);
};

const handleDeleteProfile = () => {
    // Add code to delete profile
    console.log("Profile deleted");
};



  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-36  pr-36">
      <div className="p-2 mb-2 rounded-lg w-1/30 pr-2">
                <input type="image" src="emp.png" alt="image" />
            </div>
      <div className="bg-white p-8 rounded-lg shadow-md mb-4">
        <h1 className="text-4xl font-bold mb-4 text-center">EDIT PROFILE DETAILS</h1>
        <div className="flex flex-wrap">
          <div className="bg-primary p-2 mb-2  w-1/2 pr-2">
            <p>First Name</p>
          </div>
          <div className="bg-bgc p-2 mb-2  w-1/2 pr-2">
            <input type="text" value={profileInfo.FirstName} onChange={(e) => handleInputChange(e, 'FirstName')} />
          </div>
          <div className="bg-primary p-2 mb-2  w-1/2 pr-2">
            <p>Last Name</p>
          </div>
          <div className="bg-bgc p-2 mb-2  w-1/2 pr-2">
            <input type="text" value={profileInfo.LastName} onChange={(e) => handleInputChange(e, 'LastName')} />
          </div>
          <div className="bg-primary p-2 mb-2  w-1/2 pr-2">
            <p>Email Address</p>
          </div>
          <div className="bg-bgc p-2 mb-2  w-1/2 pr-2">
            <input type="text" value={profileInfo.emailAddress} onChange={(e) => handleInputChange(e, 'emailAddress')} />
          </div>
          <div className="bg-primary p-2 mb-2  w-1/2 pr-2">
            <p>Phone Number</p>
          </div>
          <div className="bg-bgc p-2 mb-2  w-1/2 pr-2">
            <input type="text" value={profileInfo.phoneNumber} onChange={(e) => handleInputChange(e, 'phoneNumber')} />
          </div>
          <div className="bg-primary p-2 mb-2  w-1/2 pr-2">
            <p>Employee Type</p>
          </div>
          <div className="bg-bgc p-2 mb-2 w-1/2 pr-2">
          <select value={profileInfo.Employeetype} onChange={(e) =>  handleInputChange(e, 'Employeetype')} className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option value="HR_Manager">HR Manager</option>
          <option value="Stock_Manager">Stock Manager</option>
          <option value="Repair_Manager">Repair Manager</option>
          <option value="Process_Manager">Process Manager</option>
          <option value="Quality_Control_Manager">Quality Control Manager</option>
          <option value="Store_Manager">Store Manager</option></select>
          </div>
          <div className="bg-primary p-2 mb-2 w-1/2 pr-2">
            <p>Password</p>
          </div>
          <div className="bg-bgc p-2 mb-2  w-1/2 pr-2">
            <input type="password" value={profileInfo.password} onChange={(e) => handleInputChange(e, 'password')} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between">
              <button className="bg-black text-white font-bold py-2 px-8 rounded mt-4"
              onClick={handleSaveProfile} // Add an onClick event handler to call a function for saving
              >SAVE</button>
              <button className="bg-del text-white font-bold py-2 px-8 rounded mt-4"
              onClick={handleDeleteProfile} // Add an onClick event handler to call a function for deleting
              >DELETE</button>
            </div>
            <Footer />
    </div>
  );
}

export default EditProfile;