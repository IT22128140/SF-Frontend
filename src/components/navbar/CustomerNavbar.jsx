//import React from 'react'
import Logo from "./NavbarLogo.jsx";
import DropDownButton from "../button/DropDownButton.jsx";
import { mens, womens, bags } from "../../utils/arrays.js";
// import { CiSearch } from "react-icons/ci";
import Search from "./Search.jsx";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CustomerNavbar = () => {
  return (
    <div className="h-[70px] flex-row justify-between bg-white mt-3 shadow-md hidden md:flex">
      <Logo />
      <div className="flex flex-row p-5">
        <DropDownButton title="Men's" options={mens} />
        <DropDownButton title="Women's" options={womens} />
        <DropDownButton title="Bags" options={bags} />
      </div>
      <div className="flex flex-row h-[70px] justify-between">
        <Search />
        <Link to="/Cart">
          <MdOutlineShoppingCart className="text-[50px] text-orange-600 mt-2 lg:ml-4" />
        </Link>
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
            <a className="rounded-md p-2 my-2 block font-semibold text-ternary  hover:bg-primary">
              Orders
            </a>
            <Link to="/Addresses">
            <a className="rounded-md p-2 my-2 block font-semibold text-ternary  hover:bg-primary">
              Addresses
            </a>
            </Link>
            <a className="rounded-md p-2 my-2 block font-semibold text-ternary  hover:bg-primary">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerNavbar;
