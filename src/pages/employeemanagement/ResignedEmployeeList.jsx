// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner.jsx";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import TableView from "../../components/table/TableView";

const ResignedEmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  const headers = [
    "Index",
    "Employee ID",
    "First Name",
    "Last Name",
    "NIC",
    "Address",
    "Email",
    "Contact No",
    "Date Of Birth",
    "Age",
    "Occupation",
    "Basic Salary",
    "Admission Date",
    "Termination Date",
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/employeeStatus/resigned")
      .then((res) => {
        setEmployees(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <HrNavbar rel={true} />

      <div className="p-4">
          <h1 className="text-4xl my-8 font-Philosopher text-ternary font-semibold">
            Resigned Employees&rsquo; List
          </h1>

          <div className="flex justify-center ml-20 mb-10">
        {loading ? (
          <Spinner />
        ) : (
          <table className="w-[95%]">
            <TableView headers={headers} />
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {employee.employeeID}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {employee.firstName}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {employee.lastName}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {employee.nic}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {employee.address}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {employee.email}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {employee.contactNo}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {employee.dateOfBirth.split("T")[0]}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {employee.age}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {employee.occupation}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {employee.basicSalary}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {employee.admissionDate.split("T")[0]}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {employee.updatedAt.split("T")[0]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        </div>
          
      </div>

      <StaffFooter />
    </div>
  );
};

export default ResignedEmployeeList;
