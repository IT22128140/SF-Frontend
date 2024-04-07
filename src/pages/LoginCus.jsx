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
          placeholder="Email Address"
        ></input>
        <input
          className=" mt-4 w-[100%] p-3 border-gray-200 rounded-md border-2"
          type="text"
          placeholder="Password"
        ></input>
        
        <button className="mt-8 w-[100%] p-3 bg-orange-600 text-white rounded-md">
          Login
        </button>
        <br />
        <hr className="h-[2px] bg-gray-200 rounded-xl "></hr> <br />
        <br />
        <Link className="mb-2 font-semibold text-blue-500 text-decoration-line: underline" to="/RegisCus">or Register</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
