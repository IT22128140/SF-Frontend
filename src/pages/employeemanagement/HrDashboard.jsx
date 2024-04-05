// eslint-disable-next-line no-unused-vars
import React from "react";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";
import DashboardCard from "../../components/DashboardCard.jsx";

const HrDashboard = () => {
  return (
    <div>
      <HrNavbar home={true} />

      <div className="p-4">
        <h1 className="text-4xl my-8 font-Philosopher text-ternary font-semibold"> Dashboard</h1>
        <DashboardCard />
      </div>

      <StaffFooter />
    </div>
  );
};

export default HrDashboard;
