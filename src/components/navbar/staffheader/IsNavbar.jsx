import React from "react";
// import { Link } from "react-router-dom";
// import { IoPersonCircleOutline } from "react-icons/io5";
import NavbarButton from "../NavbarButton";
import NavbarLogo from "../NavbarLogo";
import NavbarUserProfile from "../NavbarUserProfile";
import PropTypes from "prop-types";

const IsNavbar = (props) => {
  return (
    <div className="">
      <div className="flex flex-row justify-between pb-3 mt-3 bg-white h-fit ">
        <NavbarLogo />
        <NavbarUserProfile
          source={"../../Logo1.png"}
          username={"inventory manager"}
        />
      </div>

      <div className="flex flex-row shadow-md bg-bgc h-fit">
        <NavbarButton active={props.home} button={"Home"} url={"/HrDashboard"} />
        <NavbarButton active={props.sd} button={"Supplier details"} url={"/SupplierDetails"} />
        <NavbarButton active={props.RmR} button={"Raw material request"} url={"#"} />
        <NavbarButton active={props.MpR} button={"Machine part request"} url={"#"} />
        <NavbarButton active={props.RpS} button={"Raw material stock"} url={"/RawMaterialStock"} />
        <NavbarButton active={props.MpS} button={"Machine part stock"} url={"/MachinePartStock"} />
      </div>
    </div>
  );
};

IsNavbar.propTypes = {
  home: PropTypes.bool,
  sd: PropTypes.bool,
  RmR: PropTypes.bool,
  MpR: PropTypes.bool,
  RpS: PropTypes.bool,
  MpS: PropTypes.bool,
};


export default IsNavbar;