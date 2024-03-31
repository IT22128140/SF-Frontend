// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex flex-row mt-2 w-full">
          <img
            src="/Logo1.png"
            alt="logo"
            className="w-full h-[3rem] ml-[1rem] mr-[2rem]"
          />
          <img src="/Logo2.png" alt="logo" className="w-[13rem] hidden lg:block" />
      </Link>
    </div>
  );
};

export default Logo;
