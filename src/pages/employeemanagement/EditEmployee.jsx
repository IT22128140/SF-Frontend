// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import BackButton from "../../components/button/BackButton.jsx";
import Spinner from "../../components/Spinner.jsx";
import SubmitButton from "../../components/button2/SubmitButton.jsx";
import CancelButton from "../../components/button2/CancelButton.jsx";
import { idPrefix, occupations } from "../../utils/employeeIdArray";

const EditEmployee = () => {
  const [employeeID, setEmployeeID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [basicSalary, setBasicSalary] = useState("");
  const [occupation, setOccupation] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/employee/${id}`)
      .then((response) => {
        const data = response.data;
        setEmployeeID(data.employeeID);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setNic(data.nic);
        setAddress(data.address);
        setEmail(data.email);
        setContactNo(data.contactNo);
        setDateOfBirth(data.dateOfBirth);
        setAge(data.age);
        setBasicSalary(data.basicSalary);
        setOccupation(data.occupation);
        setAdmissionDate(data.admissionDate);
        setCount(data.count);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const [fullId, setFullId] = useState("");

  function generateEmployeeId(e) {
    setOccupation(e);
    setFullId(`${idPrefix[e]}${count}`);
  }

  const handleEditEmployee = () => {
    const data = {
      employeeID,
      firstName,
      lastName,
      nic,
      address,
      email,
      contactNo,
      dateOfBirth,
      age,
      occupation,
      basicSalary,
      admissionDate,
      count,
    };

    data.occupation = occupation;
    data.employeeID = fullId;
    // data.count = maxCount + 1;

    console.log(data);

    setLoading(true);

    axios
      .put(`http://localhost:5555/employee/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/employees/CurrentEmployeeList");
      })
      .catch((err) => {
        setLoading(false);
        // alert("An error occured. Please check the console for more details.");
        console.log(err);
      });
  };

  return (
    <div>
      <HrNavbar cel={true} />
      <div className="p-4">
        <BackButton />
        <center>
          <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
            Edit Employee
          </h1>
        </center>
        {loading ? <Spinner /> : ""}
        <div className="bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif">
          <h3 className="text-3xl mb-4 font-Philosopher text-ternary">
            Personal Information :
          </h3>

          <div className="my-4">
            <label className="text-xl mr-4 text-black">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-black">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-black">NIC</label>
            <input
              type="text"
              id="lastName"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-black">Address</label>
            <input
              type="text"
              id="lastName"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-black">Email</label>
            <input
              type="text"
              id="lastName"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-black">Contact No</label>
            <input
              type="text"
              id="lastName"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-black">Date Of Birth</label>
            <input
              type="text"
              id="lastName"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-black">Age</label>
            <input
              type="text"
              id="lastName"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
            />
          </div>

          <h3 className="text-3xl mt-8 mb-4 font-Philosopher text-ternary">
            Employee Information :
          </h3>

          <div className="my-4">
            <label className="text-xl mr-4 text-black">Occupation</label>
            <select
              className="h-11 text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
              id="occupation"
              name="occupation"
              value={occupation}
              onChange={(e) => generateEmployeeId(e.target.value)}
              // options={occupations}
              // firstOption="Select Occupation"
              // validation={{ required: "Occupation is required" }}
            >
              <option value="" defaultChecked hidden>
                Select Occupation
              </option>
              {occupations.map((opt) => (
                <option key={opt.id} value={opt.value}>
                  {opt.option}
                </option>
              ))}
            </select>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-black">Basic Salary</label>
            <input
              type="text"
              id="lastName"
              value={basicSalary}
              onChange={(e) => setBasicSalary(e.target.value)}
              className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-black">Admission Date</label>
            <input
              type="text"
              id="lastName"
              value={admissionDate}
              onChange={(e) => setAdmissionDate(e.target.value)}
              className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
            />
          </div>

          <div className="flex flex-row justify-evenly items-center mt-10">
            <SubmitButton onClick={handleEditEmployee} />
            <Link to="/employees/CurrentEmployeeList">
              <CancelButton />
            </Link>
          </div>
        </div>
      </div>
      <StaffFooter />
    </div>
  );
};

export default EditEmployee;
