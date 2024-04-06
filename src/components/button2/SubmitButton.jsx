// eslint-disable-next-line no-unused-vars
import React from "react";
import { TbUpload } from "react-icons/tb";
import PropTypes from "prop-types";

const SubmitButton = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between w-fit h-fit p-1.5 text-lg font-BreeSerif bg-red-500 text-white rounded-lg shadow-md ${className}`}
    >
      <TbUpload className="text-xl mr-1.5" />
      <span>Submit</span>
    </button>
  );
};

SubmitButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default SubmitButton;
