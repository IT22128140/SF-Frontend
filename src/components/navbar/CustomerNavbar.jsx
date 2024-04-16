//import React from 'react'
import Logo from "./NavbarLogo.jsx";
import DropDownButton from "../button/DropDownButton.jsx";
import { mens, womens, kids, Unisex } from "../../utils/arrays.js";
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
        <DropDownButton title="Kids" options={kids} />
        <DropDownButton title="Unisex" options={Unisex}  />
      </div>
      <div className="flex flex-row h-[70px] justify-between">
        <Search />
        <Link to="/Cart">
          <MdOutlineShoppingCart className="text-[50px] text-primary mt-2 lg:ml-4" />
        </Link>
        <div className="group relative cursor-pointer py-2">
          <div className="flex items-center">
              <IoPersonCircleOutline className=" menu-hover lg:mx-4 text-[50px] text-primary" />
          </div>
          <div className="invisible absolute z-50 flex w-full flex-col bg-bgc rounded-md text-ternary shadow-xl group-hover:visible">
            <Link className="rounded-md p-2 my-2 block font-semibold text-ternary  hover:bg-primary">
              Profile
            </Link>
            <Link className="rounded-md p-2 my-2 block font-semibold text-ternary  hover:bg-primary" to="/Orders">
              Orders
            </Link>
            <Link className="rounded-md p-2 my-2 block font-semibold text-ternary  hover:bg-primary" to="/Addresses">
              Addresses
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
