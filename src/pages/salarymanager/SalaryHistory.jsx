import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TableView from "../../components/table/TableView";
import Spinner from "../../components/Spinner";
import ViewButton from "../../components/button2/ViewButton";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter";
import jsPDF from "jspdf";
import "jspdf-autotable";
import DeleteButton from "../../components/button2/DeleteButton";
import { CiSearch } from "react-icons/ci";

const SalaryHistory = () => {
  const [salaryHistory, setSalaryHistory] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchName, setSearchName] = useState("");

  const headers = [
    "EmployeeID",
    "Employee Name",
    "Total Amount",
    "Notice",
    "Date",
    "Operation",
  ];
  const headers2 = [
    "ID",
    "Employee Name",
    "Basic Salary",
    "Total Amount",
    "Notice",
    "Date",
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/salary")
      .then((response) => {
        console.log(response.data);
        setSalaryHistory(response.data);
        setOriginalData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filteredData = originalData.filter((opt) =>
      opt.employeeID.toLowerCase().includes(inputValue)
    );
    setSearchName(e.target.value);
    setSalaryHistory(filteredData);
  };

  const handleGenerateReport = () => {
    const filteredData = originalData.filter((salary) => {
      const salaryDate = new Date(salary.date);
      return (
        salaryDate >= new Date(startDate) && salaryDate <= new Date(endDate)
      );
    });

    // Create PDF
    const doc = new jsPDF();
    const img = new Image();
    const img2 = new Image();

    img.src = "/Logo1.png";
    img2.src = "/Logo2.png";

    img.onload = function () {
      doc.addImage(img2, "PNG", 10, 10, 30, 20);

      doc.addImage(img, "PNG", 170, 10, 30, 20);

      doc.text("Salary Report", 80, 40);
      doc.autoTable({
        head: [headers2],
        body: filteredData.map((salary) => [
          salary.employeeID,
          salary.firstName + " " + salary.lastName,
          salary.basicSalary,
          salary.totalAmount,
          salary.notice,
          salary.date,
        ]),
        startY: 50,
      });
      doc.save("salary_report.pdf");
    };
  };

  return (
    <div className="w-full h-full bg-scroll bg-repeat bg-bgimg">
      <HrNavbar sal={true} />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8 font-Philosopher text-ternary font-semibold">
            Salary List
          </h1>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-row p-3.5 justify-center mb-5">
            <div className=" bg-primary px-5 flex text-white h-10 rounded-l-xl shadow-md">
              <CiSearch className="text-[35px] mt-0.5" />
            </div>
            <input
              className=" h-10 border-2 border-primary rounded-r-xl shadow-md focus:outline-none pl-2"
              value={searchName}
              placeholder="Search..."
              onChange={(e) => handleSearch(e)}
            ></input>
          </div>
          <div>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span className="mx-2">to</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
              onClick={handleGenerateReport}
            >
              Generate Report
            </button>
          </div>
        </div>

        <br />
        <br />
        <table className="min-w-full">
          <TableView headers={headers} />
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3" className="text-center">
                  <Spinner />
                </td>
              </tr>
            ) : (
              salaryHistory.map((salary, index) => (
                <tr key={salary._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    {salary.employeeID}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {salary.firstName} {salary.lastName}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {salary.totalAmount}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {salary.notice}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {salary.date}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-x-4 ml-2 mr-2">
                      <Link to={`/ViewSalary/${salary._id}`}>
                        <ViewButton />
                      </Link>

                      <Link to={`/DeleteSalary/${salary._id}`}>
                        <DeleteButton />
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

export default SalaryHistory;
