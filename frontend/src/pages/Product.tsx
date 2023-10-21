import React, { useState ,useEffect,FC} from 'react';
import product1 from '../assets/laptop.webp';
import "../style/productStyle.css"
import axios from 'axios';
import { ProductInterface } from '../interfaces/IProduct';
import {GetProduct} from '../services/https/productIndex';
import { ProductService } from '../services/https/ProductService';

// interface IState {
//   loading:boolean,
//   products: ProductInterface[],
//   errorMsg:string
// }

// const Product : React.FC = () => {
//   const [product, setProduct] = useState<ProductInterface[]>([]);




//   const [state,setState] = useState<IState>({
//     loading :false,
//     products:[] as ProductInterface[],
//     errorMsg:''
//   });

//   //network request
//   useEffect(() => {
//     setState({...state,loading:true})
//     ProductService.getAllProduct()
//     .then((res) => 
//       setState({
//         ...state,
//         loading : false,
//         products :res.data,
//       }))
      
      
//     .catch((err) =>
//       setState({
//         ...state,
//         loading:false,
//         errorMsg :err.message,
//       }));
//     //
//   },[]);

//   const {loading,products,errorMsg} = state
//   return (
//       <>
//         <div className='container'>
//           <h1>Data From API</h1>
//           {errorMsg && (<p>{errorMsg}</p>)}
//           {loading && <h1>Loading</h1>}
//           <table>
//             <thead>
//                 <tr>
//                   <td>ID</td>
//                   <td>name</td>
//                   <td>Imgp</td>
//                   <td>des</td>

//                 </tr>
//             </thead> 
//             <tbody>
//                 {
//                   products.length >0 && products.map( pro => (
//                     <tr key={pro.ID}>
//                       <td>{pro.ID}</td>
//                       <td>{pro.Name_p}</td>
//                       <td>{pro.Price}</td>
//                       <td>{pro.Description}</td>
//                     </tr>
//                   ))                                                           
//                 }
//             </tbody>
            
//           </table>
//         </div>
       
//       </>
      

      // <div className="container_product" >
      //   <div className="product_con">
      //     <div className="product_item">
      //       <div className="product_img">
      //         <img src ={product1}/>
      //       </div>  
      //         <div className='button' > 
      //           ซื้อเลย
      //         </div>
      //         <div className='product_name' >
      //           Laptop VICTUS Pro max
      //         </div>  
      //           <div className="product_detail">
      //             dfdfdfdfdfddferjtio3erkfdsdsdsd
      //             dssdsdssdsdsddddsdsdssds
      //             <div className="product_price">
      //               -35000 bath
      //               </div>
      //         </div>       
      //     </div>           
      //   </div>      
      // </div>
//   );
// }
// function Product() {
//   const [products, setProducts] = useState<ProductInterface[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await GetProduct();
//         if (response) {
//           setProducts(response);
//         }
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container_product">
//       {products.map(product => (
//         <div className="product_con" key={product.ID}>
//           <div className="product_item">
//             <div className="product_img">
//               <img src={product.Imgp} alt={product.Name_p} />
//             </div>
//             <div className='button'>
//               ซื้อเลย
//             </div>
//             <div className='product_name'>
//               {product.Name_p}
//             </div>
//             <div className="product_detail">
//               {product.Description}
//               <div className="product_price">
//                 - {product.Price} bath
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }



function Product() {
  const [product,setProduct]= useState<ProductInterface[]>([]);
  product:[] as ProductInterface[]
  useEffect(()=>{
    fetch('http://localhost/PHP-API/read.php')
    .then(res =>res.json())
    .then(data => setProduct(data))
    .catch(err => console.log(err))
    
  },[])
     
        
      return (
      <div className="container_product" > 
          {product.map((list,index)=> 
        <div className="product_con">
          <div className="product_item">
            <div className="product_img">
              <img src ={list.Imgp}/>
            </div>  
              <div className='button' > 
                ซื้อเลย
              </div>
              <div className='product_name' >
              {list.Name_p}
              </div>  
                <div className="product_detail">
                  {list.Description}
                  <div className="product_price">
                    {list.Price} bath
                    </div>
              </div>       
          </div>           
        </div>      
           )}
      </div>
  );
 
 
}










export default Product;