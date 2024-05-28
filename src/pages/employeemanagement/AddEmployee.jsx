// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
// import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import Spinner from "../../components/Spinner.jsx";
import SubmitButton from "../../components/button2/SubmitButton.jsx";
import { idPrefix, occupations } from "../../utils/employeeIdArray.js";
import { enqueueSnackbar } from "notistack";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";

const AddEmployee = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const methods = useForm();
  // const { handleSubmit, register } = methods;

  const [fullId, setFullId] = useState("");
  const [occupation, setOccupation] = useState("");

  const [image, setImage] = useState("");

  const [employee, setEmployee] = useState([]);
  const [maxCount, setMaxCount] = useState(0);

  // const [employeeID, setEmployeeID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [basicSalary, setBasicSalary] = useState("");
  // const [employeeImg, setEmployeeImg] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  // const [count, setCount] = useState(0);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [nicError, setNicError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [employeeImgError, setEmployeeImgError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");
  const [dateOfBirthError, setDateOfBirthError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [occupationError, setOccupationError] = useState("");
  const [basicSalaryError, setBasicSalaryError] = useState("");
  const [admissionDateError, setAdmissionDateError] = useState("");

  const arrayCount = [];

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
    const nicRegex = /^([0-9]{9}[vVxX]|[0-9]{12})$/;
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
      setContactError("Contact number should contain only 9 digits");
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
    const today = new Date();
    const dob = new Date(dateOfBirth);
    setDateOfBirthError("");
    if (dateOfBirth === "") {
      setDateOfBirthError("Date Of Birth is required");
      isValid = false;
    } else if (dob >= today) {
      setDateOfBirthError("Date Of Birth cannot be today or a future day");
      isValid = false;
    }
    return isValid;
  }

  function validateImage(image) {
    let isValid = true;
    setEmployeeImgError("");
    if (image === "") {
      setEmployeeImgError("Employee image is required");
      isValid = false;
    }
    return isValid;
  }

  function calculateAge(dateOfBirth) {
    let today = new Date(employee.createdAt);
    let birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
  }

  function validateAge(age) {
    let age1 = calculateAge(dateOfBirth);
    let isValid = true;
    const ageRegex = /^[0-9]{2}$/;
    setAgeError("");
    if (!ageRegex.test(age)) {
      setAgeError("Age should be only positive");
      isValid = false;
    }
    if (age1 === "") {
      setAgeError("Birthdate is required");
      isValid = false;
    } else if (age1 < 0) {
      setAgeError("Birthdate cannot be in the future");
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
    const salaryRegex = /^[0-9]{5}$/;
    setBasicSalaryError("");
    if (!salaryRegex.test(basicSalary)) {
      setBasicSalaryError("Basic salary should be positive numbers");
      isValid = false;
    }
    if (basicSalary === "") {
      setBasicSalaryError("Basic salary is required");
      isValid = false;
    }
    return isValid;
  }

  function validateAdmissionDate(admissionDate) {
    let isValid = true;
    const today = new Date();
    const add = new Date(admissionDate);
    setAdmissionDateError("");
    if (admissionDate === "") {
      setAdmissionDateError("Admission date is required");
      isValid = false;
    } else if (add > today) {
      setAdmissionDateError("Admission date cannot be future day");
      isValid = false;
    }
    return isValid;
  }

  function generateEmployeeId(e) {
    let maxCount = 0;
    if (employee.length === 0) {
      maxCount = 0;
    } else {
      for (let i = 0; i < employee.length; i++) {
        arrayCount.push(employee[i].count);
      }
      maxCount = Math.max(...arrayCount);
    }
    setMaxCount(maxCount);
    setOccupation(e);
    setFullId(`${idPrefix[e]}${maxCount + 1}`);
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const fileSizeMB = file.size / (1024 * 1024); // Convert bytes to MB
    if (fileSizeMB > 5) {
      alert("Image size should be less than 5MB.");
      return;
    }
    const base64 = await convertToBase64(file);
    setImage(base64);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5555/employee")
      .then((response) => {
        setEmployee(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Error fetching data", { variant: "error" });
      });
  });

  const handleSaveEmployee = (e) => {
    e.preventDefault();
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
    const isValidImage = validateImage(image);

    if (
      isValidFirstName &&
      isValidLastName &&
      isValidNic &&
      isValidAddress &&
      isValidEmail &&
      isValidContactNo &&
      isValidDateOfBirth  &&
      isValidAge &&
      isValidOccupation &&
      isValidBasicSalary &&
      isValidImage &&
      isValidAdmissionDate
    ) {
    
      const data = {
        firstName,
        lastName,
        nic,
        address,
        email,
        contactNo,
        dateOfBirth,
        age,
        basicSalary,
        admissionDate,
      };
      data.occupation = occupation;
      data.employeeID = fullId;
      data.employeeImg = image;
      data.count = maxCount + 1;
      console.log(data);

      setLoading(true);

      axios
        .post("http://localhost:5555/employee", data)
        .then(() => {
          setLoading(false);
          navigate("/employees/CurrentEmployeeList");
          enqueueSnackbar("Employee added successfully", {
            variant: "success",
          });
        })
        .catch((err) => {
          setLoading(false);
          enqueueSnackbar("Error fetching data", { variant: "error" });
          console.log(err);
        });
    }
  };

  return (
    <div
      className="w-full h-full bg-fixed bg-no-repeat bg-bgform"
      style={{ backgroundPosition: "top right", backgroundSize: "cover" }}
    >
      <HrNavbar cel={true} />
      <div className="p-4">
        <center>
          <h1 className="my-8 text-6xl font-semibold font-Philosopher text-ternary">
            New Employee Intergration
          </h1>
        </center>
        {loading ? <Spinner /> : ""}
        {/* <FormProvider {...methods}> */}
        <form onSubmit={handleSaveEmployee}>
          <div className="bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif">
            <center>
              <h3 className="mb-4 text-3xl font-Philosopher text-ternary">
                Personal Information :
              </h3>
            </center>

            <div className="">
              <label htmlFor="firstName">First Name</label>
              <AnimatePresence mode="wait" initial={false}>
                {firstNameError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {firstNameError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                id="firstName"
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                className="w-full p-2 mb-2 border-gray-200 rounded-md border-2"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="lastName">Last Name</label>
              <AnimatePresence mode="wait" initial={false}>
                {lastNameError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {lastNameError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                id="lastName"
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                className="w-full p-2 mb-2 border-gray-200 rounded-md border-2"
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor="nic">NIC</label>
              <AnimatePresence mode="wait" initial={false}>
                {nicError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {nicError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                id="nic"
                type="text"
                placeholder="Enter NIC"
                name="nic"
                className="w-full p-2 mb-2 border-gray-200 rounded-md border-2"
                onChange={(e) => setNic(e.target.value)}
              />
              <label htmlFor="address">Address</label>
              <AnimatePresence mode="wait" initial={false}>
                {addressError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {addressError}
                  </motion.p>
                )}
              </AnimatePresence>
              <textarea
                id="address"
                placeholder="Enter Address"
                name="address"
                // {...register("address", { required: "Address is required" })}
                className="w-full p-2 mb-2 border-gray-200 rounded-md border-2"
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="email">Email</label>
              <AnimatePresence mode="wait" initial={false}>
                {emailError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {emailError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                name="email"
                className="w-full p-2 mb-2 border-gray-200 rounded-md border-2"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="contactNo">Contact No</label>
              <AnimatePresence mode="wait" initial={false}>
                {contactError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {contactError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                id="contactNo"
                type="number"
                placeholder="Enter Contact No"
                name="contactNo"
                className="w-full p-2 mb-2 border-gray-200 rounded-md border-2"
                onChange={(e) => setContactNo(e.target.value)}
              />
              <label htmlFor="dateOfBirth">Date Of Birth</label>
              <AnimatePresence mode="wait" initial={false}>
                {dateOfBirthError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {dateOfBirthError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                id="dateOfBirth"
                type="date"
                placeholder="Enter Date Of Birth"
                name="dateOfBirth"
                className="w-full p-2 mb-2 border-gray-200 rounded-md border-2"
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
              <label htmlFor="age">Age</label>
              <AnimatePresence mode="wait" initial={false}>
                {ageError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {ageError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                id="age"
                type="text"
                placeholder="Enter Age"
                name="age"
                className="w-full p-2 mb-2 border-gray-200 rounded-md border-2"
                onChange={(e) => setAge(e.target.value)}
              />
              <label>Employee Image</label>
              <AnimatePresence mode="wait" initial={false}>
                {employeeImgError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {employeeImgError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                type="file"
                name="cheque1"
                id="cheque1"
                accept=".jpg, .jpeg, .png"
                className="w-full p-2 mb-2 border-gray-200 rounded-md border-2 bg-white"
                onChange={(e) => handleFileUpload(e)}
              />
              <label className="block text-black text-sm font-semi-bold mb-3">
                Image size should be less than 5MB.
              </label>
            </div>
            <center>
              <h3 className="mt-8 mb-4 text-3xl font-Philosopher text-ternary">
                Employee Information :
              </h3>
            </center>

            <div className="">
              <div className="flex flex-col items-start">
                <label htmlFor="occupation">Occupation</label>
                <AnimatePresence mode="wait" initial={false}>
                {occupationError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {occupationError}
                  </motion.p>
                )}
              </AnimatePresence>
                <select
                  id="occupation"
                  name="occupation"
                  onChange={(e) => generateEmployeeId(e.target.value)}
                  className="h-11 w-[100%] p-2 mb-2 border-gray-200 rounded-md border-2"
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
              <label htmlFor="basicSalary">Basic Salary</label>
              <AnimatePresence mode="wait" initial={false}>
                {basicSalaryError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {basicSalaryError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                id="basicSalary"
                type="text"
                placeholder="Enter Basic Salary"
                name="basicSalary"
                className="w-full p-2 mb-2 border-gray-200 rounded-md border-2"
                onChange={(e) => setBasicSalary(e.target.value)}
              />
              <label htmlFor="admissionDate">Admission Date</label>
              <AnimatePresence mode="wait" initial={false}>
                {admissionDateError && (
                  <motion.p className="flex items-center my-1 gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">
                    <MdError />
                    {admissionDateError}
                  </motion.p>
                )}
              </AnimatePresence>
              <input
                id="admissionDate"
                type="date"
                placeholder="Enter Admission Date"
                name="admissionDate"
                className="w-full p-2 mb-2 border-gray-200 rounded-md border-2"
                onChange={(e) => setAdmissionDate(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <SubmitButton />
            </div>
          </div>
        </form>
        {/* </FormProvider> */}
      </div>
      <StaffFooter />
    </div>
  );
};
export default AddEmployee;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
