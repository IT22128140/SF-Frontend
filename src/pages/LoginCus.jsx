import React, { useState } from "react";
import NavbarLogo from "../components/navbar/NavbarLogo";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = () => {
    // Form validation
    let errors = {};
    if (!email) {
      errors.email = "Email address is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (Object.keys(errors).length === 0) {
      // Add your login logic here
      console.log("Login button clicked");
    } else {
      setErrors(errors);
    }
    // Password length validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Add your login logic here, for example:
    if (email === "example@example.com" && password === "password123") {
      // Successful login logic
      console.log("Login successful!");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center select-none">
      <NavbarLogo />
      <div className="flex flex-col items-center shadow-md mt-20 p-12 w-96 rounded-xl">
        <h1 className="text-3xl font-semibold">Login</h1>
        <input
          className="mt-8 w-[100%] p-3 border-gray-200 rounded-md border-2"
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        <input
          className=" mt-4 w-[100%] p-3 border-gray-200 rounded-md border-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {errors.password && <p className="text-red-500">{errors.password}</p>}
        
        {errors.loginType && <p className="text-red-500">{errors.loginType}</p>}
        <button className="mt-8 w-[100%] p-3 bg-orange-600 text-white rounded-md" onClick={handleLogin}>
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