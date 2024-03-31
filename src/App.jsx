// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom'



/* Maneth */
 import Home from './pages/Home.jsx';
 import Login from './pages/Login.jsx';



















/*Sandithi */





















/* Isuru */





















/* Gihan */

import ChequeSubmit from './pages/salarymanager/ChequeSubmit.jsx';
import SalaryHistory from './pages/salarymanager/SalaryHistory.jsx';
import DeleteSalary from './pages/salarymanager/DeleteSalary.jsx';
import GenerateSalary from './pages/salarymanager/GenerateSalary.jsx';
import ViewSalary from './pages/salarymanager/ViewSalary.jsx';














/* Sageevan */



















/* Ridmi */





















/* Hiranya */























const App = () => {
  return (
    <Routes>
      {/* Maneth */}

      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} /> 




















      {/* Sandithi */}
   





















      {/* Isuru*/}






















      {/* Sageevan */}






















      {/* Ridmi */}






















      {/* Hiranya */}






















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