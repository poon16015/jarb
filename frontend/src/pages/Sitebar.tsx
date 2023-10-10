import React from "react";
import "../style/sitebarStyle.css"
import { Link } from "react-router-dom";
 

function Sitebar() {
    return(
        <div className="sitebar">
            <h1 className="headproduct">หมวดหมู่สินค้า</h1>
            
            <a href="/ProductLaptop1" className="active" >Laptop</a>      
            <a href="/ProductMonitor1" >หน้าจอคอม</a>
            <a href="/ProductMandK1" >คีย์บอร์ด เเละ  เมาส์</a>
            <a href="/ProductStoreage1" >อุปกรณ์จัดเก็บข้อมูล </a>
            <a href="#" >หน่วยประมวลผล </a>
        </div>
    );
}



export default Sitebar;