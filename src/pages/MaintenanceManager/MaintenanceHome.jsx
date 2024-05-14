import React from 'react';
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import MaintenanceManagerHeader from '../../components/navbar/staffheader/MaintenanceManagerHeader';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import DashboardCard from '../../components/DashboardCard';


const MaintenanceManager = () => {
  return (
    <div className='re;lative'>
    <MaintenanceManagerHeader home = {true}/>
    
    <div className = 'flex flex-row ml-12'>
            <DashboardCard
             topic = 'Repairs'
             subtopic1 = 'Add new Repairs'
             link1 = '/repairs/create'
             subtopic2 = 'Request new Repair'
             description= 'Check this page to edit or view repair details'
             link2 = '/repairs/view'
            />
            <DashboardCard
             topic = 'Machine Part Shortages'
             subtopic1 = 'Request for Shortage'
             link1 = '/mpshortages/create'
             subtopic2 = 'Manage Shortages'
             description= 'Visit this page to view requested shortages'
             link2 = '/mpshortages/view'
            />
        </div>
        <div className = 'flex flex-row ml-12'>
            <DashboardCard
             topic = 'Machines'
             subtopic1 = 'Add new Machines'
             link1 = 'machines/create'
             subtopic2 = 'Manage Machines'
             description= 'View and manage the machine details'
             link2 = 'machines/view'
            />
            <DashboardCard
             topic = 'Maintenance Report'
             subtopic1 = 'Make a new Maintenance Report'
             link1 = '/repairs/report'
             subtopic2 = 'Maintenance Management'
             description= 'View the specific maintenance details and repairs for each repair worker'
             link2 = '/repairs/report'
            />
        </div>
    <StaffFooter/>
    </div>
  );
};

export default MaintenanceManager;
