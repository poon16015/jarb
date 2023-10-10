
import React, { Component,useState } from 'react';
import './cuspc.css';
import cpu from "../assets/1.png";
import gpu from "../assets/2.png";
import ssd from "../assets/3.png";
import ram from "../assets/4.png";
import hdd from "../assets/5.png";
import mainB from "../assets/6.png";
import moni from "../assets/7.png";
import Mouse from "../assets/8.png";
import keyB from "../assets/9.png";
import powerS from "../assets/10.png";
import cooller from "../assets/11.png";
import Ccase from "../assets/12.png";
import logo from "../assets/logoJarb.png";


import {useCallback} from "react";
import { Link } from "react-router-dom";


import point from "../assets/3point.png";
import account_icon from "../assets/account icon.png";
import cart from "../assets/cart.png";
import jarb from "../assets/jarb icon.png";
import jarb_wb from "../assets/jarb icon(wb).png";
import glass from "../assets/magnifying glass.png";

var Ncpu = ""
var Ngpu = ""
var Nssd = ""
var Nhdd = ""
var NmainB = ""
var Nmoni = ""
var NMouse = ""
var NkeyB = ""
var NpowerS = ""
var Ncooller = ""
var NCcase =""
 
var pricetotal = ""

const SelectBar = () => {
  const JarbClick = useCallback(() => {
    //  sync "product" to the project
  }, []);
  const ContactClick = useCallback(() => {
    window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0");
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const SearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  
  const SearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  
  
  return (
<div className='layout'>
  <div className='head'>
      <div className='headbar'>
        <div className='logo'>
        <span style={{width:'40%'}}></span>
            <Link to="/register">
              <img alt="" src={jarb}/>
            </Link>
          </div>
      <div className='boxSearchbar'>
          <input placeholder='i love you'/> 
          <button >
             <img  alt=""
        src={glass} 
        onClick={SearchSubmit} />
          </button>
      </div>
      
      <div className='boxcart'>
      <Link to="/register">
              <img alt="" src={cart}/> 
      </Link>
      <Link to="/register" style={{textDecoration: "none"}}>
              <p style={{marginLeft:"-30px",textDecoration: "none",color:'white'}}>cart</p>
      </Link>
        <span style={{width:'10%'}}></span>
        <img alt="" src={point} style={{width:'3%'}}/>
        <span style={{width:'10%'}}></span>
        <Link to="/register">
        <img alt="" src={account_icon} style={{width:'70%'}}/>
        </Link>
        <Link to="/register" style={{textDecoration: "none"}}>
              <p style={{marginLeft:"0px",textDecoration: "none",color:'white'}}>my acc</p>
        </Link>
      </div>    
    </div>
  </div>
  
  <div className='optionbar'>
      <div className='bread'>
         <div className='breadcrumb'>
           <a style={{margin:"2px 0px 0px 10px"}}>Home &gt;</a>
           <a style={{margin:"2px 0px 0px 5px",color:"gray"}}> CustomPC  </a>
         </div>
         <div className='option'>
           <span style={{width:'60%'}}></span>
            <button className='contact'style={{textAlign:'start'}} onClick={ContactClick}>
                ติดต่อ <img alt="" src={jarb_wb} style={{width:'60%'}}/>
            </button>
            <span style={{width:'1%'}}></span>
            <button className='contact' style={{textAlign:'end'}}>
             <span style={{width:'28%'}}></span> สินค้า
            </button>


         </div>
      </div>
    
    </div>
  <div className='byslam'>
    <div className='sider'>
        <div className='totalbar'>
          <div className='totalprice'>
               Total
               </div>
            <div className='pricetotal'>
            <span className='total'>  999999  </span>
          </div> 
        </div>

        <a className='sider-item'>
              <div className='iconbox'>
                <img src={cpu} alt="cpu" style={{ width:"100%" , minHeight:'100%'}} />      
                    <a className='detail' placeholder={"Cpu"} style={{marginLeft: "5px"}}>
                    </a>
              </div>
              <div className='detailbox'>
                { 
                (Ncpu == "")? "cpu":Ncpu}
              
              </div>
              <div className='Boxprice'>
                  <p className='price'>
                      9000

                  </p>

              </div>
      
        </a>
        
        <a className='sider-item'>
              <div className='iconbox'>
                <img src={gpu} alt="gpu" style={{ width:"100%" , minHeight:'100%'}} />      
                    <a className='detail' placeholder={"Cpu"} style={{marginLeft: "5px"}}>
                    </a>
              </div>
              <div className='detailbox'>
              { 
                (Ngpu == "")? "gpu":Ngpu}
              </div>
        </a>

        <a className='sider-item'>
              <div className='iconbox'>
                <img src={ssd} alt="ssd" style={{ width:40 , marginTop: "5px"}} />      
                    <a className='detail' placeholder={"Cpu"} style={{marginLeft: "5px"}}>
                    </a>
              </div>
              <div className='detailbox'>
                { 
                }
              ssd 
              </div>
        </a>

        <a className='sider-item'>
              <div className='iconbox'>
                <img src={ram} alt="ram" style={{ width:40 , marginTop: "5px"}} />      
                    <a className='detail' placeholder={"Cpu"} style={{marginLeft: "5px"}}>
                    </a>
              </div>
              <div className='detailbox'>
                { 
                }
              ram 
              </div>
        </a>

        <a className='sider-item'>
              <div className='iconbox'>
                <img src={hdd} alt="hdd" style={{ width:40 , marginTop: "5px"}} />      
                    <a className='detail' placeholder={"Cpu"} style={{marginLeft: "5px"}}>
                    </a>
              </div>
              <div className='detailbox'>
                { 
                }
              hdd 
              </div>
        </a>

        <a className='sider-item'>
              <div className='iconbox'>
                <img src={mainB} alt="mainB" style={{ width:35 ,height:35, marginTop: "7px", marginLeft:'4px'}} />      
                    <a className='detail' placeholder={"Cpu"} style={{marginLeft: "5px"}}>
                    </a>
              </div>
              <div className='detailbox'>
                { 
                }
              mainB 
              </div>
        </a>

        <a className='sider-item'>
              <div className='iconbox'>
                <img src={moni} alt="moni" style={{ width:40 , marginTop: "5px"}} />      
                    <a className='detail' placeholder={"Cpu"} style={{marginLeft: "5px"}}>
                    </a>
              </div>
              <div className='detailbox'>
                { 
                }
              moni 
              </div>
        </a>
        
        <a className='sider-item'>
              <div className='iconbox'>
                <img src={Mouse} alt="Mouse" style={{ width:40 , marginTop: "5px"}} />      
                    <a className='detail' placeholder={"Cpu"} style={{marginLeft: "5px"}}>
                    </a>
              </div>
              <div className='detailbox'>
                { 
                }
              Mouse 
              </div>
        </a>

        <a className='sider-item'>
              <div className='iconbox'>
                <img src={keyB} alt="keyB" style={{ width:40 , marginTop: "5px"}} />      
                    <a className='detail' placeholder={"Cpu"} style={{marginLeft: "5px"}}>
                    </a>
              </div>
              <div className='detailbox'>
                { 
                }
              keyB 
              </div>
        </a>

        <a className='sider-item'>
              <div className='iconbox'>
                <img src={cooller} alt="cooller" style={{ width:40 , marginTop: "5px"}} />      
                    <a className='detail' placeholder={"Cpu"} style={{marginLeft: "5px"}}>
                    </a>
              </div>
              <div className='detailbox'>
                { 
                }
              cooller 
              </div>
        </a>

        <a className='sider-item'>
              <div className='iconbox'>
                <img src={powerS} alt="powerS" style={{ width:40 , marginTop: "5px"}} />      
                    <a className='detail' placeholder={"Cpu"} style={{marginLeft: "5px"}}>
                    </a>
              </div>
              <div className='detailbox'>
                { 
                }
              powerS 
              </div>
        </a>

        <a className='sider-item'>
              <div className='iconbox'>
                <img src={Ccase} alt="Ccase" style={{ width:40 , marginTop: "5px"}} />      
                    <a className='detail' placeholder={"Cpu"} style={{marginLeft: "5px"}}>
                    </a>
              </div>
              <div className='detailbox'>
                { 
                }
              Ccase 
              </div>
        </a>







    </div>
    <div className='contentP'>
    
          <div className='prouct-container'>
              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggdfaggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>
              

              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>
              
              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>
              
              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>
              
              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>
              
              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>

              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>
              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>
              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>
              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>
              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>
              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>
              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>
              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>
              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>
              <div className='prouct-item'>
              <div className='product-detail'>
                  fdfadfadgggggggggkkkkkkkkkkgggggggggggggggggggggggggdggggggg
              </div>
                
                <div className='product-image'>
                    <img  src={logo} alt="Logo" style={{width:'100%'}}/>
                </div>
                <div className='pricegrid'>
                  ราคา {Ncpu}
                  
                </div>
                <div className='selectB'>
                <button className='CustomBut'>
                  CUSTOM
                </button>
                <span style={{width:'7%'}}></span>
                <button className='ProductInfo'>
                  INFO
                </button>
                </div>
              </div>
              
              

             

          </div>
    </div>
    </div>
  
   
</div>

  )
}

export default SelectBar