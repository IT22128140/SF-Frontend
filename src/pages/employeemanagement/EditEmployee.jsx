// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../components/button/BackButton.jsx";
import Spinner from "../../components/Spinner.jsx";
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
  }, [])

  const [fullId, setFullId] = useState("");

  function generateEmployeeId(e) {

    setOccupation(e);
    setFullId(`${idPrefix[e]}${count }`);
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
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Employee</h1>

      {/* <form onSubmit={handleEditEmployee}> */}
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border-2 border-gray-500 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-2 border-gray-500 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">NIC</label>
            <input
              type="text"
              id="lastName"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              className="border-2 border-gray-500 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Address</label>
            <input
              type="text"
              id="lastName"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border-2 border-gray-500 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Email</label>
            <input
              type="text"
              id="lastName"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-500 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Contact No</label>
            <input
              type="text"
              id="lastName"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              className="border-2 border-gray-500 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Date Of Birth</label>
            <input
              type="text"
              id="lastName"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="border-2 border-gray-500 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Age</label>
            <input
              type="text"
              id="lastName"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border-2 border-gray-500 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Occupation</label>
            <select
              className="h-11 w-[80%] p-2 border-gray-200 rounded-md border-2"
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
            <label className="text-xl mr-4 text-gray-500">Basic Salary</label>
            <input
              type="text"
              id="lastName"
              value={basicSalary}
              onChange={(e) => setBasicSalary(e.target.value)}
              className="border-2 border-gray-500 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Admission Date</label>
            <input
              type="text"
              id="lastName"
              value={admissionDate}
              onChange={(e) => setAdmissionDate(e.target.value)}
              className="border-2 border-gray-500 py-2 w-full"
            />
          </div>
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={handleEditEmployee}>
          Submit
        </button>


      {/* </form> */}

    </div>
  );
};

export default EditEmployee;
