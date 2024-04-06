import React from "react";
import NavbarLogo from "../components/navbar/NavbarLogo";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="flex flex-col items-center select-none">
      <NavbarLogo />
      <div className="flex flex-col shadow-[0_0_10px_2px_rgba(0,0,0,0.1)] mt-20 p-12 w-[30rem] rounded-xl">
        <h1 className="text-3xl font-semibold">Login</h1>
        <input
          className="mt-8 w-[100%] p-3 border-gray-200 rounded-md border-2"
          type="text"
          placeholder="Email Address/Phone Number"
        ></input>
        <input
          className=" mt-4 w-[100%] p-3 border-gray-200 rounded-md border-2"
          type="text"
          placeholder="Password"
        ></input>
        <select className=" mt-4 w-[100%] p-3 border-gray-200 rounded-md border-2">
          <option hidden defaultChecked>
            Select login type
          </option>
          <option value="HR_Manager">HR Manager</option>
          <option value="Stock_Manager">Stock Manager</option>
          <option value="Repair_Manager">Repair Manager</option>
          <option value="Process_Manager">Process Manager</option>
          <option value="Quality_Control_Manager">Quality Control Manager</option>
          <option value="Store_Manager">Store Manager</option>
        </select>
        <button className="mt-8 w-[100%] p-3 bg-orange-600 text-white rounded-md">
          Login
        </button>
        <br />
        <hr className="h-[2px] bg-gray-200 rounded-xl "></hr> <br />
        <br />
        <Link className="mb-2 font-semibold text-blue-500 text-decoration-line: underline" to="/RegisEmp">or Register</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
