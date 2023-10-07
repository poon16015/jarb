import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Cart from './pages/Cart';
import Address from './pages/Address';
import AddAddress from './pages/AddAddress';
import Product from './pages/Product1';
import Member1 from './pages/Member1';
import Member2 from './pages/Member2';
import Member3 from './pages/Member3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/addaddress" element={<AddAddress />} />
        <Route path="/product" element={<Product />} />
        <Route path="/member1" element={<Member1 />} />
        <Route path="/member2" element={<Member2 />} />
        <Route path="/member3" element={<Member3 />} />


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
