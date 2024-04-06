import React, { Component } from "react";
import NavbarLogo from "../components/navbar/NavbarLogo";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";


class Register extends Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LaststName: "",
      emailAddress: "",
      phoneNumber: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      FirstName: this.state.FirstName,
      LaststName: this.state.LaststName,
      emailAddress: this.state.emailAddress,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      password2: this.state.password2
    };

    console.log(newUser);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="flex flex-col items-center select-none">
        <NavbarLogo />
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="text-center mt-">
              <h4 className="text-3xl font-bold mb-4">CUSTOMER REGISTRATION FORM</h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="mb-4">
              <p className="text-black-600 mb-4">First Name </p>
                <input
                  onChange={this.onChange}
                  value={this.state.FirstName}
                  error={errors.FirstName}
                  id="FirstName"
                  type="text"
                  placeholder="First Name"
                  className="mt-0 w-[100%] p-3 border-gray-300 rounded-md border-2"
                />
              </div>
              <div className="mb-4">
              <p className="text-black-600 mb-4">Last Name </p>
                <input
                  onChange={this.onChange}
                  value={this.state.LastName}
                  error={errors.name}
                  id="LastName"
                  type="text"
                  placeholder="Last Name"
                  className="mt-0 w-[100%] p-3 border-gray-300 rounded-md border-2"
                />
              </div>
              <div className="mb-4">
              <p className="text-black-600 mb-4">Email Address </p>
                <input
                  onChange={this.onChange}
                  value={this.state.emailAddress}
                  error={errors.emailAddress}
                  id="emailAddress"
                  type="email"
                  placeholder="Email Address"
                  className="mt-0 w-[100%] p-3 border-gray-300 rounded-md border-2"
                />
              </div>
              <div className="mb-4">
              <p className="text-black-600 mb-4">Phone Number </p>
                <input
                  onChange={this.onChange}
                  value={this.state.phoneNumber}
                  error={errors.phoneNumber}
                  id="phoneNumber"
                  type="phone Number"
                  placeholder="Phone Number"
                  className="mt-0 w-[100%] p-3 border-gray-300 rounded-md border-2"
                />
              </div>
              <div className="mb-4">
              <p className="text-black-600 mb-4">Password </p>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="mt-0 w-[100%] p-3 border-gray-300 rounded-md border-2"
                />
              </div>
              <div className="mb-4">
              <p className="text-black-600 mb-4">Re-Type Password</p>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  placeholder="Re-Type Password"
                  className="mt-0 w-[100%] p-3 border-gray-300 rounded-md border-2"
                />
              </div>
              <div className="text-center">
                <button
                  
                  type="submit"
                  className="mt-3 w-[100%] p-3 bg-orange-600 text-white rounded-md"
                >
                  
                </button>
                <p className="text-gray-600 mb-4">Already have an account? <Link to="/LoginCus" className="text-blue-500">Log in</Link></p>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;
