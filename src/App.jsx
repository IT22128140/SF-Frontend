// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom'
/* Maneth */
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';




















/*Sandithi */





















/* Isuru */

import SupplierDetails from './pages/InventoryAndSupplier/SupplierDetails.jsx';



















/* Gihan */





















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





















      {/* Gihan */}























    </Routes>
  )
}

export default App