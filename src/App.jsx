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












 /* varagan */
 import LoginEmp from './pages/LoginEmp.jsx';
 import LoginCus from './pages/LoginCus.jsx';
 import RegisCus from './pages/RegisCus.jsx';
 import RegisEmp from './pages/RegisEmp.jsx';
 import CusProfile from './pages/CusProfile.jsx';
 



/*Sandithi */
import HrDashboard from "./pages/employeemanagement/HrDashboard.jsx";
import CurrentEmployeeList from "./pages/employeemanagement/CurrentEmployeeList.jsx";
import AddEmployee from "./pages/employeemanagement/AddEmployee.jsx";
import EditEmployee from "./pages/employeemanagement/EditEmployee.jsx";
// import DeleteEmployee from "./pages/employeemanagement/DeleteEmployee.jsx";
import ResignedEmployeeList from "./pages/employeemanagement/ResignedEmployeeList.jsx";
import FiredEmployeeList from "./pages/employeemanagement/FiredEmployeeList.jsx";
import RequestResignation from "./pages/employeemanagement/RequestResignation.jsx"
import TerminationPendingList from "./pages/employeemanagement/TerminationPendingList.jsx"
import RejectedRequestPage from "./pages/employeemanagement/RejectedRequestPage.jsx";










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
import IsHome from "./pages/InventoryAndSupplier/IsHome.jsx";









/* Gihan */
import ChequeSubmit from './pages/salarymanager/ChequeSubmit.jsx';
import SalaryHistory from './pages/salarymanager/SalaryHistory.jsx';
import DeleteSalary from './pages/salarymanager/DeleteSalary.jsx';
import GenerateSalary from './pages/salarymanager/GenerateSalary.jsx';
import ViewSalary from './pages/salarymanager/ViewSalary.jsx';
import EditSalaryBalance from './pages/salarymanager/EditSalaryBalance.jsx';
import Payment from './pages/OnlinnePayment/Payment.jsx';
import SlipUpload from './pages/OnlinnePayment/SlipUpload.jsx';
import PaymentSucc from './pages/OnlinnePayment/PaymentSucc.jsx';
import SalaryTable from './pages/salarymanager/SalaryTable.jsx'















/* Sageevan */
import QualityControl from './pages/QualityControl/QualityControl.jsx';
import AddFinalProduct from './pages/QualityControl/AddFinalProduct.jsx'
import ReviewRequest from './pages/QualityControl/ReviewRequest.jsx';
import EditFinalProduct from './pages/QualityControl/EditFinalProduct.jsx';
import DeleteFinalProduct from './pages/QualityControl/DeleteFinalProduct.jsx';
import PendingReview from './pages/QualityControl/PendingReview.jsx';
import AddReleaseProduct from './pages/QualityControl/AddReleaseProduct.jsx';
import ReleaseProduct from './pages/QualityControl/ReleaseProduct.jsx';
import AddReview from './pages/QualityControl/AddReview.jsx';
import ReviewReport from './pages/QualityControl/ReviewReport.jsx';
import RejectProduct from './pages/QualityControl/RejectProduct.jsx';








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
import EditMachinepart from './pages/InventoryAndSupplier/EditMpart.jsx';


















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











       {/* varagan */} 
      <Route path="/LoginEmp" element={<LoginEmp />} />
      <Route path="/LoginCus" element={<LoginCus />} />
      <Route path="/RegisCus" element={<RegisCus />} />
      <Route path="/RegisEmp" element={<RegisEmp />} />
      <Route path="/CusProfile" element={<CusProfile />} />

      




      {/* Sandithi */}

      <Route path="/HrDashboard" element={<HrDashboard />} />
      <Route path="/employees/CurrentEmployeeList" element={<CurrentEmployeeList />}/>
      <Route path="/employees/AddEmployee" element={<AddEmployee />} />
      <Route path="/employees/EditEmployee/:id" element={<EditEmployee />} />
      <Route path="/resign/ResignEmployeeList" element={<ResignedEmployeeList />} />
      <Route path="/resign/FiredEmployeeList" element={<FiredEmployeeList />} />
      <Route path="/resign/RequestResignation" element={<RequestResignation />} />
      <Route path="/resign/TerminationPendingList" element={<TerminationPendingList />} />
      <Route path="/resign/RejectedRequestPage" element={<RejectedRequestPage />}/>




 



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
      <Route path= "/IsHome" element = {<IsHome/>} />














      {/* Sageevan */}
      <Route path="/qualityControl" element={<QualityControl />} />
      <Route path="/qualityControl/reviewRequest/add" element={<AddFinalProduct />} />
      <Route path="/qualityControl/reviewRequest" element={<ReviewRequest />} />
      <Route path="/qualityControl/reviewRequest/edit/:id" element={<EditFinalProduct />} />
      <Route path="/qualityControl/reviewRequest/delete/:id" element={<DeleteFinalProduct />} />
      <Route path="/qualityControl/reviewRequest/pendingRequest" element={<PendingReview />} />
      <Route path="/qualityControl/releaseProduct/addReleaseProduct" element={<AddReleaseProduct />} />
      <Route path="/qualityControl/releaseProduct" element={<ReleaseProduct />} />
      <Route path="/qualityControl/reviewRepor/addReview" element={<AddReview />} />
      <Route path="/qualityControl/reviewReport" element={<ReviewReport />} />
      <Route path="/qualityControl/rejectProduct" element={<RejectProduct />} />










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
      <Route path="/repairs" element={<MaintenanceHome />} />
      <Route path="/repairs/create" element={<CreateRepairRequests />} />
      <Route path="/repairs/view" element={<ViewRepairs />} />
      <Route path="/repairs/edit/:id" element={<EditReapairs />} />
      <Route path="/repairs/delete/:id" element={<DeleteRepairs />} />
      <Route path="/machines/view" element={<ViewMachines />} />
      <Route path="/mpshortages/view" element={<ViewMPshortages />} />





















      {/* Gihan */}
      <Route path="/ChequeSubmit/:id" element={<ChequeSubmit />} />
      <Route path="/SalaryHistory" element={<SalaryHistory />} />
      <Route path="/DeleteSalary/:id" element={<DeleteSalary />} />
      <Route path="/GenerateSalary/:id" element={<GenerateSalary />} />
      <Route path="/ViewSalary/:id" element={<ViewSalary />} />
      <Route path="/EditSalaryBalance/:id" element={<EditSalaryBalance />} />
      <Route path="/Payment/:id" element={<Payment />} />
      <Route path="/SlipUpload/:id" element={<SlipUpload />} />
      <Route path="/PaymentSucc/:id" element={<PaymentSucc />} />
      <Route path="/SalaryTable" element={<SalaryTable />} />
     
      
      
      
      



















      
    
    
    </Routes>
  );
};


export default App
