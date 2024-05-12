import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/footer/Footer.jsx";
import { Link } from "react-router-dom";

const Profile =() => {
  const [profileInfo, setProfileInfo] = useState({
    FirstName: '',
    LastName: '',
    emailAddress: '',
    phoneNumber: '',
    password: '',
  });


  useEffect(() => {

        const token = sessionStorage.getItem("token");
        axios.get(`http://localhost:5555/ProfileCus/${token}`).then((response) => {
          setProfileInfo(response.data);
        }).catch((error) => {
          console.error("Error fetching profile information:", error);
        });
      }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="p-2 mb-2 rounded-lg w-1/6 pr-2">
        <img src="emp.png" alt="Logo 1" />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md mb-4">
        <h1 className="text-4xl font-bold mb-4 text-center">CUSTOMER DETAILS</h1>
        <div className="flex flex-wrap">
          <div className="bg-primary p-2 mb-2 w-1/2 pr-2">
            <p>First Name</p>
          </div>
          <div className="bg-bgc p-2 mb-2 w-1/2 pr-2">
            <p>{profileInfo.FirstName}</p>
          </div>
          <div className="bg-primary p-2 mb-2 w-1/2 pr-2">
            <p>Last Name</p>
          </div>
          <div className="bg-bgc p-2 mb-2 w-1/2 pr-2">
            <p>{profileInfo.LastName}</p>
          </div>
          <div className="bg-primary p-2 mb-2 w-1/2 pr-2">
            <p>Email Address</p>
          </div>
          <div className="bg-bgc p-2 mb-2 w-1/2 pr-2">
            <p>{profileInfo.emailAddress}</p>
          </div>
          <div className="bg-primary p-2 mb-2 w-1/2 pr-2">
            <p>Phone Number</p>
          </div>
          <div className="bg-bgc p-2 mb-2 w-1/2 pr-2">
            <p>{profileInfo.phoneNumber}</p>
          </div>
          <div className="bg-primary p-2 mb-2 w-1/2 pr-2">
            <p>Password</p>
          </div>
          <div className="bg-bgc p-2 mb-2 w-1/2 pr-2">
            <p>{profileInfo.password}</p>
          </div>
        </div>
      </div>
      <Link to="/EditProfileCus">
        <button className="bg-ternary text-white font-bold py-2 px-8 rounded">
          EDIT
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Profile;