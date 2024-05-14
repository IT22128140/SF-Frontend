import React from "react";
import NavbarButton from "../NavbarButton";
import NavbarLogo from "../NavbarLogo";
import NavbarUserProfile from "../NavbarUserProfile";
import PropTypes from "prop-types";
import axios from "axios";
import { useState, useEffect } from "react";

const QENavbar = (props) => {

  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if(!token){
      window.location = "/LoginEmp";
    }
    axios.get(`http://localhost:5555/ProfileEmp/${token}`).then((response) => {
      setProfileInfo(response.data);
    }).catch((error) => {
      console.error("Error fetching profile information:", error);
    });
  }
  , []);

  return (
    <div className="">
      <div className="flex h-fit flex-row justify-between bg-white mt-3 pb-3 ">
      <NavbarLogo />
      <NavbarUserProfile
          source={"/emp.png"}
          username={profileInfo.FirstName + " " + profileInfo.LastName}
          url={"/Quality_Control_Manager"}
        />
      </div>

      <div className="flex flex-row bg-bgc h-fit shadow-md">
        <NavbarButton active={props.home} button={"Home"} url={"/Quality_Control_Manager"} />
        <NavbarButton active={props.cel} button={"Review Requst"} url={"/qualityControl/reviewRequest"} />
        <NavbarButton active={props.rel} button={"Pending Review"} url={"/qualityControl/reviewRequest/pendingRequest"} />
        <NavbarButton active={props.fel} button={"Review Report"} url={"/qualityControl/reviewReport"} />
        <NavbarButton active={props.att} button={"Release Product"} url={"/qualityControl/releaseProduct"} />
        
      </div>
    </div>
  );
};

QENavbar.propTypes = {
  home: PropTypes.bool,
  cel: PropTypes.bool,
  rel: PropTypes.bool,
  fel: PropTypes.bool,
  att: PropTypes.bool,
  sal: PropTypes.bool,
};


export default QENavbar;