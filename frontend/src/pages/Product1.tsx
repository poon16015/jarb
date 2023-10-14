import React from 'react';
import Product from './Product';
import Sitebar from './Sitebar';
import Navbar from './Navbar';
import "../style/productStyle.css"

function Product1() {
  return (
      
      <div>
         <Navbar/>
         <Sitebar/>
         <Product/>   
      </div>
  );
}

export default Product1;