import React, { useState } from "react";
import axios from "axios";
import NavbarLogo from "../components/navbar/NavbarLogo";
import Footer from "../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!email) {
      newErrors.email = "Email address is required";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); // Clear the errors state if there are no errors

    axios
      .post("http://localhost:5555/LoginCus", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        } else {
          navigate("/pages/RegisCus");
          alert("You are not registered to this service");
        }
      })
      .catch((err) => console.log(err));
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <input
            className="mt-4 w-[100%] p-3 border-gray-200 rounded-md border-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <button className="mt-8 w-[100%] p-3 bg-orange-600 text-white rounded-md" onClick={handleSubmit}>
            Login
          </button>
        </form>
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