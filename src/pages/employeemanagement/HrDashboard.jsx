// eslint-disable-next-line no-unused-vars
import React from "react";
import HrNavbar from "../../components/navbar/staffheader/HrNavbar.jsx";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter.jsx";

const HrDashboard = () => {
  return (
    <div>
      <HrNavbar home={true} />
      <StaffFooter />
    </div>
  );
};

export default HrDashboard;
