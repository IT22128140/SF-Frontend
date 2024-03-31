//import React from 'react'
import Logo from "./NavbarLogo.jsx";
import DropDownButton from "../button/DropDownButton.jsx";
import { mens, womens, bags } from "../../utils/arrays.js";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";

const CustomerNavbar = () => {
  return (
    <div className="flex h-[70px] flex-row justify-between bg-white w-[100%] mt-3 pb-3 shadow-md">
      <Logo />
      <div className="flex flex-row p-5">
        <DropDownButton title="Men's" options={mens} />
        <DropDownButton title="Women's" options={womens} />
        <DropDownButton title="Bags" options={bags} />
      </div>
      <div className="flex flex-row h-[70px] justify-between">
        <div className="flex flex-row p-3.5">
          <input className=" h-10 border-2 border-orange-600 rounded-l-xl "></input>
          <button className=" bg-orange-600 text-white h-10 w-10 rounded-r-xl">
            <CiSearch className=" text-[35px] " />
          </button>
        </div>
        <button>
          <MdOutlineShoppingCart className="text-[50px] text-orange-600" />
        </button>
        <div className="group relative cursor-pointer py-2">
          <div className="flex items-center">
            <a className="menu-hover lg:mx-4">
              <IoPersonCircleOutline className="text-[50px] text-orange-600" />
            </a>
          </div>
          <div className="invisible absolute z-50 flex w-full flex-col bg-bgc rounded-md text-ternary shadow-xl group-hover:visible">
            <a className="rounded-md p-2 my-2 block font-semibold text-ternary  hover:bg-primary">
                Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerNavbar;
