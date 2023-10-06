import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Cart from './pages/Cart';
import Address from './pages/Address';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
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
