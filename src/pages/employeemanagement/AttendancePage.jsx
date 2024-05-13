// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import Spinner from "../../components/Spinner.jsx";
import Input from "../../components/form/Input.jsx";
import SubmitButton from "../../components/button2/SubmitButton.jsx";
import TableView from "../../components/table/TableView.jsx";
import EmpName from "../../components/EmpName.jsx";
import { CiSearch } from "react-icons/ci";
import html2pdf from "html2pdf.js";

const AttendancePage = () => {
  // const [employees, setEmployees] = useState([]);
  const [date, setDate] = useState("");
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit } = methods;

  const [keyword, setKeyword] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const headers = [
    "Index",
    "Employee ID",
    "Full Name",
    "Arrival Time",
    "Departure Time",
    "Late",
  ];

  const filteredOptions = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filteredData = attendanceData.filter((opt) =>
      opt.generatedEmpId.toLowerCase().includes(inputValue)
    );
    setKeyword(e.target.value);
    setFilteredData(filteredData);
  };

  const onSubmit = (data) => {
    setDate(data.date);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/attendance?date=${date}`)
      .then((res) => {
        setAttendanceData(res.data.data);
        setFilteredData(res.data.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [date]);

  const downloadPDF = () => {
    const opt = {
      margin: 1,
      filename: date+"AttendanceReport.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a3", orientation: "portrait" },
    };
    var element = document.getElementById("attendance");
    html2pdf().from(element).set(opt).save();
    
  };

  return (
    <div
      className="w-full h-full bg-fixed bg-no-repeat bg-bgimg"
      style={{ backgroundPosition: "top right", backgroundSize: "cover" }}
    >
      <HrNavbar att={true} />

      <div className="p-4">
        <center>
          <h1 className="text-6xl mx-[1.75%] my-8 font-Philosopher text-ternary font-semibold" id="header">
            Employee Attendance
          </h1>
        </center>
        <div className="flex flex-row">
          <div className="border mx-[1.75%] border-black rounded-lg w-fit my-8 flex flex-row bg-white">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex fle-row m-8 w-auto">
                  <Input
                    formtype="input"
                    label="Date"
                    id="date"
                    type="date"
                    placeholder="Select Date"
                    name="date"
                    onChange={(e) => setDate(e.target.value)}
                    validation={{ required: "Date is required" }}
                  />

                  <div className="mt-8 ml-10">
                    <SubmitButton title="Submit" />
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>

          <div className="border mx-[1.75%] border-black rounded-lg w-fit my-8 flex flex-row bg-white">
            <h1 className="text-2xl font-BreeSerif text-ternary m-10">
              Generate and Download <br /> Attendance Report
            </h1>
            <button
              type="submit"
              className="w-fit h-fit p-1.5 text-lg font-BreeSerif bg-black text-white rounded-lg shadow-md m-12" onClick={downloadPDF}
            >
              Generate Report
            </button>
          </div>

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
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <table className="w-[95%] font-BreeSerif bg-white" id="attendance">
            <TableView headers={headers} />
            <tbody>
              {filteredData.map((attendanceData, index) => {
                let createdAt = attendanceData.createdAt;
                let departure = attendanceData.departure;

                // Create Date objects
                let createdAtDate = new Date(createdAt);
                let departureDate = new Date(departure);

                // Convert to local time strings
                let localCreatedAt = createdAtDate.toLocaleTimeString();
                let localDeparture = departureDate.toLocaleTimeString();

                return (
                  <tr key={attendanceData._id} className="h-8">
                    <td className="border border-slate-700 rounded-md text-center">
                      {index + 1}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      {attendanceData.generatedEmpId}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      <EmpName id={attendanceData.empId} />
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      {localCreatedAt}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      {localDeparture}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                      {attendanceData.late}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <StaffFooter />
    </div>
  );
};

export default AttendancePage;
