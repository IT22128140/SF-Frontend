import React, { useState } from "react";
import axios from "axios";
import NavbarLogo from "../components/navbar/NavbarLogo";
import Footer from "../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";

const emailAddressPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function Login() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [employeeType, setemployeeType] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!emailAddress) {
      newErrors.emailAddress = "Email address is required";
    } else if (!emailAddressPattern.test(emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    if (!employeeType) {
      newErrors.employeeType = "Employee type is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const login = {
      emailAddress,
      password,
      employeeType,
    };
    console.log(login);

    try {
      const result = await axios.post("http://localhost:5555/LoginEmp", login);

      console.log(result);
      if (result.data) {
        sessionStorage.setItem("token", result.data._id);
        navigate(`/${employeeType}`);
      } else {
        navigate("/LoginEmp");
        alert("Please Check Your Email, Password, and Employee Type");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle error, maybe show a message to the user
    }
  };

  return (
    <div className="flex flex-col items-center select-none">
      <NavbarLogo />
      <div className="flex flex-col items-center shadow-md mt-20 p-12 w-96 rounded-xl">
        <h1 className="text-3xl font-semibold">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="mt-8 w-[100%] p-3 border-gray-200 rounded-md border-2"
            type="text"
            placeholder="Email Address"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          ></input>
          {errors.emailAddress && (
            <p className="text-red-500">{errors.emailAddress}</p>
          )}
          <input
            className="mt-4 w-[100%] p-3 border-gray-200 rounded-md border-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <select
            className="mt-4 w-[100%] p-3 border-gray-200 rounded-md border-2"
            value={employeeType}
            onChange={(e) => setemployeeType(e.target.value)}
          >
            <option hidden>Select Employee type</option>
            <option value="HR_Manager">HR Manager</option>
            <option value="Stock_Manager">Stock Manager</option>
            <option value="Repair_Manager">Repair Manager</option>
            <option value="Process_Manager">Process Manager</option>
            <option value="Quality_Control_Manager">Quality Control Manager</option>
            <option value="Store_Manager">Store Manager</option>
          </select>
        {errors.employeeType && <p className="text-red-500">{errors.employeeType}</p>}
          <button className="mt-8 w-[100%] p-3 bg-orange-600 text-white rounded-md" onClick={handleSubmit}>
            Login
          </button>
        </form>
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