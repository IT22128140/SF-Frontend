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
          username={"Human resouce manager"}
        />
      </div>

      <div className="flex flex-row bg-bgc h-fit shadow-md">
        <NavbarButton
          active={props.home}
          button={"Home"}
          url={"/HrDashboard"}
        />
        <NavbarButton
          active={props.cel}
          button={"Current Employees' List"}
          url={"/employees/CurrentEmployeeList"}
        />
        <NavbarButton
          active={props.rel}
          button={"Resigned Employees' List"}
          url={"/resign/ResignEmployeeList"}
        />
        <NavbarButton
          active={props.fel}
          button={"Fired Employees' List"}
          url={"/resign/FiredEmployeeList"}
        />
        <NavbarButton
          active={props.req}
          button={"Termination Pending List"}
          url={"/resign/TerminationPendingList"}
        />
        <NavbarButton active={props.att} button={"Attendance"} url={"#"} />
        <NavbarButton active={props.sal} button={"Salary"} url={"/SalaryTable"} />
      </div>
    </div>
  );
};

HrNavbar.propTypes = {
  home: PropTypes.bool,
  cel: PropTypes.bool,
  rel: PropTypes.bool,
  fel: PropTypes.bool,
  req: PropTypes.bool,
  att: PropTypes.bool,
  sal: PropTypes.bool,
};

export default HrNavbar;
