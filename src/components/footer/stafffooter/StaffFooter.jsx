// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const StaffFooter = () => {
  return (
    <div className="flex flex-col w-full left-0 right-0 bottom-0 bg-white">
      <hr />

      <div className="flex flex-row justify-center p-4">
        <Link
          to="#"
          className="text-sm text-gray-500 hover:text-gray-800 mr-6 font-BreeSerif"
        >
          Home
        </Link>
        <Link
          to="#"
          className="text-sm text-gray-500 hover:text-gray-800 mr-6 font-BreeSerif"
        >
          FAQs
        </Link>
        <Link
          to="#"
          className="text-sm text-gray-500 hover:text-gray-800 mr-6 font-BreeSerif"
        >
          Reports
        </Link>
        <Link
          to="#"
          className="text-sm text-gray-500 hover:text-gray-800 mr-6 font-BreeSerif"
        >
          About Us
        </Link>
      </div>

      <hr />

      <div className="flex flex-row justify-center items-center p-4">
        <p className="text-sm text-gray-500 font-BreeSerif">
          &copy;2022 Serendib Fashions LTD.
        </p>
      </div>
    </div>
  );
};

export default StaffFooter;
