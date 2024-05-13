// eslint-disable-next-line no-unused-vars
import React from "react";
// import { Link } from "react-router-dom";
// import { IoPersonCircleOutline } from "react-icons/io5";
import NavbarButton from "../NavbarButton";
import NavbarLogo from "../NavbarLogo";
import NavbarUserProfile from "../NavbarUserProfile";
import PropTypes from "prop-types";

const QENavbar = (props) => {
  return (
    <div className="">
      <div className="flex h-fit flex-row justify-between bg-white mt-3 pb-3 ">
      <NavbarLogo />
        <NavbarUserProfile
          source={"../../Logo1.png"}
          username={"Quality Control Manager"}
        />
      </div>

      <div className="flex flex-row bg-bgc h-fit shadow-md">
        <NavbarButton active={props.home} button={"Home"} url={"#"} />
        <NavbarButton active={props.rel} button={"Review Requst"} url={"/qualityControl/reviewRequest"} />
        <NavbarButton active={props.fel} button={"Pending Review"} url={"/qualityControl/reviewRequest/pendingRequest"} />
        <NavbarButton active={props.sal} button={"Review Report"} url={"/qualityControl/reviewReport"} />
        <NavbarButton active={props.att} button={"Release Product"} url={"/qualityControl/releaseProduct"} />
        <NavbarButton active={props.sal} button={"Daily Note"} url={"/qualityControl/releaseProduct"} />
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