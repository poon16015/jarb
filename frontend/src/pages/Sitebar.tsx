import React from "react";
import "../style/sitebarStyle.css"
 

function Sitebar() {
    return(
        <div className="sitebar">
            <h1 className="head">หมวดหมู่สินค้า</h1>
            <a href="#" className="active">Laptop</a>
            <a href="#" >หน้าจอคอม</a>
            <a href="#" >คีย์บอร์ด เเละ  เมาส์</a>
            <a href="#" >อุปกรณ์จัดเก็บข้อมูล</a>
 
            
        </div>
    );
}

export default Sitebar;