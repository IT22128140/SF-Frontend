// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom'
/* Maneth */
import Home from './pages/onlinestore/Home.jsx';
import Login from './pages/onlinestore/Login.jsx';
import ProductPage from './pages/onlinestore/ProductPage.jsx';
import Cart from './pages/onlinestore/Cart.jsx';
import Checkout from './pages/onlinestore/Checkout.jsx';
import Addresses from './pages/onlinestore/Addresses.jsx';
import Catalogue from './pages/onlinestore/Catalogue.jsx';















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






















      {/* Gihan */}























    </Routes>
  )
}

export default App