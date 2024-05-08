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
        <NavbarButton
          active={props.rel}
          button={"Completed Orders"}
          url={"/CompletedOrders"}
        />
      </div>
    </div>
  );
};

StoreNavbar.propTypes = {
  home: PropTypes.bool,
  cel: PropTypes.bool,
  rel: PropTypes.bool,
};


export default StoreNavbar;
