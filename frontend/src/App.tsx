/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Address from './pages/Address';
import AddAddress from './pages/AddAddress';
import Product from './pages/Product1';
import Member1 from './pages/Member1';
import Member2 from './pages/Member2';
import History from './pages/History';
import Bank from './pages/Bank';
import ConfirmQR from './pages/ConfirmQR';
import ConfirmSCB_Bank from './pages/ConfirmSCB_Bank';
import ConfirmBangkok_Bank from './pages/ConfirmBangkok_Bank';
import ConfirmKasikorn_Bank from './pages/ConfirmKasikorn_Bank';
import ConfirmKrungsri_Bank from './pages/ConfirmKrungsri_Bank';
import ConfirmKasikorn_Credit from './pages/ConfirmKasikorn_Credit';
import ConfirmKTC_Credit from './pages/ConfirmKTC_Credit';
import ConfirmAmerican_Credit from './pages/ConfirmAmerican_Credit';
import ProductLaptop1 from './pages/ProductLaptop1';
import ProductMandK1 from './pages/ProductMandK1';
import ProductMonitor1 from './pages/ProductMonitor1';
import ProductProcesser1 from './pages/ProductProcesser1';
import ProductStoreage1 from './pages/ProductStoreage1';
import CustomPC from './pages/CustomPC';

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path='/productLaptop1' element={<ProductLaptop1 />}/>
        <Route path='/ProductMandK1' element={<ProductMandK1 />}/>
        <Route path='/productMonitor1' element={<ProductMonitor1 />}/>
        <Route path='/productProcesser1' element={<ProductProcesser1 />}/>
        <Route path='/productStroage1' element={<ProductStoreage1 />}/>
        <Route path='/customPC' element={<CustomPC />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/addaddress" element={<AddAddress />} />
        <Route path="/member1" element={<Member1 />} />
        <Route path="/member2" element={<Member2 />} />
        <Route path="/history" element={<History />} />
        <Route path="/payment" element={<Bank />} />
        <Route path="/ConfirmQR" element={<ConfirmQR />} />
        <Route path="/ConfirmSCB_Bank" element={<ConfirmSCB_Bank />} />
        <Route path="/ConfirmBangkok_Bank" element={<ConfirmBangkok_Bank />} />
        <Route path="/ConfirmKasikorn_Bank" element={<ConfirmKasikorn_Bank />} />
        <Route path="/ConfirmKrungsri_Bank" element={<ConfirmKrungsri_Bank />} />
        <Route path="/ConfirmKasikorn_Credit" element={<ConfirmKasikorn_Credit />} />
        <Route path="/ConfirmKTC_Credit" element={<ConfirmKTC_Credit />} />
        <Route path="/ConfirmAmerican_Credit" element={<ConfirmAmerican_Credit />} />


      </Routes>
    </Router>
  )
}
export default App;



//test

// import Navbar from './pages/Navbar';
// import Address from './pages/Address';

// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Address/>
//     </div>
//   );
// }

// export default App;