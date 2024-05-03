import React from "react";
import PropTypes from "prop-types";
import { AiOutlineCheckCircle } from "react-icons/ai";

const ReportButton = ({ onclick, className }) => {
  return (
    <button
      onClick={onclick}
      className={`flex items-center justify-between h-fit w-fit p-1.5 bg-orange-600 text-md text-white rounded-lg shadow-md font-BreeSerif ${className}`}
    >
      <AiOutlineCheckCircle className="mr-2 text-xl" />
      <span className="mr-2">Report</span>
    </button>
  );
};

ReportButton.propTypes = {
  onclick: PropTypes.func,
  className: PropTypes.string,
};

export default ReportButton;