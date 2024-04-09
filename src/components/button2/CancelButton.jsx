// eslint-disable-next-line no-unused-vars
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import PropTypes from "prop-types";

const CancelButton = ({ onClick }) => {
  return (
    <div>
      <button
        className="border bg-black w-fit h-fit p-1.5 rounded-lg text-white font-BreeSerif text-lg shadow-md"
        onClick={onClick}
      >
        <div className="flex flex-row items-center">
          <MdOutlineCancel className="text-xl mr-1" />
          Cancel
        </div>
      </button>
    </div>
  );
};

CancelButton.propTypes = {
  onClick: PropTypes.func,
};

export default CancelButton;
