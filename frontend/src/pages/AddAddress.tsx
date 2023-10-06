import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import undertab from "../assets/undertab.png";

function AddAddress() {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#fff",
        width: "100%",
        height: "1080px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "36px",
        color: "#000",
        fontFamily: "Inter",
      }}
    >
      <Navbar />
      <b
        style={{
          position: "absolute",
          top: "264px",
          left: "31px",
          display: "inline-block",
          width: "344px",
        }}
      >
        เพิ่มที่อยู่จัดส่งสินค้า
      </b>
      <div style={{ position: "absolute", top: "355px", left: "500px", fontSize: "30px", color: "#000" }}>ชื่อ-นามสกุล</div>
      <input
        type="text"
        placeholder="ชื่อ-นามสกุล"
        style={{
          position: "absolute",
          top: "350px",
          left: "1100px",
          transform: "translateX(-50%)",
          padding: "10px",
          fontSize: "24px",
          width: "850px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <div style={{ position: "absolute", top: "430px", left: "530px", fontSize: "30px", color: "#000" }}>บ้านเลขที่</div>
      <input
        type="text"
        placeholder="บ้านเลขที่"
        style={{
          position: "absolute",
          top: "420px",
          left: "1100px",
          transform: "translateX(-50%)",
          padding: "10px",
          fontSize: "24px",
          width: "850px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <div style={{ position: "absolute", top: "495px", left: "565px", fontSize: "30px", color: "#000" }}>จังหวัด</div>
      <input
        type="text"
        placeholder="จังหวัด"
        style={{
          position: "absolute",
          top: "490px",
          left: "1100px",
          transform: "translateX(-50%)",
          padding: "10px",
          fontSize: "24px",
          width: "850px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <div style={{ position: "absolute", top: "565px", left: "515px", fontSize: "30px", color: "#000" }}>เขต/อำเภอ</div>
      <input
        type="text"
        placeholder="เขต/อำเภอ"
        style={{
          position: "absolute",
          top: "560px",
          left: "1100px",
          transform: "translateX(-50%)",
          padding: "10px",
          fontSize: "24px",
          width: "850px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <div style={{ position: "absolute", top: "635px", left: "500px", fontSize: "30px", color: "#000" }}>แขนง/ตำบล</div>
      <input
        type="text"
        placeholder="แขนง/ตำบล"
        style={{
          position: "absolute",
          top: "630px",
          left: "1100px",
          transform: "translateX(-50%)",
          padding: "10px",
          fontSize: "24px",
          width: "850px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <div style={{ position: "absolute", top: "705px", left: "485px", fontSize: "30px", color: "#000" }}>รหัสไปรษณีย์</div>
      <input
        type="text"
        placeholder="รหัสไปรษณีย์"
        style={{
          position: "absolute",
          top: "700px",
          left: "1100px",
          transform: "translateX(-50%)",
          padding: "10px",
          fontSize: "24px",
          width: "850px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <div style={{ position: "absolute", top: "775px", left: "480px", fontSize: "30px", color: "#000" }}>เบอร์โทรศัพท์</div>
      <input
        type="text"
        placeholder="เบอร์โทรศัพท์"
        style={{
          position: "absolute",
          top: "770px",
          left: "1100px",
          transform: "translateX(-50%)",
          padding: "10px",
          fontSize: "24px",
          width: "850px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <Link
        to="/address"
        style={{
          position: "absolute",
          top: "840px",
          left: "990px",
          transform: "translateX(-50%)",
          backgroundColor: "#2d3d92",
          color: "#fff",
          padding: "10px 20px",
          fontSize: "24px",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        บันทึก
      </Link>
      <img
        style={{
          position: "absolute",
          top: "969px",
          left: "261px",
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

export default AddAddress;
