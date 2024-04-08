import React from "react";
import IsNavbar from "../../components/navbar/staffheader/IsNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";

import { Link } from "react-router-dom";

const IsDashboard = () => {
  return (
    <div>
      <IsNavbar home={true} />

      <div className="p-4">
        <h1 className="my-8 text-4xl font-semibold font-Philosopher text-ternary">
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
        <div className="flex items-center px-8 py-6 m-8 border border-black rounded-xl w-fit h-fit flex-crow font-BreeSerif">
          <h1 className="mr-10 text-xl text-ternary">
            Create Employee System Accounts
          </h1>
          <Link to="#">
            <button className="px-4 py-2 m-2 text-white bg-gray-600 rounded-lg w-fit h-fit">
              Create
            </button>
          </Link>
        </div>
      </center>

      <StaffFooter />
    </div>
  );
};

export default IsDashboard;