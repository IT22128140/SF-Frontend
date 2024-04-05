//import React from 'react'
import PropTypes from "prop-types";
import { LuChevronDown } from "react-icons/lu";

const DropDownButton = (props) => {
  return (
    <div className="group relative cursor-pointer">
      <div className="flex items-center justify-between space-x-5 px-4">
        <a className=" text-base font-medium text-ternary lg:mx-4 font-BreeSerif">
          {props.title}
        </a>
        <LuChevronDown />
      </div>
      <div className="invisible absolute z-50 flex w-full flex-col bg-bgc rounded-md text-ternary shadow-xl group-hover:visible">

      {props.options.map((opt) => (
        <a key={opt.id} className="rounded-md p-2 my-2 block font-semibold text-ternary hover:bg-primary hover:text-bgc" href={props.link}>
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
