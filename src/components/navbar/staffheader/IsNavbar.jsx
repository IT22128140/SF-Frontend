import React,{useEffect,useState} from 'react';
import NavbarButton from "../NavbarButton";
import NavbarLogo from "../NavbarLogo";
import NavbarUserProfile from "../NavbarUserProfile";
import PropTypes from "prop-types";
import axios from 'axios';

const IsNavbar = (props) => {

  
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
      <div className="flex flex-row justify-between pb-3 mt-3 bg-white h-fit ">{/* Increased padding and added rounded corners */}
       <NavbarLogo />
     
        <NavbarUserProfile
           source={"emp.png"}
           username={profileInfo.FirstName + " " + profileInfo.LastName}
           url={"/Stock_Manager"}
        />
      </div>

      <div className="flex flex-row mt-3 rounded-lg shadow-lg bg-bgc"> {/* Increased shadow and added rounded corners */}
        <NavbarButton active={props.Ishome} button={"Home"} url={"/Stock_Manager"} />
        <NavbarButton active={props.sd} button={"Supplier details"} url={"/SupplierDetails"} />
        <NavbarButton active={props.RmR} button={"Raw material request"} url={"/RMRequests"} />
        <NavbarButton active={props.MpR} button={"Machine part request"} url={"/shortages/view"} />
        <NavbarButton active={props.RpS} button={"Raw material stock"} url={"/RawMaterialStock"} />
        <NavbarButton active={props.MpS} button={"Machine part stock"} url={"/MachinePartStock"} />
        <NavbarButton active={props.FFR} button={"Fulfilled RM Requests"} url={"/Fullfillrequset"} />
      </div>
    </div>
  );
};

IsNavbar.propTypes = {
  Ishome: PropTypes.bool,
  sd: PropTypes.bool,
  RmR: PropTypes.bool,
  MpR: PropTypes.bool,
  RpS: PropTypes.bool,
  MpS: PropTypes.bool,
  FFR: PropTypes.bool,
};

export default IsNavbar;
