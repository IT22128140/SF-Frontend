import React from "react";
import { useEffect,useState } from "react";
import NavbarButton from "../NavbarButton";
import NavbarLogo from "../NavbarLogo";
import NavbarUserProfile from "../NavbarUserProfile";
import PropTypes from "prop-types";
import axios from "axios";

const PMHeader = (props) => {

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
          url={"/Process_Manager"}
        />
      </div>

      <div className="flex flex-row bg-bgc h-fit mb-5 shadow-md">
        <NavbarButton active={props.home} button={"Home"} url={"/Process_Manager"} />
        <NavbarButton active={props.rrm} button={"Requesting Raw Materials"} url={"/rmRequests/create"}/>
        <NavbarButton active={props.rmr} button={"Raw Material Requests"} url={"/RawmRequests"} />
        <NavbarButton active={props.dfl} button={"Distribution for Lines"} url={"/rmDistributes/create"} />
        <NavbarButton active={props.drm} button={"Raw Material Distribution"} url={"/RawmDistributes"} />
        <NavbarButton active={props.emp} button={"Employee Performance"} url={"/EmployeePerformance"} />
        <NavbarButton active={props.ger} button={"Performance Reports"} url={"/empPerformances/create"} />
        <NavbarButton active={props.qr} button={"Quality Review"} url={"/sfProduct"} />
      </div>
    </div>
  );
};

PMHeader.propTypes = {
  home: PropTypes.bool,
  rrm: PropTypes.bool,
  rmr: PropTypes.bool,
  dfl: PropTypes.bool,
  drm: PropTypes.bool,
  emp: PropTypes.bool,
  ger: PropTypes.bool,
  qr: PropTypes.bool,
};


export default PMHeader;