// eslint-disable-next-line no-unused-vars
import React from "react";
// import { Link } from "react-router-dom";
// import { IoPersonCircleOutline } from "react-icons/io5";
import NavbarButton from "../NavbarButton";
import NavbarLogo from "../NavbarLogo";
import NavbarUserProfile from "../NavbarUserProfile";
import PropTypes from "prop-types";

const HrNavbar = (props) => {
  return (
    <div className="">
      <div className="flex h-fit flex-row justify-between bg-white mt-3 pb-3 ">
        <NavbarLogo />
        <NavbarUserProfile
          source={"../../Logo1.png"}
          username={"Maintenance Manager"}
        />
      </div>

      <div className="flex flex-row bg-bgc h-fit shadow-md">
        <NavbarButton active={props.home} button={"Home"} url={"/repairs"} />
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
};


export default HrNavbar;
