import React from 'react';
import StaffFooter from '../../components/footer/stafffooter/StaffFooter';
import PMHeader from '../../components/navbar/staffheader/PMHeader';
import { Link } from 'react-router-dom';
import DashboardCard from '../../components/DashboardCard';

const PMHome = () => {
  return (
    <div className = 'relative'>
        <PMHeader home= {true}/>
        <div className = 'flex flex-row ml-12'>
            <DashboardCard
             topic = 'Raw Materials'
             subtopic1 = 'Add new Requests'
             link1 = '/rmRequests/create'
             subtopic2 = 'Request Raw Materials'
             description= 'Visit this page if you want to make any changes for the requested raw materials.'
             link2 = '/RawmRequests'
            />
            <DashboardCard
             topic = 'Distributions'
             subtopic1 = 'Add new Distributions'
             link1 = '/rmDistributes/create'
             subtopic2 = 'Manage Distributions'
             description= 'Visit this page if you want to view records about the distributions done in the production process.'
             link2 = '/RawmDistributes'
            />
        </div>
        <div className = 'flex flex-row ml-12'>
            <DashboardCard
             topic = 'Request Quality Evaluation'
             subtopic1 = 'Add new Requests'
             link1 = '/qualityControl/reviewRequest/add'
             subtopic2 = 'Request Quality Evaluation'
             description= 'Visit this page if you want to review any requests for the quality evaluations of the final product.'
             link2 = '/qualityControl/rejectProduct'
            />
            <DashboardCard
             topic = 'Generate Reports'
             subtopic1 = 'Add Employee Performance Details'
             link1 = '/empPerformances/create'
             subtopic2 = 'Employee Performance'
             description= 'Visit this page to search about employee performance in th production process.'
             link2 = '/EmployeePerformance'
            />
        </div>
        <StaffFooter/>
    </div>
  )
}

export default PMHome