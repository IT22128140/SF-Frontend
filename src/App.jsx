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
import RMRequests from './pages/productionManager/RMRequests.jsx';
import CreatermRequests from './pages/productionManager/CreatermRequests.jsx';
import ViewrmRequests from './pages/productionManager/ViewrmRequests.jsx';
import UpdatermRequests from './pages/productionManager/UpdatermRequests.jsx';
import DeletermRequests from './pages/productionManager/DeletermRequests.jsx';





















/* Hiranya */























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
      <Route path= '/' element = {<RMRequests/>} />
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