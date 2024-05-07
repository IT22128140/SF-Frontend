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
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";

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

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [nicError, setNicError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");
  const [dateOfBirthError, setDateOfBirthError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [occupationError, setOccupationError] = useState("");
  const [basicSalaryError, setBasicSalaryError] = useState("");
  const [admissionDateError, setAdmissionDateError] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  function validateFirstName(firstName) {
    let isValid = true;
    const nameRegex = /^[a-zA-Z]+$/;
    setFirstNameError("");
    if (!nameRegex.test(firstName)) {
      setFirstNameError("First name should contain only alphabets");
      isValid = false;
    }
    if (firstName === "") {
      setFirstNameError("First name is required");
      isValid = false;
    }
    return isValid;
  }

  function validateLastName(lastName) {
    let isValid = true;
    const nameRegex = /^[a-zA-Z]+$/;
    setLastNameError("");
    if (!nameRegex.test(lastName)) {
      setLastNameError("Last name should contain only alphabets");
      isValid = false;
    }
    if (lastName === "") {
      setLastNameError("Last name is required");
      isValid = false;
    }
    return isValid;
  }

  function validateNic(nic) {
    let isValid = true;
    const nicRegex = /^[0-9]{9}[vVxX]$/ || /^[0-9]{12}$/;
    setNicError("");
    if (!nicRegex.test(nic)) {
      setNicError("Invalid NIC number");
      isValid = false;
    }
    if (nic === "") {
      setNicError("NIC is required");
      isValid = false;
    }
    return isValid;
  }

  function validateAddress(address) {
    let isValid = true;
    setAddressError("");
    if (address === "") {
      setAddressError("Address is required");
      isValid = false;
    }
    return isValid;
  }

  function validateEmail(email) {
    let isValid = true;
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    setEmailError("");
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    }
    if (email === "") {
      setEmailError("Email is required");
      isValid = false;
    }
    return isValid;
  }

  function validateContactNo(contactNo) {
    let isValid = true;
    const contactRegex = /^[0-9]{9}$/;
    setContactError("");
    if (!contactRegex.test(contactNo)) {
      setContactError("Contact number should contain only 10 digits");
      isValid = false;
    }
    if (contactNo === "") {
      setContactError("Contact number is required");
      isValid = false;
    }
    return isValid;
  }

  function validateDateOfBirth(dateOfBirth) {
    let isValid = true;
    setDateOfBirthError("");
    if (dateOfBirth === "") {
      setDateOfBirthError("Date Of Birth is required");
      isValid = false;
    }
    return isValid;
  }

  function validateAge(age) {
    let isValid = true;
    setAgeError("");
    if (age === "") {
      setAgeError("Age is required");
      isValid = false;
    }
    return isValid;
  }

  function validateOccupation(occupation) {
    let isValid = true;
    setOccupationError("");
    if (occupation === "") {
      setOccupationError("Occupation is required");
      isValid = false;
    }
    return isValid;
  }

  function validateBasicSalary(basicSalary) {
    let isValid = true;
    setBasicSalaryError("");
    if (basicSalary === "") {
      setBasicSalaryError("Basic salary is required");
      isValid = false;
    }
    return isValid;
  }

  function validateAdmissionDate(admissionDate) {
    let isValid = true;
    setAdmissionDateError("");
    if (admissionDate === "") {
      setAdmissionDateError("Admission date is required");
      isValid = false;
    }
    return isValid;
  }

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
    event.preventDefault();
    const isValidFirstName = validateFirstName(firstName);
    const isValidLastName = validateLastName(lastName);
    const isValidNic = validateNic(nic);
    const isValidAddress = validateAddress(address);
    const isValidEmail = validateEmail(email);
    const isValidContactNo = validateContactNo(contactNo);
    const isValidDateOfBirth = validateDateOfBirth(dateOfBirth);
    const isValidAge = validateAge(age);
    const isValidOccupation = validateOccupation(occupation);
    const isValidBasicSalary = validateBasicSalary(basicSalary);
    const isValidAdmissionDate = validateAdmissionDate(admissionDate);

    if (
      isValidFirstName &&
      isValidLastName &&
      isValidNic &&
      isValidAddress &&
      isValidEmail &&
      isValidContactNo &&
      isValidDateOfBirth &&
      isValidAge &&
      isValidOccupation &&
      isValidBasicSalary &&
      isValidAdmissionDate
    ) {
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
    } else {
      console.log("Please fill in all the required fields");
    }
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
        <form onSubmit={handleEditEmployee} noValidate>
          <div className="bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif">
            <h3 className="text-3xl mb-4 font-Philosopher text-ternary">
              Personal Information :
            </h3>

            <div className="my-4">
              <label className="text-xl mr-4 text-black">First Name</label>
              <AnimatePresence mode="wait" initial={false}>
                {firstNameError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {firstNameError}
                  </motion.p>
                )}
              </AnimatePresence>
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
              <AnimatePresence mode="wait" initial={false}>
                {lastNameError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {lastNameError}
                  </motion.p>
                )}
              </AnimatePresence>
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
              <AnimatePresence mode="wait" initial={false}>
                {nicError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {nicError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                type="text"
                id="nic"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
              />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-black">Address</label>
              <AnimatePresence mode="wait" initial={false}>
                {addressError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {addressError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
              />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-black">Email</label>
              <AnimatePresence mode="wait" initial={false}>
                {emailError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {emailError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
              />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-black">Contact No</label>
              <AnimatePresence mode="wait" initial={false}>
                {contactError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {contactError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                type="text"
                id="contactNo"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
              />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-black">Date Of Birth</label>
              <AnimatePresence mode="wait" initial={false}>
                {dateOfBirthError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {dateOfBirthError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                type="text"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
              />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-black">Age</label>
              <AnimatePresence mode="wait" initial={false}>
                {ageError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {ageError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                type="text"
                id="age"
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
              <p>Current Occupation: {occupation}</p>
              <AnimatePresence mode="wait" initial={false}>
                {occupationError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {occupationError}
                  </motion.p>
                )}
              </AnimatePresence>
              <select
                className="h-11 text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
                id="occupation"
                name="occupation"
                // value={occupation}
                onChange={(e) => generateEmployeeId(e.target.value)}
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
              <AnimatePresence mode="wait" initial={false}>
                {basicSalaryError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {basicSalaryError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                type="text"
                id="basicSalary"
                value={basicSalary}
                onChange={(e) => setBasicSalary(e.target.value)}
                className="text-xl border border-gray-500 px-2 py-2 w-full rounded-lg text-gray-500"
              />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-black">Admission Date</label>
              <AnimatePresence mode="wait" initial={false}>
                {admissionDateError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {admissionDateError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                type="text"
                id="admissionDate"
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
        </form>
      </div>
      <StaffFooter />
    </div>
  );
};

export default EditEmployee;
