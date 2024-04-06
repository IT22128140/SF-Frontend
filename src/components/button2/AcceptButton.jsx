// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { AiOutlineCheckCircle } from "react-icons/ai";

const AcceptButton = ({ onclick, className }) => {
  return (
    <button
      onClick={onclick}
      className={`flex items-center justify-between h-fit w-fit p-1.5 bg-orange-600 text-md text-white rounded-lg shadow-md font-BreeSerif ${className}`}
    >
      <AiOutlineCheckCircle className="text-xl mr-2" />
      <span className="mr-2">Accept</span>
    </button>
  );
};

AcceptButton.propTypes = {
  onclick: PropTypes.func,
  className: PropTypes.string,
};

export default AcceptButton;
