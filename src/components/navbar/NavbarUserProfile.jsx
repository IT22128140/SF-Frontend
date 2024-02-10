// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types"

const NavbarUserProfile = (props) => {
  return (
    <div className="flex flex-col w-32 mr-2">
      <center>
        <img src={props.source} className=" w-[4rem] h-[4rem] "></img>
        <p className="mt-2">{props.username}</p>
      </center>
    </div>
  );
};

NavbarUserProfile.propTypes = {
  source: PropTypes.string,
  username: PropTypes.string,
};

export default NavbarUserProfile;
