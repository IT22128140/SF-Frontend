import React from 'react';
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';

const MaintenanceManager = () => {
  return (
    <div className='re;lative'>
    <MaintenanceManagerHeader home = {true}/>
    <StaffFooter/>
    </div>
  );
};

export default MaintenanceManager;
