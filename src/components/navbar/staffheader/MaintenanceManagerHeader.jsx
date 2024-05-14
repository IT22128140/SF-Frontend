// eslint-disable-next-line no-unused-vars
import React,{useEffect,useState} from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
// import { IoPersonCircleOutline } from "react-icons/io5";
import NavbarButton from "../NavbarButton";
import NavbarLogo from "../NavbarLogo";
import NavbarUserProfile from "../NavbarUserProfile";
import PropTypes from "prop-types";


const HrNavbar = (props) => {

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
          url={"/Repair_Manager"}
        />
      </div>

      <div className="flex flex-row bg-bgc h-fit shadow-md">
        <NavbarButton active={props.home} button={"Home"} url={"/Repair_Manager"} />
        <NavbarButton active={props.rr}  button={"Request New Repair"} url={"/repairs/create"} />
        <NavbarButton active={props.r} button={"Repairs"} url={"/repairs/view"} />
        <NavbarButton active={props.mpmp} button={"Machine Parts"} url={"/machineParts/view"} />
        <NavbarButton active={props.sh} button={"Shortages"} url={"/mpshortages/view"} />
        <NavbarButton active={props.rsh} button={"Request Machine Part Shortage"} url={"/mpshortages/create"} />
        <NavbarButton active={props.m} button={"Machines"} url={"/machines/view"} />
        <NavbarButton active={props.am} button={"Add Machines"} url={"/machines/create"} />
        <NavbarButton active={props.mr} button={"Maintenance Report"} url={"/repairs/report"} />
      </div>
    </div>
  );
};

HrNavbar.propTypes = {
  home: PropTypes.bool,
  rr: PropTypes.bool,
  r: PropTypes.bool,
  mpmp: PropTypes.bool,
  sh: PropTypes.bool,
  rsh: PropTypes.bool,
  m: PropTypes.bool,
  am: PropTypes.bool,
  mr: PropTypes.bool,
};


export default HrNavbar;
