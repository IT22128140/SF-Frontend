// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom'



/* Maneth */
import Home from './pages/onlinestore/Home.jsx';
import Login from './pages/onlinestore/Login.jsx';



















/*Sandithi */
import HrDashboard from './pages/employeemanagement/HrDashboard.jsx';




















/* Isuru */

import SupplierDetails from './pages/InventoryAndSupplier/SupplierDetails.jsx';



















/* Gihan */
import ChequeSubmit from './pages/salarymanager/ChequeSubmit.jsx';
import SalaryHistory from './pages/salarymanager/SalaryHistory.jsx';
import DeleteSalary from './pages/salarymanager/DeleteSalary.jsx';
import GenerateSalary from './pages/salarymanager/GenerateSalary.jsx';
import ViewSalary from './pages/salarymanager/ViewSalary.jsx';














/* Sageevan */



















/* Ridmi */
import RawmRequests from './pages/productionManager/RawmRequests.jsx';
import CreatermRequests from './pages/productionManager/CreatermRequests.jsx';
import ViewrmRequests from './pages/productionManager/ViewrmRequests.jsx';
import UpdatermRequests from './pages/productionManager/UpdatermRequests.jsx';
import DeletermRequests from './pages/productionManager/DeletermRequests.jsx';
import RawmDistributions from './pages/productionManager/RawmDistributions.jsx';
import CreatermDistributes from './pages/productionManager/CreatermDistributes.jsx';
import ViewrmDistributes from './pages/productionManager/ViewrmDistributes.jsx';
import UpdatermDistributes from './pages/productionManager/UpdatermDistributes.jsx';
import DeletermDistributes from './pages/productionManager/DeletermDistributes.jsx';
import RequestforInventory from './pages/productionManager/RequestforInventory.jsx';
import EmployeePerformance from './pages/productionManager/EmployeePerformance.jsx';
import CreateEPReport from './pages/productionManager/CreateEPReport.jsx';
import ViewEPReport from './pages/productionManager/ViewEPReport.jsx';
import CompletedrmRequests from './pages/productionManager/CompletedrmRequests.jsx';
import PendingrmRequests from './pages/productionManager/PendingrmRequests.jsx';




















/* Hiranya */
import MaintenanceHome from './pages/MaintenanceManager/MaintenanceHome.jsx';
import CreateRepairRequests from './pages/MaintenanceManager/CreateRepairRequests.jsx';
import EditReapairs from './pages/MaintenanceManager/EditRepairs.jsx';
import DeleteRepairs from './pages/MaintenanceManager/DeleteRepairs.jsx';
import ViewRepairs from './pages/MaintenanceManager/ViewRepairs.jsx';
import ViewMachines from './pages/MaintenanceManager/ViewMachines.jsx';
import ViewMPshortages from './pages/MaintenanceManager/ViewMPshortages.jsx';






















const App = () => {
  return (
    <Routes>
      {/* Maneth */}
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} /> 




















      {/* Sandithi */}

      <Route path="/HrDashboard" element={<HrDashboard />} />
   





















      {/* Isuru*/}
      <Route path="/SupplierDetails" element={<SupplierDetails />} />





















      {/* Sageevan */}






















      {/* Ridmi */}
      <Route path= '/RawmRequests' element = {<RawmRequests/>} />
      <Route path= '/rmRequests/create' element = {<CreatermRequests/>} />
      <Route path= '/rmRequests/details/:id' element = {<ViewrmRequests/>} />
      <Route path= '/rmRequests/edit/:id' element = {<UpdatermRequests/>} />
      <Route path= '/rmRequests/delete/:id' element = {<DeletermRequests/>} />
      <Route path= '/RawmDistributes' element= {<RawmDistributions/>}/>
      <Route path= '/rmDistributes/create' element = {<CreatermDistributes/>} />
      <Route path= '/rmDistributes/details/:id' element = {<ViewrmDistributes/>} />
      <Route path= '/rmDistributes/edit/:id' element = {<UpdatermDistributes/>} />
      <Route path= '/rmDistributes/delete/:id' element= {<DeletermDistributes/>}/>
      <Route path= '/RequestforInventory' element={<RequestforInventory/>}/>
      <Route path= '/EmployeePerformance' element={<EmployeePerformance/>}/>
      <Route path= '/empPerformances/create' element={<CreateEPReport/>}/>
      <Route path= '/empPerformances/details/:id' element={<ViewEPReport/>}/>
      <Route path= '/rmRequests/completed' element={<CompletedrmRequests/>}/>
      <Route path= '/rmRequests/pending' element={<PendingrmRequests/>}/>





















      {/* Hiranya */}

      <Route path='/repairs' element={<MaintenanceHome/>} />
      <Route path='/repairs/create' element={<CreateRepairRequests/>} />
      <Route path='/repairs/view' element={<ViewRepairs/>} />
      <Route path='/repairs/edit/:id' element={<EditReapairs/>} />
      <Route path='/repairs/delete/:id' element={<DeleteRepairs/>} />
      <Route path='/machines/view' element={<ViewMachines/>} />
      <Route path='/mpshortages/view' element={<ViewMPshortages/>} />





















      {/* Gihan */}
      <Route path="/ChequeSubmit" element={<ChequeSubmit />} />
      <Route path="/SalaryHistory" element={<SalaryHistory />} />
      <Route path="/DeleteSalary" element={<DeleteSalary />} />
      <Route path="/GenerateSalary" element={<GenerateSalary />} />
      <Route path="/ViewSalary" element={<ViewSalary />} />
      






















    </Routes>
  )
}

export default App