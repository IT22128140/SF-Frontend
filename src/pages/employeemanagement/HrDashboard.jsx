// eslint-disable-next-line no-unused-vars
import React from "react";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import DashboardCard from "../../components/DashboardCard.jsx";
import ViewButton from "../../components/button2/ViewButton.jsx";
import { Link } from "react-router-dom";

const HrDashboard = () => {
  return (
    <div className="w-full h-full bg-fixed bg-no-repeat bg-bghome" style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
      <HrNavbar home={true} />

      <div className="p-4">
        <center>
          <h1 className="text-6xl my-8 font-Philosopher text-ternary font-semibold">
            Dashboard
          </h1>
        </center>

        <div className="flex flex-row justify-evenly">
          <DashboardCard
            topic="Employee Management"
            subtopic1="Add New Employees"
            link1="/employees/AddEmployee"
            subtopic2="Current Employees&rsquo; List"
            description="View all current employees of the company."
            link2="/employees/CurrentEmployeeList"
          />
          {/* <DashboardCard
            topic="Attendane Management"
            subtopic1="Approve Attendance"
            link1="#"
            subtopic2="View Attendance"
            description=""
            link2="/attendance/AttendancePage"
          /> */}
          <div className="px-14 py-8">
              <div className="border border-black rounded-xl w-[800px] h-fit  flex flex-col items-center font-BreeSerif p-6 bg-white">
                <h1 className="text-3xl font-Philosopher text-ternary">
                Attendane Management
                </h1>

                <div className="border border-black rounded-xl w-100% h-fit bg-bgc flex flex-col items-center font-BreeSerif p-2 m-8">
                  <h2 className="text-xl text black pb-2">
                    Generate Attendance Reprot
                  </h2>
                  <p className="text-md text-black pb-2">
                    Generate attendance report of employees according to date.
                  </p>

                  <Link to="/attendance/AttendancePage">
                    <ViewButton />
                  </Link>
                </div>
                <div className="border border-black rounded-xl w-100% h-fit bg-bgc flex flex-col items-center font-BreeSerif p-2 m-8">
                  <h2 className="text-xl text black pb-2">
                    Attendance List
                  </h2>
                  <p className="text-md text-black pb-2">
                    View Attendance of employees.
                  </p>

                  <Link to="/attendance/AttendancePage">
                    <ViewButton />
                  </Link>
                </div>
              </div>
            </div>
        </div>

        <div className="flex flex-row justify-evenly">
          {/* <DashboardCard
            topic="Resignation Management"
            subtopic2="Rejected Request List"
            description="lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            link2="/resign/RejectedRequestPage"
          /> */}
          <div>
            <div className="px-14 py-8">
              <div className="border border-black rounded-xl w-[800px] h-fit  flex flex-col items-center font-BreeSerif p-6 bg-white">
                <h1 className="text-3xl font-Philosopher text-ternary">
                  Resignation Management
                </h1>

                <div className="border border-black rounded-xl w-100% h-fit bg-bgc flex flex-col items-center font-BreeSerif p-2 m-8">
                  <h2 className="text-xl text black pb-2">
                    Termination Pending List
                  </h2>
                  <p className="text-md text-black pb-2">
                    View Termination and Resignation Pending List.
                  </p>

                  <Link to="/resign/TerminationPendingList">
                    <ViewButton />
                  </Link>
                </div>
                <div className="border border-black rounded-xl w-100% h-fit bg-bgc flex flex-col items-center font-BreeSerif p-2 m-8">
                  <h2 className="text-xl text black pb-2">
                    Rejected Request List
                  </h2>
                  <p className="text-md text-black pb-2">
                    View Rejected Resignation or Termination Requests.
                  </p>

                  <Link to="/resign/RejectedRequestPage">
                    <ViewButton />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <DashboardCard
            topic="Salary Management"
            subtopic1="Salary Table"
            link1="/SalaryTable"
            subtopic2="View Salary History"
            description="View all salary payments of employees."
            link2="/SalaryHistory"
          />
        </div>
      </div>

      <StaffFooter />
    </div>
  );
};

export default HrDashboard;
