// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
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
import TableView from "../../components/table/TableView";
import EmployeeModal from "./EmployeeModal.jsx";
import DeleteEmployee from "./DeleteEmployee.jsx";
import { CiSearch } from "react-icons/ci";


const CurrentEmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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
    "Operations",
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
      .get("http://localhost:5555/employee")
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

  // function handleSearchClick(employee) {
  //   setSelectedEmployee(employee);
  //   setShowModal(true);
  //   const history = useHistory();
  //   history.push('/EmployeeModal');
  // }

  return (
    <div className='w-full h-full bg-fixed bg-no-repeat bg-bgimg' style={{ backgroundPosition:'top right', backgroundSize:'cover' }}>
      <HrNavbar cel={true} />

      <div className="p-4">
        <center>
          <h1 className="text-6xl mx-[1.75%] my-8 font-Philosopher text-ternary font-semibold">
            Current Employees&rsquo; List
          </h1>
        </center>

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

        <div className="border mx-[1.75%] border-black rounded-lg w-fit p-4 my-10 flex flex-row bg-white">
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
                      <Link to={`/GenerateSalary/${employee._id}`}>
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
