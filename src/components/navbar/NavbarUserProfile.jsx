// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const NavbarUserProfile = (props) => {
  return (
    <div className="flex flex-row w-fit mr-2">
      <div className="flex flex-col items-end pr-5">
      <p className="font-BreeSerif mb-2 text-ternary">{props.username}</p>
      <button className=" bg-primary w-fit p-2 px-4 font-BreeSerif text-white rounded-3xl">Logout</button>
      </div>
      <img src={props.source} className=" w-[4rem] h-[4rem] "></img>
    </div>
  );
};

NavbarUserProfile.propTypes = {
  source: PropTypes.string,
  username: PropTypes.string,
};

export default NavbarUserProfile;
