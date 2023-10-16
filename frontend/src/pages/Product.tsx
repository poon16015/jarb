import React, { useState ,useEffect} from 'react';
import product1 from '../assets/laptop.webp';
import "../style/productStyle.css"
import { ProductInterface } from '../interfaces/IProduct';
import {GetProduct} from '../services/https/productIndex';
import { Link } from 'react-router-dom';
function Product() {
    const [products, setProdcuts] = useState<ProductInterface[]>([]);
    const getProduct = async () => {
      let res = await GetProduct();
      if (res) {
        setProdcuts(res);
      }
      };
      useEffect(() => {
        getProduct();
        }, []);
  return (
      <div className="container_product" >
        <div className="product_con">
          <div className="product_item">
            <div className="product_img">
              <img src ={product1}/>
            </div>  
              <div className='button' > 
                ซื้อเลย
              </div>
              <div className='product_name' >
                Laptop VICTUS Pro max
              </div>  
                <div className="product_detail">
                  dfdfdfdfdfddferjtio3erkfdsdsdsd
                  dssdsdssdsdsddddsdsdssds
                  <div className="product_price">
                    -35000 bath
                    </div>
              </div>       
          </div>           
        </div>      
      </div>
     
      
  );
}
export default Product;