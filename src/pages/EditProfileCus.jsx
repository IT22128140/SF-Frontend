import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/footer/Footer.jsx";

function EditProfile() {
  const [profileInfo, setProfileInfo] = useState({
    FirstName: "",
    LastName: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
  });

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/EditProfileCus`);
        setProfileInfo(response.data);
      } catch (error) {
        console.error("Error fetching profile information:", error);
      }
    };

    fetchProfileInfo();
  }, []);

  const handleInputChange = (e, field) => {
    setProfileInfo((prevProfileInfo) => ({
      ...prevProfileInfo,
      [field]: e.target.value,
    }));
  };

  const handleSaveProfile = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5555/EditProfileCus`,
        profileInfo
      );
      console.log("Profile information saved:", response.data);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const handleDeleteProfile = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5555/EditProfileCus${profileInfo.emailAddress}`
      );
      console.log("Profile deleted:", response.data);
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };
    return (
        <div className="flex flex-col justify-center items-center min-h-screen ">
            <div className="p-2 mb-2 rounded-lg w-1/30 pr-2">
                <input type="image" src="emp.png" alt="image" />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-4">
                <h1 className="text-4xl font-bold mb-4 text-center">EDIT PROFILE DETAILS</h1>
                <div className="flex flex-wrap">
                    <div className="bg-primary p-2 mb-2 w-1/2 pr-2">
                        <p>First Name</p>
                    </div>
                    <div className="bg-bgc p-2 mb-2 w-1/2 pr-2">
                        <input type="text" value={profileInfo.FirstName} onChange={(e) => handleInputChange(e, 'FirstName')} />
                    </div>
                    <div className="bg-primary p-2 mb-2 w-1/2 pr-2">
                        <p>Last Name</p>
                    </div>
                    <div className="bg-bgc p-2 mb-2 w-1/2 pr-2">
                        <input type="text" value={profileInfo.LastName} onChange={(e) => handleInputChange(e, 'LastName')} />
                    </div>
                    <div className="bg-primary p-2 mb-2 w-1/2 pr-2">
                        <p>Email Address</p>
                    </div>
                    <div className="bg-bgc p-2 mb-2 w-1/2 pr-2">
                        <input type="text" value={profileInfo.emailAddress} onChange={(e) => handleInputChange(e, 'emailAddress')} />
                    </div>
                    <div className="bg-primary p-2 mb-2 w-1/2 pr-2">
                        <p>Phone Number</p>
                    </div>
                    <div className="bg-bgc p-2 mb-2 w-1/2 pr-2">
                        <input type="text" value={profileInfo.phoneNumber} onChange={(e) => handleInputChange(e, 'phoneNumber')} />
                    </div>
                    <div className="bg-primary p-2 mb-2 w-1/2 pr-2">
                        <p>Password</p>
                    </div>
                    <div className="bg-bgc p-2 mb-2 w-1/2 pr-2">
                        <input type="password" value={profileInfo.password} onChange={(e) => handleInputChange(e, 'password')} />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-between">
                <button className="bg-black text-white font-bold py-2 px-8 rounded mt-4"
                onClick={handleSaveProfile} 
                >SAVE</button>
                <button className="bg-red text-white font-bold py-2 px-8 rounded mt-4"
                onClick={handleDeleteProfile} 
                >DELETE</button>
            </div>
            <Footer />
        </div>
    );
}

export default EditProfile;