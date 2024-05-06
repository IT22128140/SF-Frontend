// eslint-disable-next-line no-unused-vars
import React from "react";
import { MdAttachMoney } from "react-icons/md";
// import PropTypes from "prop-types";

const HistoryButton = () => {
  return (
    <div>
      <button className=" flex flex-row items-center text-md justify-between w-fit h-fit p-1.5 rounded-lg text-white bg-orange-600 font-BreeSerif">
        <MdAttachMoney className="text-xl " />
        <span className="mr-2">History</span>
      </button>
    </div>
  );
};

export default HistoryButton;
