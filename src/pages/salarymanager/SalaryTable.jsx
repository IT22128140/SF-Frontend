import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TableView from "../../components/table/TableView";
import Spinner from "../../components/Spinner";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter";
import HistoryButton from "../../components/button2/HistoryButton";
import AddButton from "../../components/button2/AddButton";
import EditButton from "../../components/button2/EditButton";

const SalaryTable = () => {
  const [salaryTable, setSalaryTable] = useState([]);
  const [loading, setLoading] = useState(false);

  const headers = [
    "EmployeeID",
    "Employee Name",
    "Basic Salary",
    "Attendance",
    "Over Time",
    "Bonus",
    "Total Amount",
    "Cheque",
    "Date",
    "Notice",
    "Operation",
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/salary")
      .then((response) => {
        console.log(response.data);
        setSalaryTable(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="w-full h-full bg-fixed bg-no-repeat bg-bgimg"
      style={{ backgroundPosition: "top right", backgroundSize: "cover" }}
    >
      <HrNavbar sal={true} />
      <div className="p-4">
        <div className="flex justify-center items-center">
          <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
            Salary List
          </h1>
        </div>
        <Link to={`/SalaryHistory`}>
          <HistoryButton />
        </Link>

        <br />
        <br />
        <table className="min-w-full bg-white">
          <TableView headers={headers} />
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3" className="text-center">
                  <Spinner />
                </td>
              </tr>
            ) : (
              salaryTable.map((salary) => (
                <tr key={salary._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    {salary.firstName} {salary.lastName}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {salary.employeeID}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {salary.basicSalary}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {salary.attendance}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {salary.overtime}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {salary.bonus}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    RS. {salary.totalAmount}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {salary.cheque1 && (
                      <img src={salary.cheque1} alt="cheque" />
                    )}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {salary.date}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {salary.notice}
                  </td>

                  <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-x-4 ml-2 mr-2">
                      <Link to={`/EditSalaryBalance/${salary._id}`}>
                        <EditButton />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <br />

      <StaffFooter />
    </div>
  );
};

export default SalaryTable;
