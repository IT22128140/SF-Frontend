// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom'
/* Maneth */
import Home from './pages/onlinestore/Home.jsx';
import Login from './pages/onlinestore/Login.jsx';




















/*Sandithi */





















/* Isuru */

import SupplierDetails from './pages/InventoryAndSupplier/SupplierDetails.jsx';
import AddSuppliers from './pages/InventoryAndSupplier/AddSuppliers.jsx';
import DeleteSupplier from './pages/InventoryAndSupplier/DeleteSupplier.jsx';
import EditSuppliers from './pages/InventoryAndSupplier/EditSuppliers.jsx';

import MachinePartStock from './pages/InventoryAndSupplier/MachinePartStock.jsx';
import Addmachinepart from './pages/InventoryAndSupplier/AddMachinepart.jsx';
import EditMpart from './pages/InventoryAndSupplier/EditMpart.jsx';
import DeleteMparts from './pages/InventoryAndSupplier/DeleteMpart.jsx';

import RawMaterialStock from './pages/InventoryAndSupplier/RawMaterialStock.jsx';
import AddRMaterial from './pages/InventoryAndSupplier/AddRMaterial.jsx';
import EditRMstock from './pages/InventoryAndSupplier/EditRMstock.jsx';
import DeleteRMstock from './pages/InventoryAndSupplier/DeleteRMstock.jsx';

import Fullfillrequset from './pages/InventoryAndSupplier/Fullfillrequset.jsx';


import Popup from './pages/InventoryAndSupplier/Popup.jsx';















/* Gihan */





















/* Sageevan */



















/* Ridmi */
import RawmRequests from './pages/productionManager/RawmRequests.jsx';
import CreatermRequests from './pages/productionManager/CreatermRequests.jsx';
import ViewrmRequests from './pages/productionManager/ViewrmRequests.jsx';
import UpdatermRequests from './pages/productionManager/UpdatermRequests.jsx';
import DeletermRequests from './pages/productionManager/DeletermRequests.jsx';
import EditMachinepart from './pages/InventoryAndSupplier/EditMpart.jsx';























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
      <Route path="/SupplierDetails/AddSuppliers" element={<AddSuppliers />} />
      <Route path="/SupplierDetails/EditSuppliers/:id" element={<EditSuppliers />} />
      <Route path="/SupplierDetails/DeleteSupplier/:id" element={<DeleteSupplier />} />

      <Route path= '/MachinePartStock' element = {<MachinePartStock/>} />
      <Route path= '/MachinePartStock/AddMachinepart' element = {<Addmachinepart/>} />
      <Route path= "/MachinePartStock/EditMpart/:id" element = {<EditMpart/>} />
      <Route path= "/MachinePartStock/DeleteMparts/:id" element = {<DeleteMparts/>} />

      <Route path= '/RawMaterialStock' element = {<RawMaterialStock/>} />
      <Route path= '/RawMaterialStock/AddRMaterial' element = {<AddRMaterial/>} />
      <Route path= "/RawMaterialStock/EditRMstock/:id" element = {<EditRMstock/>} />
      <Route path= '/RawMaterialStock/DeleteRMstock/:id' element = {<DeleteRMstock/>} />

     <Route path='/Fullfillrequset' element= {<Fullfillrequset/>} />
    


    <Route path= "/Popup" element = {<Popup/>} />















      {/* Sageevan */}






















      {/* Ridmi */}
      <Route path= '/RawmRequests' element = {<RawmRequests/>} />
      <Route path= '/rmRequests/create' element = {<CreatermRequests/>} />
      <Route path= '/rmRequests/details/:id' element = {<ViewrmRequests/>} />
      <Route path= '/rmRequests/edit/:id' element = {<UpdatermRequests/>} />
      <Route path= '/rmRequests/delete/:id' element = {<DeletermRequests/>} />





















      {/* Hiranya */}






















      {/* Gihan */}























    </Routes>
  )
}

export default App