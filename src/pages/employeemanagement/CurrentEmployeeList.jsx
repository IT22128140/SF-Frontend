// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner.jsx";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import AddButton from "../../components/button2/AddButton.jsx";
import ViewButton from "../../components/button2/ViewButton.jsx";
import EditButton from "../../components/button2/EditButton.jsx";
import DeleteButton from "../../components/button2/DeleteButton.jsx";
import SalaryButton from "../../components/button2/SalaryButton.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import TableView from "../../components/table/TableView";
import EmployeeModal from "./EmployeeModal.jsx";
import DeleteEmployee from "./DeleteEmployee.jsx";

const CurrentEmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [data, setData] = useState([]);

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
    "Operations",
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/employee")
      .then((res) => {
        setEmployees(res.data.data);
        const set = res.data.data.map(obj => ({name:obj.employeeID, _id:obj._id}));
        setData(set);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative">
      <HrNavbar cel={true} />

      <div className="p-4">
          <h1 className="text-6xl mx-[1.75%] my-8 font-Philosopher text-ternary font-semibold">
            Current Employees&rsquo; List
          </h1>
        <SearchBar data={data} navigate={`/EmployeeModal`} placeholder={"Enter Employee ID Here"} />

        <div className="border mx-[1.75%] border-black rounded-lg w-fit p-4 my-10 flex flex-row">
          <h1 className="text-2xl font-BreeSerif text-ternary mr-10">
            Add New Employees
          </h1>
          <Link to="/employees/AddEmployee">
            <AddButton />
          </Link>
        </div>

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
                    <div className="flex justify-center gap-x-4">
                      <ViewButton
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setShowModal(true);
                        }}
                      />
                      <Link to={`/employees/EditEmployee/${employee._id}`}>
                        <EditButton />
                      </Link>
                      <DeleteButton
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setShowDelete(true);
                        }}
                      />
                      <Link to={"#"}>
                        <SalaryButton />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        </div>

        {showModal && (
          <EmployeeModal
            employee={selectedEmployee}
            onClose={() => setShowModal(false)}
          />
        )}

        {showDelete && (
          <DeleteEmployee
            id={selectedEmployee._id}
            onClose={() => setShowDelete(false)}
          />
        )}
      </div>

      <StaffFooter />
    </div>
  );
};

export default CurrentEmployeeList;
