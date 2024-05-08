import React, { useState } from "react";
import axios from "axios";
import NavbarLogo from "../components/navbar/NavbarLogo";
import Footer from "../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";

const emailAddressPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function Login() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
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
    console.log(emailAddress, password);

    setErrors(newErrors);

    try {
      const result = await axios.post("http://localhost:5555/LoginCus", { emailAddress, password });
      console.log(result);
      if (result.data === "Success") {
          navigate("/home");
      } else {
          navigate("/LoginCus");
          alert("Please Check Your Email and Password");
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
          {errors.emailAddress && <p className="text-red-500">{errors.emailAddress}</p>}
          <input
            className="mt-4 w-[100%] p-3 border-gray-200 rounded-md border-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <button type="submit" className="mt-8 w-[100%] p-3 bg-orange-600 text-white rounded-md">
            Login
          </button>
        </form>
        <br />
        <hr className="h-[2px] bg-gray-200 rounded-xl "></hr>
        <br />
        <Link className="mb-2 font-semibold text-blue-500 text-decoration-line: underline" to="/RegisCus">
          or Register
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Login;