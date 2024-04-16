// eslint-disable-next-line no-unused-vars
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import PropTypes from "prop-types";

const RejectButton = ({ onclick, className }) => {
  return (
    <button
      onClick={onclick}
      className={`flex items-center justify-betweenh-fit w-fit p-1.5 font-BreeSerif text-md bg-red-700 text-white rounded-lg shadow-md  ${className}`}
    >
      <MdOutlineCancel className="text-xl" />
      <span className="px-2">Reject</span>
    </button>
  );
};

RejectButton.propTypes = {
  onclick: PropTypes.func,
  className: PropTypes.string,
};

export default RejectButton;
