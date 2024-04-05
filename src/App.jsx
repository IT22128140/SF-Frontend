// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";



/* Maneth */
import Home from './pages/onlinestore/Home.jsx';
import Login from './pages/onlinestore/Login.jsx';
import ProductPage from './pages/onlinestore/ProductPage.jsx';
import Cart from './pages/onlinestore/Cart.jsx';
import Checkout from './pages/onlinestore/Checkout.jsx';
import Addresses from './pages/onlinestore/Addresses.jsx';
import Catalogue from './pages/onlinestore/Catalogue.jsx';















/*Sandithi */
import HrDashboard from "./pages/employeemanagement/HrDashboard.jsx";
import CurrentEmployeeList from "./pages/employeemanagement/CurrentEmployeeList.jsx";
import AddEmployee from "./pages/employeemanagement/AddEmployee.jsx";
import EditEmployee from "./pages/employeemanagement/EditEmployee.jsx";
import DeleteEmployee from "./pages/employeemanagement/DeleteEmployee.jsx";
















/* Isuru */

import SupplierDetails from "./pages/InventoryAndSupplier/SupplierDetails.jsx";



















/* Gihan */
import ChequeSubmit from "./pages/salarymanager/ChequeSubmit.jsx";
import SalaryHistory from "./pages/salarymanager/SalaryHistory.jsx";
import DeleteSalary from "./pages/salarymanager/DeleteSalary.jsx";
import GenerateSalary from "./pages/salarymanager/GenerateSalary.jsx";
import ViewSalary from "./pages/salarymanager/ViewSalary.jsx";















/* Sageevan */



















/* Ridmi */
import RawmRequests from "./pages/productionManager/RawmRequests.jsx";
import CreatermRequests from "./pages/productionManager/CreatermRequests.jsx";
import ViewrmRequests from "./pages/productionManager/ViewrmRequests.jsx";
import UpdatermRequests from "./pages/productionManager/UpdatermRequests.jsx";
import DeletermRequests from "./pages/productionManager/DeletermRequests.jsx";





















/* Hiranya */
import MaintenanceHome from "./pages/MaintenanceManager/MaintenanceHome.jsx";
import CreateRepairRequests from "./pages/MaintenanceManager/CreateRepairRequests.jsx";
import EditReapairs from "./pages/MaintenanceManager/EditRepairs.jsx";
import DeleteRepairs from "./pages/MaintenanceManager/DeleteRepairs.jsx";
import ViewRepairs from "./pages/MaintenanceManager/ViewRepairs.jsx";
import ViewMachines from "./pages/MaintenanceManager/ViewMachines.jsx";
import ViewMPshortages from "./pages/MaintenanceManager/ViewMPshortages.jsx";






















const App = () => {
  return (
    <Routes>
      {/* Maneth */}
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ProductPage/:id" element={<ProductPage />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path='/Addresses' element={<Addresses/>} />
      <Route path='/Catalogue' element={<Catalogue/>} />
















      {/* Sandithi */}

      <Route path="/HrDashboard" element={<HrDashboard />} />
      <Route
        path="/employees/CurrentEmployeeList"
        element={<CurrentEmployeeList />}
      />
      <Route path="/employees/AddEmployee" element={<AddEmployee />} />
      <Route path="/employees/EditEmployee/:id" element={<EditEmployee />} />
      <Route
        path="/employees/DeleteEmployee/:id"
        element={<DeleteEmployee />}
      />













      {/* Isuru*/}
      <Route path="/SupplierDetails" element={<SupplierDetails />} />





















      {/* Sageevan */}





















      {/* Ridmi */}
      <Route path="/RawmRequests" element={<RawmRequests />} />
      <Route path="/rmRequests/create" element={<CreatermRequests />} />
      <Route path="/rmRequests/details/:id" element={<ViewrmRequests />} />
      <Route path="/rmRequests/edit/:id" element={<UpdatermRequests />} />
      <Route path="/rmRequests/delete/:id" element={<DeletermRequests />} />





















      {/* Hiranya */}

      <Route path="/repairs" element={<MaintenanceHome />} />
      <Route path="/repairs/create" element={<CreateRepairRequests />} />
      <Route path="/repairs/view" element={<ViewRepairs />} />
      <Route path="/repairs/edit/:id" element={<EditReapairs />} />
      <Route path="/repairs/delete/:id" element={<DeleteRepairs />} />
      <Route path="/machines/view" element={<ViewMachines />} />
      <Route path="/mpshortages/view" element={<ViewMPshortages />} />





















      {/* Gihan */}
      <Route path="/ChequeSubmit" element={<ChequeSubmit />} />
      <Route path="/SalaryHistory" element={<SalaryHistory />} />
      <Route path="/DeleteSalary" element={<DeleteSalary />} />
      <Route path="/GenerateSalary" element={<GenerateSalary />} />
      <Route path="/ViewSalary" element={<ViewSalary />} />
      



















      
    
    
    </Routes>
  );
};


export default App