import React from "react";
import NavbarButton from "../NavbarButton";
import NavbarLogo from "../NavbarLogo";
import NavbarUserProfile from "../NavbarUserProfile";
import PropTypes from "prop-types";

const PMHeader = (props) => {
  return (
    <div className="">
      <div className="flex h-fit flex-row justify-between bg-white mt-3 pb-3 ">
        <NavbarLogo />
        <NavbarUserProfile
          source={"../../Logo1.png"}
          username={"Production manager"}
        />
      </div>

      <div className="flex flex-row bg-bgc h-fit mb-5 shadow-md">
        <NavbarButton active={props.home} button={"Home"} url={"#"} />
        <NavbarButton active={props.rrm} button={"Requesting Raw Materials"} url={"/rmRequests/create"}/>
        <NavbarButton active={props.rmr} button={"Raw Material Requests"} url={"/RawmRequests"} />
        <NavbarButton active={props.dfl} button={"Distribution for Lines"} url={"/rmDistributes/create"} />
        <NavbarButton active={props.drm} button={"Raw Material Distribution"} url={"/RawmDistributes"} />
        <NavbarButton active={props.emp} button={"Employee Performance"} url={"/EmployeePerformance"} />
        <NavbarButton active={props.ger} button={"Performance Reports"} url={"/empPerformances/create"} />
      </div>
    </div>
  );
};

PMHeader.propTypes = {
  home: PropTypes.bool,
  rrm: PropTypes.bool,
  rmr: PropTypes.bool,
  dfl: PropTypes.bool,
  emp: PropTypes.bool,
  ger: PropTypes.bool,
};


export default PMHeader;