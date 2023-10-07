import { useCallback } from "react";
import { Link } from 'react-router-dom';

import twohr from "../assets/2hr.png";
import undertab from "../assets/undertab.png";
import Navbar from "./Navbar";

function Cart() {
    return (
        <div
      style={{
        textAlign: "left",
        fontSize: "24px",
        color: "#000",
        fontFamily: "Inter",
      }}
    >
      <Navbar/>
      <div
        style={{
          position: "absolute",
          top: "260px",
          left: "58px",
          width: "895px",
          height: "557px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            backgroundColor: "#d9d9d9",
            border: "3px solid #000",
            boxSizing: "border-box",
            width: "895px",
            height: "90px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            backgroundColor: "rgba(217, 217, 217, 0)",
            border: "3px solid #000",
            boxSizing: "border-box",
            width: "895px",
            height: "557px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "17px",
            left: "25px",
            fontSize: "48px",
            display: "inline-block",
            width: "286px",
          }}
        >
          ตะกร้าสินค้า
        </div>
        <div
          style={{
            position: "absolute",
            top: "130px",
            left: "30px",
            display: "inline-block",
            width: "88px",
          }}
        >
          รูปสินค้า
        </div>
        <div
          style={{
            position: "absolute",
            top: "166.5px",
            left: "14.72px",
            borderTop: "1px solid #000",
            boxSizing: "border-box",
            width: "801px",
            height: "1px",
          }}
        />
        <div style={{ position: "absolute", top: "130px", left: "177px" }}>
          รหัสสินค้า
        </div>
        <div style={{ position: "absolute", top: "130px", left: "345px" }}>
          ชื่อสินค้า
        </div>
        <div style={{ position: "absolute", top: "130px", left: "500px" }}>
          ราคา
        </div>
        <div style={{ position: "absolute", top: "130px", left: "621px" }}>
          จำนวน
        </div>
        <div style={{ position: "absolute", top: "130px", left: "760px" }}>
          ลบ
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "260px",
          left: "1211px",
          width: "415px",
          height: "384px",
          fontSize: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            backgroundColor: "#fff",
            border: "3px solid #000",
            boxSizing: "border-box",
            width: "415px",
            height: "384px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            backgroundColor: "#d9d9d9",
            border: "3px solid #000",
            boxSizing: "border-box",
            width: "415px",
            height: "90px",
          }}
        />
        <div style={{ position: "absolute", top: "16px", left: "74px" }}>
          ข้อมูลคำสั่งซื้อ
        </div>
        <div
          style={{
            position: "absolute",
            top: "121px",
            left: "24px",
            fontSize: "24px",
          }}
        >{`รวมทั้งหมด (บาท)   `}</div>
        <div
          style={{
            position: "absolute",
            top: "111.5px",
            left: "10.49px",
            borderTop: "1px solid #000",
            boxSizing: "border-box",
            width: "373.02px",
            height: "1px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "158.5px",
            left: "10.5px",
            borderTop: "1px solid #000",
            boxSizing: "border-box",
            width: "373.02px",
            height: "1px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "206px",
            left: "9px",
            width: "398px",
            height: "154px",
            objectFit: "cover",
          }}
          alt=""
          src={twohr}
        />
      </div>
      <div
            style={{
              position: "absolute",
              top: "876px",
              left: "750px",
              width: "203px",
              height: "56px",
              color: "#fff",
              backgroundColor: "#2d3d92",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              cursor: "pointer",
              fontSize: "23px",  
              fontWeight: "bold",  
              lineHeight: "2.4",
              textAlign: "center",
            }}
        >
            <Link to="/product" style={{ textDecoration: 'none', color: 'white', width: '100%', height: '100%' }}>
                {`<    เลือกสินค้า`}
            </Link>
        </div>
      <div
            style={{
                position: "absolute",
                top: "876px",
                left: "974px",
                width: "203px",
                height: "56px",
                color: "#fff",
                backgroundColor: "#2d3d92",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                cursor: "pointer",
                fontSize: "23px",  
                fontWeight: "bold",  
                lineHeight: "2.4",
                textAlign: "center",
            }}
        >
            <Link to="/address" style={{ textDecoration: 'none', color: 'white', width: '100%', height: '100%' }}>
                {'ที่อยู่จัดส่ง      >'}
            </Link>
        </div>
      <img
        style={{
          position: "absolute",
          top: "976px",
          left: "254px",
          width: "1397px",
          height: "85px",
          objectFit: "cover",
        }}
        alt=""
        src={undertab}
      />
    </div>
    );
  }
  
  export default Cart;