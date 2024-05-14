// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";



/* Maneth */
import Home from './pages/onlinestore/Home.jsx';
import ProductPage from './pages/onlinestore/ProductPage.jsx';
import Cart from './pages/onlinestore/Cart.jsx';
import Checkout from './pages/onlinestore/Checkout.jsx';
import Addresses from './pages/onlinestore/Addresses.jsx';
import Catalogue from './pages/onlinestore/Catalogue.jsx';
import Orders from "./pages/onlinestore/Orders.jsx";
import OngoingOrders from "./pages/onlinestoremanagement/OngoingOrders.jsx";
import CompletedOrders from "./pages/onlinestoremanagement/CompletedOrders.jsx";
import StoreManagerDashboard from "./pages/onlinestoremanagement/StoreManagerDashboard.jsx";








 /* varagan */
 import LoginEmp from './pages/LoginEmp.jsx';
 import LoginCus from './pages/LoginCus.jsx';
 import RegisCus from './pages/RegisCus.jsx';
 import RegisEmp from './pages/RegisEmp.jsx';
 import ProfileCus from './pages/ProfileCus.jsx';
 import ProfileEmp from './pages/ProfileEmp.jsx';
 import EditProfileCus from './pages/EditProfileCus.jsx';
 import EditProfileEmp from './pages/EditProfileEmp.jsx';
 import FeedbackForm from './pages/FeedbackForm.jsx';
 import FeedbackManage from './pages/FeedbackManage.jsx';
 
 



/*Sandithi */
import HrDashboard from "./pages/employeemanagement/HrDashboard.jsx";
import CurrentEmployeeList from "./pages/employeemanagement/CurrentEmployeeList.jsx";
import AddEmployee from "./pages/employeemanagement/AddEmployee.jsx";
import EditEmployee from "./pages/employeemanagement/EditEmployee.jsx";
import ResignedEmployeeList from "./pages/employeemanagement/ResignedEmployeeList.jsx";
import FiredEmployeeList from "./pages/employeemanagement/FiredEmployeeList.jsx";
import RequestResignation from "./pages/employeemanagement/RequestResignation.jsx"
import TerminationPendingList from "./pages/employeemanagement/TerminationPendingList.jsx"
import RejectedRequestPage from "./pages/employeemanagement/RejectedRequestPage.jsx";
import AttendancePage from "./pages/employeemanagement/AttendancePage.jsx";
import QrCodeScanner from "./pages/QrCodeScanner.jsx";
import QrCodeDeparture from "./pages/QrCodeDeparture.jsx";
import EditRequestResignation from "./pages/employeemanagement/EditRequestResignation.jsx";








/* Isuru */

import SupplierDetails from './pages/InventoryAndSupplier/SupplierDetails.jsx';
import AddSuppliers from './pages/InventoryAndSupplier/AddSuppliers.jsx';
import DeleteSupplier from './pages/InventoryAndSupplier/DeleteSupplier.jsx';
import EditSuppliers from './pages/InventoryAndSupplier/EditSuppliers.jsx';
import SupplieredRaws from "./pages/InventoryAndSupplier/SupplieredRaws.jsx";
import DeleteSupplieredRaws from "./pages/InventoryAndSupplier/DeleteSupplieredRaws.jsx";
import MachinePartStock from './pages/InventoryAndSupplier/MachinePartStock.jsx';
import Addmachinepart from './pages/InventoryAndSupplier/AddMachinepart.jsx';
import EditMpart from './pages/InventoryAndSupplier/EditMpart.jsx';
import DeleteMparts from './pages/InventoryAndSupplier/DeleteMpart.jsx';
import RawMaterialStock from './pages/InventoryAndSupplier/RawMaterialStock.jsx';
import AddRMaterial from './pages/InventoryAndSupplier/AddRMaterial.jsx';
import EditRMstock from './pages/InventoryAndSupplier/EditRMstock.jsx';
import DeleteRMstock from './pages/InventoryAndSupplier/DeleteRMstock.jsx';
import AddSupplieredRaws from "./pages/InventoryAndSupplier/AddSupplieredRaws.jsx";
import Fullfillrequset from './pages/InventoryAndSupplier/Fullfillrequset.jsx';
import Popup from './pages/InventoryAndSupplier/Popup.jsx';
import IsHome from "./pages/InventoryAndSupplier/IsHome.jsx";
import Pendingshortsge from './pages/InventoryAndSupplier/ViewPendingShortage.jsx'
import AcceptedMPS from './pages/InventoryAndSupplier/AcceptedMPS.jsx'
import Viewshortage from './pages/InventoryAndSupplier/ViewShortage.jsx'
import Deleteshortage from './pages/InventoryAndSupplier/Deleteshortage.jsx'
import RMRequests from './pages/InventoryAndSupplier/RMRequests.jsx'
import ViewRawMaterialReq from './pages/InventoryAndSupplier/ViewRawMaterialReq.jsx'
import DeleteMPReq  from './pages/InventoryAndSupplier/DeleteMPReq';








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
import QualityControl from './pages/QualityControl/QualityControl.jsx';//Home
import AddFinalProduct from './pages/QualityControl/AddFinalProduct.jsx';//1reReq1/7
import ReviewRequest from './pages/QualityControl/ReviewRequest.jsx';//1reReq2/7
import EditFinalProduct from './pages/QualityControl/EditFinalProduct.jsx';//1reReq3/7
import DeleteFinalProduct from './pages/QualityControl/DeleteFinalProduct.jsx';//1reReq4/7
import ViewFinalProduct from "./pages/QualityControl/viewFinalProduct.jsx";//1reReq5/7
import PendingReview from './pages/QualityControl/PendingReview.jsx';//1reReq6/7
import AddReleaseProduct from './pages/QualityControl/AddReleaseProduct.jsx';//2Rel1/5
import ReleaseProduct from "./pages/QualityControl/ReleaseProduct.jsx";//2Rel2/5
import EditReleaseProduct from "./pages/QualityControl/EditReleaseProduct.jsx";//2Rel3/5
import DeleteReleaseProduct from "./pages/QualityControl/DeleteReleaseProduct.jsx";//2Rel4/5
import ViewReleaseProduct from './pages/QualityControl/viewReleaseProduct.jsx';//2Rel5/5
import AddReview from './pages/QualityControl/AddReview.jsx';//3Reviw1/5
import ReviewReport from './pages/QualityControl/ReviewReport.jsx';//3Reviw2/5
import ViewReviwReport from './pages/QualityControl/viewReviewReport.jsx';//3Reviw3/5
import ReviewActionRelease from './pages/QualityControl/ReviewActionRelease.jsx';//3Reviw4/5
import ReviewActionReject from './pages/QualityControl/ReviewActionReject.jsx';//3Reviw5/5
import AddRejectProduct from './pages/QualityControl/AddRejectProduct.jsx';//4Rject1/3
import RejectProduct from './pages/QualityControl/RejectProduct.jsx';//4Rject2/3
import AddReReview from './pages/QualityControl/AddReReview.jsx';//4Rject3/3








/* Ridmi */
import RawmRequests from './pages/productionManager/RawmRequests.jsx';
import CreatermRequests from './pages/productionManager/CreatermRequests.jsx';
import UpdatermRequests from './pages/productionManager/UpdatermRequests.jsx';
import DeletermRequests from './pages/productionManager/DeletermRequests.jsx';
import RawmDistributions from './pages/productionManager/RawmDistributions.jsx';
import CreatermDistributes from './pages/productionManager/CreatermDistributes.jsx';
import ViewrmDistributes from './pages/productionManager/ViewrmDistributes.jsx';
import UpdatermDistributes from './pages/productionManager/UpdatermDistributes.jsx';
import DeletermDistributes from './pages/productionManager/DeletermDistributes.jsx';
import EmployeePerformance from './pages/productionManager/EmployeePerformance.jsx';
import CreateEPReport from './pages/productionManager/CreateEPReport.jsx';
import ViewEPReport from './pages/productionManager/ViewEPReport.jsx';
import CompletedrmRequests from './pages/productionManager/CompletedrmRequests.jsx';
import PendingrmRequests from './pages/productionManager/PendingrmRequests.jsx';
import PMHome from "./pages/productionManager/PMHome.jsx";
import ViewPMRequests from './pages/productionManager/ViewPMRequests.jsx';
import GarmentProductList from "./pages/productionManager/GarmentProductList.jsx";
import AddProductList from "./pages/productionManager/AddProductList.jsx";
import EditProductList from "./pages/productionManager/EditProductList.jsx";


















/* Hiranya */
import MaintenanceHome from './pages/MaintenanceManager/MaintenanceHome.jsx';
import CreateRepairRequests from './pages/MaintenanceManager/CreateRepairRequests.jsx';
import EditReapairs from './pages/MaintenanceManager/EditRepairs.jsx';
import DeleteRepairs from './pages/MaintenanceManager/DeleteRepairs.jsx';
import ViewRepairs from './pages/MaintenanceManager/ViewRepairs.jsx';
import ViewMachines from './pages/MaintenanceManager/ViewMachines.jsx';
import ViewPendingMPshortages from './pages/MaintenanceManager/ViewPendingMPshortages.jsx';
import AcceptedShortages from './pages/MaintenanceManager/AcceptedShortages.jsx';
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
import MonthlyMaintenance from './pages/MaintenanceManager/MonthlyMaintenance.jsx';
import AddMaintenance from './pages/MaintenanceManager/AddMaintenance.jsx';
import MachineParts from './pages/MaintenanceManager/MachineParts.jsx';
import EditMachineParts from './pages/MaintenanceManager/EditMachineParts.jsx';
import ViewMaintenanceTracker from './pages/MaintenanceManager/ViewMaintenanceTracker.jsx'
import AboutUs from './components/AboutUs.jsx'




















const App = () => {
  return (
    <Routes>
      {/* Maneth */}
      <Route path="/HomeCus" element={<Home />} />
      <Route path="/ProductPage/:id" element={<ProductPage />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path='/Addresses' element={<Addresses/>} />
      <Route path='/Catalogue' element={<Catalogue/>} />
      <Route path='/Orders' element={<Orders/>} />
      <Route path='/OngoingOrders' element={<OngoingOrders/>} />
      <Route path='/CompletedOrders' element={<CompletedOrders/>} />
      <Route path='/Store_Manager' element={<StoreManagerDashboard/>} />







       {/* varagan */} 
       <Route path="/LoginEmp" element={<LoginEmp />} />
      <Route path="/LoginCus" element={<LoginCus />} />
      <Route path="/RegisCus" element={<RegisCus />} />
      <Route path="/RegisEmp" element={<RegisEmp />} />
      <Route path="/ProfileCus" element={<ProfileCus />} />
      <Route path="/ProfileEmp" element={<ProfileEmp />} />
      <Route path="/EditProfileCus" element={<EditProfileCus />} />
      <Route path="/EditProfileEmp" element={<EditProfileEmp />} />
      <Route path="/FeedbackForm" element={<FeedbackForm />} />
      <Route path="/FeedbackManage" element={<FeedbackManage />} />

      




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
      <Route path="/attendance/AttendancePage" element={<AttendancePage />} />
      <Route path="/QrCodeScanner" element={<QrCodeScanner />} />
      <Route path="/QrCodeDeparture" element={<QrCodeDeparture />} />
      <Route path="/resign/EditRequestResignation/:id" element={<EditRequestResignation />} />


 




      {/* Isuru*/}
      <Route path="/SupplierDetails" element={<SupplierDetails />} />
      <Route path="/SupplierDetails/AddSuppliers" element={<AddSuppliers />} />
      <Route path="/SupplierDetails/EditSuppliers/:id" element={<EditSuppliers />} />
      <Route path="/SupplierDetails/DeleteSupplier/:id" element={<DeleteSupplier />} />
      <Route path="/SupplierDetails/SupplieredRaws/:id" element={<SupplieredRaws />} />
      <Route path="/SupplierDetails/DeleteSupplieredRaws/:id" element={<DeleteSupplieredRaws />} />
      <Route path= '/MachinePartStock' element = {<MachinePartStock/>} />
      <Route path= '/MachinePartStock/AddMachinepart' element = {<Addmachinepart/>} />
      <Route path= "/MachinePartStock/EditMpart/:id" element = {<EditMpart/>} />
      <Route path= "/MachinePartStock/DeleteMparts/:id" element = {<DeleteMparts/>} />
      <Route path= '/RawMaterialStock' element = {<RawMaterialStock/>} />
      <Route path= '/RawMaterialStock/AddRMaterial' element = {<AddRMaterial/>} />
      <Route path= "/RawMaterialStock/EditRMstock/:id" element = {<EditRMstock/>} />
      <Route path= '/RawMaterialStock/DeleteRMstock/:id' element = {<DeleteRMstock/>} />
      <Route path='/Fullfillrequset' element= {<Fullfillrequset/>} />
      <Route path='/SupplierDetails/SupplieredRaws/AddSupplieredRaws' element= {<AddSupplieredRaws/>} />
      <Route path= "/Popup" element = {<Popup/>} />
      <Route path= "/IsHome" element = {<IsHome/>} />
      <Route path= "/Shortages/view" element = {<Pendingshortsge/>} />
      <Route path= "/Shortages/Accepted" element = {<AcceptedMPS/>} />
      <Route path= "/Shortages/Viewshortage/:id" element = {<Viewshortage/>} />
      <Route path= "/Shortages/delete/:id" element = {<Deleteshortage/>} />
      <Route path= "/RMRequests" element = {<RMRequests/>} />
      <Route path= '/RMRequests/details/:id' element = {<ViewRawMaterialReq/>} />
      <Route path= "/RMRequests/delete/:id" element = {<DeleteMPReq/>} />













{/* Sageevan */}
      <Route path="/qualityControl" element={<QualityControl />} />
      <Route path="/qualityControl/reviewRequest/add/:id" element={<AddFinalProduct />} />
      <Route path="/qualityControl/reviewRequest" element={<ReviewRequest />} />
      <Route path="/qualityControl/reviewRequest/edit/:id" element={<EditFinalProduct />} />
      <Route path="/qualityControl/reviewRequest/delete/:id" element={<DeleteFinalProduct />} />
      <Route path="/qualityControl/reviewRequest/view/:id" element={<ViewFinalProduct />} />
      <Route path="/qualityControl/reviewRequest/pendingRequest" element={<PendingReview />} />
      <Route path="/qualityControl/releaseProduct/addReleaseProduct/:id" element={<AddReleaseProduct />} />
      <Route path="/qualityControl/releaseProduct" element={<ReleaseProduct />} />
      <Route path="/qualityControl/releaseProduct/edit/:id" element={<EditReleaseProduct />} />
      <Route path="/qualityControl/releaseProduct/delete/:id" element={<DeleteReleaseProduct />} />
      <Route path="/qualityControl/releaseProduct/view/:id" element={<ViewReleaseProduct />} />
      <Route path="/qualityControl/reviewRepor/addReview/:id" element={<AddReview />} />
      <Route path="/qualityControl/reviewReport" element={<ReviewReport />} />
      <Route path="/qualityControl/reviewReport/actionRelease" element={<ReviewActionRelease />} />
      <Route path="/qualityControl/reviewReport/actionReject" element={<ReviewActionReject />} />
      <Route path="/qualityControl/reviewReport/view/:id" element={<ViewReviwReport />} />
      <Route path="/qualityControl/rejectProduct/addrejectProduct/:id" element={<AddRejectProduct />} />
      <Route path="/qualityControl/rejectProduct" element={<RejectProduct />} />
      <Route path="/qualityControl/rejectProduct/rereview/:id" element={<AddReReview />} />










      {/* Ridmi */}
      <Route path= '/RawmRequests' element = {<RawmRequests/>} />
      <Route path= '/rmRequests/create' element = {<CreatermRequests/>} />
      <Route path= '/rmRequests/edit/:id' element = {<UpdatermRequests/>} />
      <Route path= '/rmRequests/delete/:id' element = {<DeletermRequests/>} />
      <Route path= '/RawmDistributes' element= {<RawmDistributions/>}/>
      <Route path= '/rmDistributes/create' element = {<CreatermDistributes/>} />
      <Route path= '/rmDistributes/details/:id' element = {<ViewrmDistributes/>} />
      <Route path= '/rmDistributes/edit/:id' element = {<UpdatermDistributes/>} />
      <Route path= '/rmDistributes/delete/:id' element= {<DeletermDistributes/>}/>
      <Route path= '/EmployeePerformance' element={<EmployeePerformance/>}/>
      <Route path= '/empPerformances/create' element={<CreateEPReport/>}/>
      <Route path= '/empPerformances/details/:id' element={<ViewEPReport/>}/>
      <Route path= '/rmRequests/completed' element={<CompletedrmRequests/>}/>
      <Route path= '/rmRequests/pending' element={<PendingrmRequests/>}/>
      <Route path= '/Process_Manager' element = {<PMHome/>}/>
      <Route path= '/rmRequests/view/:id' element={<ViewPMRequests/>}/>
      <Route path= '/sfProduct' element={<GarmentProductList/>}/>
      <Route path= '/sfProduct/Add' element={<AddProductList/>}/>
      <Route path= '/sfProduct/edit/:id' element={<EditProductList/>}/>





















      {/* Hiranya */}

      <Route path='/repairs' element={<MaintenanceHome/>} />
      <Route path='/repairs/create' element={<CreateRepairRequests/>} />
      <Route path='/repairs/view' element={<ViewRepairs/>} />
      <Route path='/repairs/edit/:id' element={<EditReapairs/>} />
      <Route path='/repairs/delete/:id' element={<DeleteRepairs/>} />
      <Route path='/machines/view' element={<ViewMachines/>} />
      <Route path='/mpshortages/view' element={<ViewPendingMPshortages/>} />
      <Route path='/mpshortages/accepted' element={<AcceptedShortages/>} />
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
      <Route path='/repairs/report' element={<MonthlyMaintenance/>} />
      <Route path='/maintenance/create' element={<AddMaintenance/>} />
      <Route path='/machineParts/view' element={<MachineParts/>} />
      <Route path='/machineParts/edit/:id' element={<EditMachineParts/>} />
      <Route path='/maintenance/view/:MachineID' element={<ViewMaintenanceTracker/>} />
      <Route path='/aboutUs' element={<AboutUs/>} />
























{/* Gihan */}
<Route path="/ChequeSubmit/:id" element={<ChequeSubmit />} />
      <Route path="/SalaryHistory" element={<SalaryHistory />} />
      <Route path="/DeleteSalary/:id" element={<DeleteSalary />} />
      <Route path="/GenerateSalary/:id" element={<GenerateSalary />} />
      <Route path="/ViewSalary/:id" element={<ViewSalary />} />
      <Route path="/EditSalaryBalance/:id" element={<EditSalaryBalance />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/SlipUpload" element={<SlipUpload />} />
      <Route path="/PaymentSucc/:id" element={<PaymentSucc />} />
      <Route path="/SalaryTable" element={<SalaryTable />} />
     
      
      
      
      



















      
    
    
    </Routes>
  );
};


export default App
