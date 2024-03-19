// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex flex-row w-[25rem]">
          <img
            src="/Logo1.png"
            alt="logo"
            className="w-[4rem] h-[4rem] ml-[1rem] mr-[2rem]"
          />
          <img src="/Logo2.png" alt="logo" className="w-[19rem] " />
      </Link>
    </div>
  );
};

export default Logo;
