// eslint-disable-next-line no-unused-vars
import React from "react";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import DashboardCard from "../../components/DashboardCard.jsx";
import { Link } from "react-router-dom";

const HrDashboard = () => {
  return (
    <div>
      <HrNavbar home={true} />

      <div className="p-4">
        <h1 className="text-4xl my-8 font-Philosopher text-ternary font-semibold">
          Dashboard
        </h1>

        <div className="flex flex-row justify-evenly">
          <DashboardCard
            topic="Employee Management"
            subtopic1="Add New Employees"
            link1="/employees/AddEmployee"
            subtopic2="Current Employees&rsquo; List"
            description="lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            link2="/employees/CurrentEmployeeList"
          />
          <DashboardCard
            topic="Attendane Management"
            subtopic1="Approve Attendance"
            link1="#"
            subtopic2="View Attendance"
            description="lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link2="#"
          />
        </div>

        <div className="flex flex-row justify-evenly">
          <DashboardCard
            topic="Resignation Management"
            subtopic1="Request Termination"
            link1="#"
            subtopic2="Resigned Employees&rsquo; List"
            description="lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            link2="#"
          />
          <DashboardCard
            topic="Salary Management"
            subtopic1="<Placeholder>"
            link1="#"
            subtopic2="View Salary"
            description="lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link2="#"
          />
        </div>
      </div>

      <center>
        <div className="border border-black rounded-xl w-fit h-fit flex flex-crow items-center font-BreeSerif py-6 px-8 m-8">
          <h1 className="text-xl text-ternary mr-10">
            Create Employee System Accounts
          </h1>
          <Link to="#">
            <button className="w-fit h-fit py-2 px-4 m-2 bg-gray-600 rounded-lg text-white">
              Create
            </button>
          </Link>
        </div>
      </center>

      <StaffFooter />
    </div>
  );
};

export default HrDashboard;
