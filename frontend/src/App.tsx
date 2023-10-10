import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Address from './pages/Address';
import CustomPC from './pages/CustomPC';
import Product from './pages/Product1';
import AddAddress from './pages/AddAddress';
import Member1 from './pages/Member1';
import Member2 from './pages/Member2';
import History from './pages/History';
import Bank from './pages/Bank';

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/addaddress" element={<AddAddress />} />
        <Route path="/member1" element={<Member1 />} />
        <Route path="/member2" element={<Member2 />} />
        <Route path="/history" element={<History />} />
        <Route path="/customPC" element={<CustomPC />} />
        <Route path="/payment" element={<Bank />} />
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
