// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom'



/* Maneth */

import Home from './pages/onlinestore/Home.jsx';
import Login from './pages/onlinestore/Login.jsx';



















/*Sandithi */





















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





















/* Hiranya */
import MaintenanceHome from './pages/MaintenanceManager/MaintenanceHome.jsx';
import CreateRepairRequests from './pages/MaintenanceManager/CreateRepairRequests.jsx';
import EditReapairs from './pages/MaintenanceManager/EditRepairs.jsx';
import DeleteRepairs from './pages/MaintenanceManager/DeleteRepairs.jsx';
import ViewRepairs from './pages/MaintenanceManager/ViewRepairs.jsx';
import ViewMachines from './pages/MaintenanceManager/ViewMachines.jsx';
import ViewMPshortages from './pages/MaintenanceManager/ViewMPshortages.jsx';
import RequestMPshortages from './pages/MaintenanceManager/RequestMPshortages';
import AddMachine from './pages/MaintenanceManager/AddMachine';
import EditMachines from './pages/MaintenanceManager/EditMachines.jsx';
import EditMPshortage from './pages/MaintenanceManager/EditMPshortage.jsx';
import DeleteMachine from './pages/MaintenanceManager/DeleteMachine.jsx';
import DeleteMPshortage from './pages/MaintenanceManager/DeleteMPshortage.jsx';
import ShowRepair from './pages/MaintenanceManager/ShowRepair.jsx';
import ShowMachine from './pages/MaintenanceManager/ShowMachine.jsx';
import ShowMPshortage from './pages/MaintenanceManager/ShowMPshortage.jsx';
import WorkersSidebar from './pages/MaintenanceManager/WorkersSidebar.jsx';




















const App = () => {
  return (
    <Routes>
      {/* Maneth */}

      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} /> 




















      {/* Sandithi */}
   





















      {/* Isuru*/}
      <Route path="/SupplierDetails" element={<SupplierDetails />} />





















      {/* Sageevan */}






















      {/* Ridmi */}
      <Route path= '/RawmRequests' element = {<RawmRequests/>} />
      <Route path= '/rmRequests/create' element = {<CreatermRequests/>} />
      <Route path= '/rmRequests/details/:id' element = {<ViewrmRequests/>} />
      <Route path= '/rmRequests/edit/:id' element = {<UpdatermRequests/>} />
      <Route path= '/rmRequests/delete/:id' element = {<DeletermRequests/>} />





















      {/* Hiranya */}

      <Route path='/repairs' element={<MaintenanceHome/>} />
      <Route path='/repairs/create' element={<CreateRepairRequests/>} />
      <Route path='/repairs/view' element={<ViewRepairs/>} />
      <Route path='/repairs/edit/:id' element={<EditReapairs/>} />
      <Route path='/repairs/delete/:id' element={<DeleteRepairs/>} />
      <Route path='/machines/view' element={<ViewMachines/>} />
      <Route path='/mpshortages/view' element={<ViewMPshortages/>} />
      <Route path='/mpshortages/create' element={<RequestMPshortages/>} />
      <Route path='/machines/create' element={<AddMachine/>} />
      <Route path='/machines/edit/:id' element={<EditMachines/>} />
      <Route path='/mpshortages/edit/:id' element={<EditMPshortage/>} />
      <Route path='/machines/delete/:id' element={<DeleteMachine/>} />
      <Route path='/mpshortages/delete/:id' element={<DeleteMPshortage/>} />
      <Route path='/repairs/view/:id' element={<ShowRepair/>} />
      <Route path='/machines/view/:id' element={<ShowMachine/>} />
      <Route path='/mpshortages/view/:id' element={<ShowMPshortage/>} />
      <Route path='/repairs/sidebar' element={<WorkersSidebar/>} />
























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