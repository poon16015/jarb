import "../style/productStyle.css"
import a1 from "../assets/1.png" ;

import { ProductInterface } from '../interfaces/IProduct';
import {GetProduct} from '../services/https/productIndex';



function ProductMandK() {
  return (
      <div className="container_product" >
        <div className="product_con">
          <div className="product_item">
            <div className="product_img">
              <img src ={a1}/>
            </div>  
              <div className='button'> 
                ซื้อเลย
              </div>
              <div className='product_name'>
                Laptop VICTUS Pro max
              </div>  
                <div className="product_detail">
                  dfdfdfdfdfddferio3erkfdsdsdsd
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
export default ProductMandK;