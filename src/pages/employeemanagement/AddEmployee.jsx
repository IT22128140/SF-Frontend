// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import BackButton from "../../components/button/BackButton.jsx";
import Spinner from "../../components/Spinner.jsx";
import Input from "../../components/form/Input.jsx";
import SubmitButton from "../../components/button2/SubmitButton.jsx";
import { idPrefix, occupations } from "../../utils/employeeIdArray.js";
import { textValidation, emailValidation, contactValidation, nicValidation, numberValidation } from "../../utils/inputValidations.js";

const AddEmployee = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit } = methods;

  const [fullId, setFullId] = useState("");
  const [occupation, setOccupation] = useState("");

  const [employee, setEmployee] = useState([]);
  const [maxCount, setMaxCount] = useState(0);

  const arrayCount = [];

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

  useEffect(() => {
    axios
      .get("http://localhost:5555/employee")
      .then((response) => {
        setEmployee(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleSaveEmployee = (data) => {
    data.occupation = occupation;
    data.employeeID = fullId;
    data.count = maxCount + 1;
    console.log(data);

    setLoading(true);

    axios
      .post("http://localhost:5555/employee", data)
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
          <h1 className="my-8 text-6xl font-semibold font-Philosopher text-ternary">
            New Employee Intergration
          </h1>
        </center>
        {loading ? <Spinner /> : ""}

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleSaveEmployee)}>
            <div className="bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif">
              <center>
                <h3 className="mb-4 text-3xl font-Philosopher text-ternary">
                  Personal Information :
                </h3>
                <div className="">
                  <Input
                    formtype="input"
                    label="First Name"
                    id="firstName"
                    type="text"
                    placeholder="Enter First Name"
                    name="firstName"
                    {...textValidation}
                    validation={{ required: "First Name is required" }}
                  />
                  <Input
                    formtype="input"
                    label="Last Name"
                    id="lastName"
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    {...textValidation}
                    validation={{ required: "Last Name is required" }}
                  />
                  <Input
                    formtype="input"
                    label="NIC"
                    id="nic"
                    type="text"
                    placeholder="Enter NIC"
                    name="nic"
                    {...nicValidation}
                    validation={{ required: "NIC is required" }}
                  />
                  <Input
                    formtype="textarea"
                    label="Address"
                    id="address"
                    type="textarea"
                    placeholder="Enter Address"
                    name="address"
                    validation={{ required: "Address is required" }}
                  />
                  <Input
                    formtype="input"
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    {...emailValidation}
                    validation={{ required: "Email is required" }}
                  />
                  <Input
                    formtype="input"
                    label="Contact No"
                    id="contactNo"
                    type="number"
                    placeholder="Enter Contact No"
                    name="contactNo"
                    {...contactValidation}
                    validation={{ required: "Contact No is required" }}
                  />
                  <Input
                    formtype="input"
                    label="Date Of Birth"
                    id="dateOfBirth"
                    type="date"
                    placeholder="Enter Date Of Birth"
                    name="dateOfBirth"
                    validation={{ required: "Date Of Birth is required" }}
                  />
                  <Input
                    formtype="input"
                    label="Age"
                    id="age"
                    type="number"
                    placeholder="Enter Age"
                    name="age"
                    {...numberValidation}
                    validation={{ required: "Age is required" }}
                  />
                </div>

                <h3 className="mt-8 mb-4 text-3xl font-Philosopher text-ternary">
                  Employee Information :
                </h3>
                <div className="">
                  <div className="flex flex-col items-start">
                    <label className="mb-2 ">Occupation</label>
                    <select
                      className="h-11 w-[100%] p-2 mb-2 border-gray-200 rounded-md border-2"
                      id="occupation"
                      name="occupation"
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
                  <Input
                    formtype="input"
                    label="Basic Salary"
                    id="basicSalary"
                    type="number"
                    placeholder="Enter Basic Salary"
                    name="basicSalary"
                    {...numberValidation}
                    validation={{ required: "Basic Salary is required" }}
                  />
                  <Input
                    formtype="input"
                    label="Admission Date"
                    id="admissionDate"
                    type="date"
                    placeholder="Enter Admission Date"
                    name="admissionDate"
                    validation={{ required: "Admission Date is required" }}
                  />
                </div>

                <div className="mt-8">
                  <SubmitButton />
                </div>
              </center>
            </div>
          </form>
        </FormProvider>
      </div>
      <StaffFooter />
    </div>
  );
};

export default AddEmployee;
