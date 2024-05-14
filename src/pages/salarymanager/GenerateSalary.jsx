import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { useParams, Link } from "react-router-dom";
import SubmitButton from "../../components/button2/SubmitButton";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter";
import { useNavigate } from "react-router-dom";

const GenerateSalary = () => {
  const [employeeData, setEmployeeData] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [basicSalary, setBasicSalary] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [attendance, setAttendance] = useState(0);
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  // const [cheque1, setCheque1] = useState({cheque1: ""});
  const [cheque1, setCheque1] = useState("");
  const [date, setDate] = useState("");
  const [notice, setNotice] = useState("");
  const [attendanceError, setAttendanceError] = useState("");
  const [overtimeError, setOvertimeError] = useState("");
  const [bonusError, setBonusError] = useState("");
  const [noticeError, setNoticeError] = useState("");

  const calculateTotalAmount = () => {
    const basic = parseFloat(basicSalary);
    const overtime = parseFloat(overtimeHours);
    const bonusAmount = parseFloat(bonus);

    let totalAmountValue;

    if (attendance >= 27 && attendance <= 30) {
      totalAmountValue = (basic + overtime * 200 + bonusAmount + 3000).toFixed(2);
    } else if (attendance >= 24 && attendance < 27) {
      const adjustedSalary = basic + overtime * 200 + bonusAmount - 5000;
      totalAmountValue = adjustedSalary.toFixed(2);
    } else if (attendance >= 20 && attendance < 24) {
      const adjustedSalary = basic + overtime * 200 + bonusAmount - 7000;
      totalAmountValue = adjustedSalary.toFixed(2);
    } else if (attendance >= 15 && attendance < 20) {
      const adjustedSalary = basic + overtime * 200 + bonusAmount;
      totalAmountValue = adjustedSalary.toFixed(2);
    } else {
      const adjustedSalary = basic;
      totalAmountValue = adjustedSalary.toFixed(2);
    }

    setTotalAmount(totalAmountValue);
  };

  const handleSaveSalary = (e) => {
    e.preventDefault();
    // createCheque(cheque1);
    console.log("uploded");


    if (attendance > 30 || attendance < 0) {
      setAttendanceError("Attendance should be between 0 and 30");
      return;
    }
    if (overtimeHours > 200 || overtimeHours < 0) {
      setOvertimeError("Overtime hours should be between 0 and 200");
      return;
    }
    if (bonus > 100000 || bonus < 0) {
      setBonusError("Bonus should be between 0 and 100,000");
      return;
    }
    if (notice.split(/\s+/).filter(Boolean).length > 50) {
      setNoticeError("Notice text cannot exceed 50 words");
      return;
    }

    const data = {
      firstName,
      lastName,
      employeeID,
      contactNo,
      email,
      basicSalary,
      attendance,
      overtime: overtimeHours,
      bonus,
      cheque1,
      totalAmount,
      date,
      notice,
    };
    setLoading(true);
    axios
      .post(`http://localhost:5555/salary`, data)
      .then(() => {
        setLoading(false);
        alert("Salary generated successfully");
        navigate("/employees/CurrentEmployeeList");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check console");
        console.log(error);
      });
  };

  // const createCheque = async(cheque1) => {
  //   try {
  //     await axios.post(`http://localhost:5555/salary`, cheque1);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const fileSizeMB = file.size / (1024 * 1024); // Convert bytes to MB
    if (fileSizeMB > 5) {
      alert("Image size should be less than 5MB.");
      return;
    }
    const base64 = await convertToBase64(file);
    setCheque1(base64);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/employee/${id}`)
      .then((response) => {
        const data = response.data;
        setEmployeeData(data);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmployeeID(data.employeeID);
        setContactNo(data.contactNo);
        setEmail(data.email);
        setBasicSalary(data.basicSalary);
        setAttendance(data.attendance || 0);
        setOvertimeHours(data.overtime || 0);
        setBonus(data.bonus || 0);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="w-full h-full bg-scroll bg-repeat bg-bgform">
      <HrNavbar sal={true} />
      <div className="p-4 h-screen overflow-y-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
            Generate Employee Salary
          </h1>
        </div>
       
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
                  {employeeData.firstName} {employeeData.lastName}
                </span>
                <br />
                <label className="block text-ternary text-sm font-bold mb-3">
                  Employee ID
                </label>
                <span className="border border-black border-1 p-1 block mb-2">
                  {employeeData.employeeID}
                </span>
                <br />
                <label className="block text-ternary text-sm font-bold mb-3">
                  Employee Contact Number
                </label>
                <span className="border border-black border-1 p-1 block mb-2">
                  {employeeData.contactNo}
                </span>
                <br />
                <label className="block text-ternary text-sm font-bold mb-3">
                  Employee Email
                </label>
                <span className="border border-black border-1 p-1 block mb-2">
                  {employeeData.email}
                </span>
                <br />
                <label className="block text-ternary text-sm font-bold mb-3">
                  Basic Salary
                </label>
                <span className="border border-black border-1 p-1 block mb-2">
                  {employeeData.basicSalary}
                </span>
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
                    if (e.target.value <= 200 && e.target.value >= 0) {
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
              </div>
              <br />
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={calculateTotalAmount}
                  className="mr-4 bg-black p-2 rounded text-white  "
                >
                  Generate
                </button>
              </div>
              <br />
              <br />
              <label className="block text-ternary text-2xl font-bold mb-3">
                Total Amount
              </label>
              <span className="border border-black border-1 p-1 block mb-2">
                RS.{totalAmount}
              </span>

              <br />
              <br />
              <label className="block text-ternary text-sm font-bold mb-3">
                Cheque  Upload
              </label>
              <input
                type ="file"
                name="cheque1"
                id="cheque1"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => handleFileUpload(e)}/>
                <label className="block text-black text-sm font-semi-bold mb-3">
                Image size should be less than 5MB.
              </label>

              <br />
              <br />
              <label className="block text-ternary text-sm font-bold mb-3">
                Date
              </label>
              <input
                type="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border border-black border-1 p-1 block mb-2"
              />
              <br />
              <br />
              <label className="block text-ternary text-sm font-bold mb-3">
                Notice
              </label>
              <textarea
                value={notice}
                onChange={(e) => {
                  setNoticeError("");
                  const words = e.target.value.split(/\s+/).filter(Boolean);
                  if (words.length <= 50) {
                    setNotice(e.target.value);
                  }
                }}
                className="border border-black border-1 p-1 block mb-2"
              />
              {noticeError && <p className="text-red-500">{noticeError}</p>}
              <div className="flex justify-center">
                <SubmitButton onClick={handleSaveSalary} className="mr-2">
                  Submit
                </SubmitButton>
              </div>
            </div>
          </div>
        )}
      </div>
      <StaffFooter />
    </div>
  );
};

export default GenerateSalary

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


