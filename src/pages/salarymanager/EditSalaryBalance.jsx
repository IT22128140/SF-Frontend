import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import SubmitButton from "../../components/button2/SubmitButton";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter";
import { set } from "react-hook-form";

const EditSalaryBalance = () => {
  const [editSalaryBalance, setEditSalaryBalance] = useState({});
  const [attendance, setAttendance] = useState(0);
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [date, setDate] = useState("");
  const [notice, setNotice] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [attendanceError, setAttendanceError] = useState("");
  const [overtimeError, setOvertimeError] = useState("");
  const [bonusError, setBonusError] = useState("");
  const [cheque1,setCheque1] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const calculateTotalAmount = () => {
    const basic = parseFloat(editSalaryBalance.basicSalary);
    const overtimeValue = parseFloat(overtimeHours);
    const bonusAmount = parseFloat(bonus);

    let totalAmountValue;

    if (attendance >= 27 && attendance <= 30) {
      totalAmountValue = (basic + overtimeValue * 200 + bonusAmount + 3000).toFixed(2);
    } else if (attendance >= 24 && attendance < 27) {
      const adjustedSalary = basic + overtimeValue * 200 + bonusAmount - 5000;
      totalAmountValue = adjustedSalary.toFixed(2);
    } else if (attendance >= 20 && attendance < 24) {
      const adjustedSalary = basic + overtimeValue * 200 + bonusAmount - 7000;
      totalAmountValue = adjustedSalary.toFixed(2);
    } else if (attendance >= 15 && attendance < 20) {
      const adjustedSalary = basic + overtimeValue * 200 + bonusAmount;
      totalAmountValue = adjustedSalary.toFixed(2);
    } else {
      const adjustedSalary = basic;
      totalAmountValue = adjustedSalary.toFixed(2);
    }

    setTotalAmount(totalAmountValue);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/salary/${id}`)
      .then((response) => {
        setEditSalaryBalance(response.data);
        setAttendance(response.data.attendance);
        setOvertimeHours(response.data.overtime);
        setBonus(response.data.bonus);
        setTotalAmount(response.data.totalAmount);
        setDate(response.data.date);
        setNotice(response.data.notice);
        setCheque1(response.data.cheque1);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSalary = (e) => {
    e.preventDefault();
    console.log("uploded");

    // Validation for attendance, overtime, and bonus
    if (attendance < 0 || attendance > 30) {
      setAttendanceError("Attendance must be between 0 and 30");
      return;
    }
    if (overtimeHours < 0 || overtimeHours > 300) {
      setOvertimeError("Overtime hours must be between 0 and 200");
      return;
    }
    if (bonus < 0 || bonus > 100000) {
      setBonusError("Bonus must be between 0 and 100000");
      return;
    }

    const data = {
      attendance: attendance,
      overtime: overtimeHours,
      bonus: bonus,
      date: date,
      notice: notice,
      totalAmount: totalAmount,
      cheque1:cheque1
    };
    setLoading(true);

    axios
      .put(`http://localhost:5555/salary/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate(`/SalaryTable`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
    };

      const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setCheque1(base64);
      };
  

  return (
    <div className="w-full h-full bg-scroll bg-repeat bg-bgform">
      <HrNavbar sal={true} />
      <div className="p-4 h-screen overflow-y-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
            Edit Salary Details
          </h1>
        </div>
        <br />
        <div className="w-1/3 p-4">
          <h2 className="text-xl mb-4">Profile</h2>
        </div>
        <br />
        <br />
        {loading ? (
          <Spinner />
        ) : (
          <div className="bg-bgc border-2 border-bgc rounded-xl w-[600px] p-8 mx-auto font-BreeSerif">
            <div className="p-4 mx-auto max-w-lg ">
              <div className="mb-4">
                <label className="block text-ternary text-sm font-bold mb-3">
                  Full Name
                </label>
                <span className="border border-black border-1 p-2 block mb-2">
                  {editSalaryBalance.firstName} {editSalaryBalance.lastName}
                </span>
                <br />
                <label className="block text-ternary text-sm font-bold mb-3">
                  Employee ID
                </label>
                <span className="border border-black border-1 p-1 block mb-2">
                  {editSalaryBalance.employeeID}
                </span>
                <br />
                <label className="block text-ternary text-sm font-bold mb-3">
                  Basic Salary
                </label>
                <span className="border border-black border-1 p-1 block mb-2">
                  {editSalaryBalance.basicSalary}
                </span>{" "}
                <br />
                <label className="block text-ternary text-sm font-bold mb-3">
                  Attendance
                </label>
                <input
                  type="number"
                  value={attendance}
                  onChange={(e) => {
                    setAttendanceError("");
                    if (e.target.value <= 30 && e.target.value >= 0) {
                      setAttendance(e.target.value);
                    }
                  }}
                  className="border border-black border-1 p-1 block mb-2"
                />
                {attendanceError && (
                  <p className="text-red-500">{attendanceError}</p>
                )}
                <br />
                <label className="block text-ternary text-sm font-bold mb-3">
                  Over Time Hours
                </label>
                <input
                  type="number"
                  value={overtimeHours}
                  onChange={(e) => {
                    setOvertimeError("");
                    if (e.target.value <= 300 && e.target.value >= 0) {
                      setOvertimeHours(e.target.value);
                    }
                  }}
                  className="border border-black border-1 p-1 block mb-2"
                />
                {overtimeError && (
                  <p className="text-red-500">{overtimeError}</p>
                )}
                <br />
                <label className="block text-ternary text-sm font-bold mb-3">
                  Bonus
                </label>
                <input
                  type="number"
                  value={bonus}
                  onChange={(e) => {
                    setBonusError("");
                    if (e.target.value <= 100000 && e.target.value >= 0) {
                      setBonus(e.target.value);
                    }
                  }}
                  className="border border-black border-1 p-1 block mb-2"
                />
                {bonusError && <p className="text-red-500">{bonusError}</p>}
                <br />
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={calculateTotalAmount}
                    className="mr-4 bg-black p-2 rounded text-white"
                  >
                    Generate
                  </button>
                </div>
                <label className="block text-ternary text-sm font-bold mb-3">
                  Total Amount
                </label>
                <span className="border border-black border-1 p-1 block mb-2">
                  {totalAmount}
                </span>
                <br />
                <label className="block text-ternary text-sm font-bold mb-3">
                  Cheque
                </label>
                <input
                  type="file"
                  name="cheque1"
                  id="cheque1"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => handleFileUpload(e)}/>
                  <label className="block text-black text-sm font-semi-bold mb-3">
                  Image size should be less than 5MB.
                </label>
                <br />
                <label className="block text-ternary text-sm font-bold mb-3">
                  Date
                </label>
                <input
                  type="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border border-black border-1 p-1 block mb-2"
                />{" "}
                <br />
                <label className="block text-ternary text-sm font-bold mb-3">
                  Notice
                </label>
                <textarea
                  value={notice}
                  onChange={(e) => setNotice(e.target.value)}
                  className="border border-black border-1 p-1 block mb-2"
                />
                {notice.split(/\s+/).filter(Boolean).length > 50 && (
                  <p className="text-red-500">
                    Notice text cannot exceed 50 words
                  </p>
                )}
                <br />
              </div>
              <br />
              <div className="flex justify-center">
                <SubmitButton onClick={handleSalary}>Submit</SubmitButton>
              </div>
            </div>
          </div>
        )}
      </div>
      <StaffFooter />
    </div>
  );
};

export default EditSalaryBalance

function convertBase64(file) {
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
