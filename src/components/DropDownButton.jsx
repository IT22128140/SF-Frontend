//import React from 'react'
import PropTypes from "prop-types";
import { LuChevronDown } from "react-icons/lu";

const DropDownButton = (props) => {
  return (
    <div className="group relative cursor-pointer">
      <div className="flex items-center justify-between space-x-5 px-4">
        <a className=" text-base font-medium text-black lg:mx-4">
          {props.title}
        </a>
        <LuChevronDown />
      </div>
      <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 rounded-md text-gray-800 shadow-xl group-hover:visible">

      {props.options.map((opt) => (
        <a key={opt.id} className=" rounded-md p-2 my-2 block border-b border-gray-100 font-semibold text-gray-500 hover:text-white hover:bg-gray-500" href={props.link}>
          {opt.option}
        </a>
      ))}
      </div>
    </div>
  );
};

DropDownButton.propTypes = {
    title: PropTypes.string,
    options: PropTypes.array,
    link: PropTypes.string,
}

export default DropDownButton;
