// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner.jsx";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import TableView from "../../components/table/TableView";
// import SearchBar from "../../components/SearchBar.jsx";
import { CiSearch } from "react-icons/ci";

const FiredEmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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

  const filteredOptions = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filteredData = employees.filter((opt) =>
      opt.employeeID.toLowerCase().includes(inputValue)
    );
    setKeyword(e.target.value);
    setFilteredData(filteredData);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/employeeStatus/fired")
      .then((res) => {
        setEmployees(res.data.data);
        // const set = res.data.data.map(obj => ({name:obj.employeeID, _id:obj._id}));
        // setData(set);
        setFilteredData(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bgimg' style={{ backgroundPosition: 'top right', backgroundSize:'cover' }}>
      <HrNavbar fel={true} />

      <div className="p-4">
        <center>
          <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
            Fired Employees&rsquo; List
          </h1>
        </center>

        {/* <SearchBar data={data} navigate={``} placeholder={"Enter Employee ID Here"} /> */}
        <div className="flex justify-end mt-4 pr-4 cursor-pointer ">
          <div className="flex flex-row p-3.5">
            <div className="bg-primary text-white h-10 w-8 rounded-l-xl shadow-md">
              <CiSearch className="text-[35px] mt-0.5" />
            </div>
            <div className="bg-primary text-white font-Philosopher p-2 flex items-center h-10 w-[70px]">
              Search
            </div>
            <input
              className="h-10 border-2 border-primary shadow-md focus:outline-none pl-2 rounded-r-xl"
              value={keyword}
              placeholder="Enter Employee ID Here"
              onChange={(e) => filteredOptions(e)}
            ></input>
          </div>
        </div>

        <div className="flex justify-center ml-20 mb-10">
          {loading ? (
            <Spinner />
          ) : (
            <table className="w-[95%] font-BreeSerif bg-white">
              <TableView headers={headers} />
              <tbody>
                {filteredData.map((employee, index) => (
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

export default FiredEmployeeList;
