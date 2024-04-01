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
import RawmDistributions from './pages/productionManager/RawmDistributions.jsx';
import CreatermDistributes from './pages/productionManager/CreatermDistributes.jsx';
import ViewrmDistributes from './pages/productionManager/ViewrmDistributes.jsx';
import UpdatermDistributes from './pages/productionManager/UpdatermDistributes.jsx';


















/* Hiranya */























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
      <Route path= '/RawmDistributes' element= {<RawmDistributions/>}/>
      <Route path= '/rmDistributes/create' element = {<CreatermDistributes/>} />
      <Route path= '/rmDistributes/details/:id' element = {<ViewrmDistributes/>} />
      <Route path= '/rmDistributes/edit/:id' element = {<UpdatermDistributes/>} />





















      {/* Hiranya */}






















      {/* Gihan */}























    </Routes>
  )
}

export default App