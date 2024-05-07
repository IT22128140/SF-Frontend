import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import NavbarLogo from "../components/navbar/NavbarLogo";
import Footer from "../components/footer/Footer";

function Register() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "FirstName":
        setFirstName(value);
        break;
      case "LastName":
        setLastName(value);
        break;
      case "emailAddress":
        setEmailAddress(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "password2":
        setPassword2(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!FirstName || !LastName || !emailAddress || !phoneNumber || !password || !password2) {
      setError("Please fill in all the fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(emailAddress)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password !== password2) {
      setError("Passwords do not match.");
      return;
    }

    const newUser = {
      FirstName,
      LastName,
      emailAddress,
      phoneNumber,
      password
    };

    console.log(newUser);

    axios.post("http://localhost:5555/RegisCus", newUser)
      .then((result) => {
        console.log(result);
        navigate("/pages/LoginCus");
      })
      .catch((err) => console.log(err));
  };


  return (
  <div className="flex flex-col items-center select-none">
    <NavbarLogo />
    <div className="flex justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mt-">
          <h4 className="text-3xl font-bold mb-4">CUSTOMER REGISTRATION FORM</h4>
        </div>
        <form noValidate onSubmit={onSubmit}>
          <div className="mb-4">
            <p className="text-black-600 mb-4">First Name </p>
            <input
              onChange={onChange}
              value={FirstName}
              id="FirstName"
              type="text"
              placeholder="First Name"
              className="mt-0 w-[100%] p-3 border-gray-300 rounded-md border-2"
            />
          </div>
          <div className="mb-4">
            <p className="text-black-600 mb-4">Last Name </p>
            <input
              onChange={onChange}
              value={LastName}
              id="LastName"
              type="text"
              placeholder="Last Name"
              className="mt-0 w-[100%] p-3 border-gray-300 rounded-md border-2"
            />
          </div>
          <div className="mb-4">
            <p className="text-black-600 mb-4">Email Address </p>
            <input
              onChange={onChange}
              value={emailAddress}
              id="emailAddress"
              type="email"
              placeholder="Email Address"
              className="mt-0 w-[100%] p-3 border-gray-300 rounded-md border-2"
            />
          </div>
          <div className="mb-4">
            <p className="text-black-600 mb-4">Phone Number </p>
            <input
              onChange={onChange}
              value={phoneNumber}
              id="phoneNumber"
              type="text"
              placeholder="Phone Number"
              className="mt-0 w-[100%] p-3 border-gray-300 rounded-md border-2"
            />
          </div>
          <div className="mb-4">
            <p className="text-black-600 mb-4">Password </p>
            <input
              onChange={onChange}
              value={password}
              id="password"
              type="password"
              placeholder="Password"
              className="mt-0 w-[100%] p-3 border-gray-300 rounded-md border-2"
            />
          </div>
          <div className="mb-4">
            <p className="text-black-600 mb-4">Re-Type Password</p>
            <input
              onChange={onChange}
              value={password2}
              id="password2"
              type="password"
              placeholder="Re-Type Password"
              className="mt-0 w-[100%] p-3 border-gray-300 rounded-md border-2"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="text-center">
            <button
              type="submit"
              className="mt-3 w-[100%] p-3 bg-orange-600 text-white rounded-md"
            >
              REGISTER
            </button>
            <p className="text-gray-600 mb-4">
              Already have an account?{" "}
              <Link to="/LoginCus" className="text-blue-500">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
    );
  }


export default Register;
