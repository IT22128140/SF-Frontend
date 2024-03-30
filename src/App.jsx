// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom'
/* Maneth */
// import Home from './pages/Home.jsx';
// import Login from './pages/Login.jsx';



















/*Sandithi */





















/* Isuru */





















/* Gihan */





















/* Sageevan */



















/* Ridmi */





















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

      {/* <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} /> */}




















      {/* Sandithi */}
   





















      {/* Isuru*/}






















      {/* Sageevan */}






















      {/* Ridmi */}






















      {/* Hiranya */}

      <Route path='./repairs' element={<MaintenanceHome/>} />
      <Route path='./repairs/create' element={<CreateRepairRequests/>} />
      <Route path='/' element={<ViewRepairs/>} />
      <Route path='./repairs/edit/:id' element={<EditReapairs/>} />
      <Route path='./repairs/delete/:id' element={<DeleteRepairs/>} />





















      {/* Gihan */}























    </Routes>
  )
}

export default App