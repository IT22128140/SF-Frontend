import NavbarButton from "../NavbarButton";
import NavbarLogo from "../NavbarLogo";
import NavbarUserProfile from "../NavbarUserProfile";
import PropTypes from "prop-types";

const StoreNavbar = (props) => {
  return (
    <div className="">
      <div className="flex h-fit flex-row justify-between bg-white mt-3 pb-3 ">
        <NavbarLogo />
        <NavbarUserProfile
          source={"../Logo1.png"}
          username={"Store manager"}
        />
      </div>

      <div className="flex flex-row bg-bgc h-fit shadow-md">
        <NavbarButton active={props.home} button={"Home"} url={""} />
        <NavbarButton
          active={props.cel}
          button={"Ongoing Orders"}
          url={"/OngoingOrders"}
        />
        {/* <NavbarButton active={props.rel} button={"Resigned Employees' List"} url={"#"} />
        <NavbarButton active={props.fel} button={"Fired Employees' List"} url={"#"} />
        <NavbarButton active={props.att} button={"Attendance"} url={"#"} />
        <NavbarButton active={props.sal} button={"Salary"} url={"#"} /> */}
      </div>
    </div>
  );
};

StoreNavbar.propTypes = {
  home: PropTypes.bool,
  cel: PropTypes.bool,
  rel: PropTypes.bool,
  fel: PropTypes.bool,
  att: PropTypes.bool,
  sal: PropTypes.bool,
};


export default StoreNavbar;
