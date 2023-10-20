import Navbar from "./Navbar";
import log_out from "../assets/log-out.png";
import user3 from "../assets/user (3).png";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
=======
import { Link } from 'react-router-dom';
import React, { useState, useEffect, FormEvent } from "react";
>>>>>>> ad61737c2e73060e70c99a815118d27a1106979e
import { updatedMemberData } from "../services/https/Member";
import { useNavigate } from "react-router-dom";
import { MemberInterface } from "../interfaces/IMember";
import { DeleteMember } from "../services/https/Member";

function Member2() {
<<<<<<< HEAD
  //อัปเดตตัวแปรสถานะ เพื่อเก็บค่าอินพุตของแบบฟอร์ม

  const navigate = useNavigate(); // ใช้ navigate เพื่อเปลี่ยนหน้า

  const apiUrl = "http://localhost:8080";
  
  const [editmember, setMember] = useState<Partial<MemberInterface>>({});
  const handleSubmit = async () => {
    const data = await updatedMemberData(editmember);
    if (data) {
      setMember(data);
      navigate("/Member1");
    }

    const handleDeleteMember = async () => {
      const result = await DeleteMember(id);
      if (result) {
        window.location.reload();
      }
    };

=======
    //อัปเดตตัวแปรสถานะ เพื่อเก็บค่าอินพุตของแบบฟอร์ม
    
    const navigate = useNavigate(); // ใช้ navigate เพื่อเปลี่ยนหน้า
   

      //ทิ้งไว้เฉยๆกันerror
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        throw new Error("Function not implemented.");
    }

>>>>>>> ad61737c2e73060e70c99a815118d27a1106979e
    return (
      <div>
        <Navbar />
        <div
          style={{
            //  บัญชีของฉัน
            position: "absolute",
            top: "350px",
            left: "35px",
            color: "black",
            display: "inline-block",
            width: "495px",
            height: "75px",
            fontSize: "45px",
            fontFamily: "Inter",
            fontWeight: "bold",
          }}
        >
          บัญชีของฉัน
        </div>
        <div
          style={{
            position: "absolute",
            top: "450px",
            left: "35px",
            backgroundColor: "White",
            width: "310px",
            height: "75px",
            color: "#fff",
            cursor: "pointer",
            lineHeight: "1.8",
            textAlign: "left",
            fontSize: "40px",
            fontFamily: "Inter",
          }}
        >
          <Link
            to="/member1"
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
              height: "100%",
            }}
          >
            ข้อมูลส่วนตัว
          </Link>
        </div>
        <div
          style={{
            position: "absolute",
            top: "550px",
            left: "35px",
            backgroundColor: "Gray",
            width: "310px",
            height: "75px",
            cursor: "pointer",
            lineHeight: "1.8",
            textAlign: "left",
            fontSize: "40px",
            fontFamily: "Inter",
          }}
        >
          <Link
            to="/member2"
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
              height: "100%",
            }}
          >
            แก้ไขข้อมูลส่วนตัว
          </Link>
        </div>
        <div
          style={{
            position: "absolute",
            top: "650px",
            left: "35px",
            backgroundColor: "White",
            width: "310px",
            height: "75px",
            cursor: "pointer",
            lineHeight: "1.8",
            textAlign: "left",
            fontSize: "40px",
            fontFamily: "Inter",
          }}
        >
          <Link
            to="/history"
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
              height: "100%",
            }}
          >
            ประวัติการสั่งซื้อ
          </Link>
        </div>

        <div
          style={{
            //login
            position: "absolute",
            top: "750px",
            left: "35px",
            color: "red",
            display: "inline-block",
            width: "495px",
            height: "75px",
            fontSize: "20px",
            fontFamily: "Inter",
          }}
          onClick={handleDeleteMember}
        >
          ลบบัญชี
        </div>
        <Link to="/member1">
          <img
            style={{
              position: "absolute", //log out icon
              top: "900px",
              left: "127px",
              width: "70px",
              height: "70px",
              objectFit: "cover",
            }}
            alt=""
            src={log_out}
          />
        </Link>

        <div
          style={{
            //line
            position: "absolute",
            top: "210px",
            left: "345.5px",
            borderRight: "3px solid #000",
            boxSizing: "border-box",
            width: "5px",
            height: "863px",
          }}
        />

        <img
          style={{
            position: "absolute", //log out icon
            top: "480px",
            left: "427px",
            width: "350px",
            height: "350px",
            objectFit: "cover",
          }}
          alt=""
          src={user3}
        />
        <form onSubmit={handleSubmit}>
          <div
            style={{
              // Name Lastname
              position: "absolute",
              top: "330px",
              left: "889px",
              color: "black",
              width: "232px",
              fontFamily: "Prata",
              fontSize: "40px",
            }}
          >
            ชื่อ-นามสกุล :
          </div>

          <input //Text Name
            type="text"
            style={{
              padding: "15px",
              fontSize: "30px",
              marginLeft: "1150px",
              width: "700px",
              marginTop: "330px",
              borderRadius: "20px",
            }}
          />

          <div
            style={{
              // Gender
              position: "absolute",
              top: "465px",
              left: "889px",
              color: "black",
              width: "232px",
              fontFamily: "Prata",
              fontSize: "40px",
            }}
          >
            เพศ :
          </div>

          <input //Gender Text
            type="text"
            style={{
              padding: "15px",
              fontSize: "30px",
              marginLeft: "1150px",
              width: "700px",
              marginTop: "50px",
              borderRadius: "20px",
            }}
          />

          <div
            style={{
              // Birth
              position: "absolute",
              top: "600px",
              left: "889px",
              color: "black",
              width: "232px",
              fontFamily: "Prata",
              fontSize: "40px",
            }}
          >
            วันเกิด :
          </div>

          <input //Text Birth
            type="text"
            style={{
              padding: "15px",
              fontSize: "30px",
              marginLeft: "1150px",
              width: "700px",
              marginTop: "50px",
              borderRadius: "20px",
            }}
          />

          <div
            style={{
              // login with contact
              position: "absolute",
              top: "725px",
              left: "889px",
              color: "black",
              width: "232px",
              fontFamily: "Prata",
              fontSize: "40px",
            }}
          >
            เบอร์โทร :
          </div>

          <input
            type="text"
            style={{
              padding: "15px",
              fontSize: "30px",
              marginLeft: "1150px",
              width: "700px",
              marginTop: "50px",
              borderRadius: "20px",
            }}
          />
          <div
            style={{
              // login with contact
              position: "absolute",
              top: "855px",
              left: "889px",
              color: "black",
              width: "232px",
              fontFamily: "Prata",
              fontSize: "40px",
            }}
          >
            Email :
          </div>

          <input
            type="text"
            style={{
              padding: "15px",
              fontSize: "30px",
              marginLeft: "1150px",
              width: "700px",
              marginTop: "50px",
              borderRadius: "20px",
            }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: "green", // Change background color
              color: "white", // Change text color
              border: "4px", // Remove border
              padding: "20px 20px", // Adjust padding
              cursor: "pointer", // Add pointer cursor
              marginLeft: "1250px",
              height: "70px",
              width: "230px",
              fontSize: "28px",
              borderRadius: "10px",
              marginTop: "50px",
            }}
          >
            บันทึกข้อมูล
          </button>
        </form>

        <div
          style={{
            position: "absolute",
            top: "980px",
            left: "60px",
            backgroundColor: "white",
            borderRadius: "10px",
            width: "200px",
            height: "30px",
            cursor: "pointer",
            lineHeight: "1.8",
            textAlign: "center",
            fontSize: "25px",
            fontFamily: "Inter",
          }}
        >
          <Link
            to="/member1"
            style={{
              textDecoration: "none",
              color: "red",
              width: "100%",
              height: "100%",
            }}
          >
            ยกเลิกการแก้ไข
          </Link>
        </div>
      </div>
    );
  };
}
export default Member2;
