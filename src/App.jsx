// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom'
/* Maneth */
import Home from './pages/Home.jsx';














 /* varagan */
 import LoginEmp from './pages/LoginEmp.jsx';
 import LoginCus from './pages/LoginCus.jsx';
 import RegisCus from './pages/RegisCus.jsx';
 import RegisEmp from './pages/RegisEmp.jsx';
 import CusProfile from './pages/CusProfile.jsx';
 



/*Sandithi */





















/* Isuru */





















/* Gihan */





















/* Sageevan */



















/* Ridmi */





















/* Hiranya */























const App = () => {
  return (
    <Routes>
      {/* Maneth */}

      <Route path="/" element={<Home />} />
      












       {/* varagan */} 
      <Route path="/LoginEmp" element={<LoginEmp />} />
      <Route path="/LoginCus" element={<LoginCus />} />
      <Route path="/RegisCus" element={<RegisCus />} />
      <Route path="/RegisEmp" element={<RegisEmp />} />
      <Route path="/CusProfile" element={<CusProfile />} />

      




      {/* Sandithi */}
   





















      {/* Isuru*/}






















      {/* Sageevan */}






















      {/* Ridmi */}






















      {/* Hiranya */}






















      {/* Gihan */}























    </Routes>
  )
}

export default App