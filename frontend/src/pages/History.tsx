import Navbar from "./Navbar";
import log_out from "../assets/log-out.png";

import { Link } from 'react-router-dom';

function History() {
   

    return (
        <div>

<Navbar/>
        <div
                style={{                //  บัญชีของฉัน
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
            <Link to="/member1" style={{ textDecoration: 'none', color: 'black', width: '100%', height: '100%' }}>
                  ข้อมูลส่วนตัว
            </Link>
        </div>
            <div
            style={{
              position: "absolute",
              top: "550px",
              left: "35px",
              backgroundColor: "white",
              width: "310px",
              height: "75px",
              cursor: "pointer",
              lineHeight: "1.8",
              textAlign: "left",
              fontSize: "40px",
              fontFamily: "Inter",
            }}
        >
            <Link to="/member2" style={{ textDecoration: 'none', color: 'black', width: '100%', height: '100%' }}>
            แก้ไขข้อมูลส่วนตัว
            </Link>
        </div>
            <div
            style={{
              position: "absolute",
              top: "650px",
              left: "35px",
              backgroundColor: "gray",
              width: "310px",
              height: "75px",
              cursor: "pointer",
              lineHeight: "1.8",
              textAlign: "left",
              fontSize: "40px",
              fontFamily: "Inter",
            }}
        >
            <Link to="/history" style={{ textDecoration: 'none', color: 'black', width: '100%', height: '100%' }}>
            ประวัติการสั่งซื้อ
            </Link>
        </div>

            <div
                style={{                //login
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
            >
                ลบบัญชี
            </div>
            <Link to="/member1">
            <img
                style={{
                    position: "absolute",    //log out icon
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
                style={{                //log out
                    position: "absolute",
                    top: "980px",
                    left: "104px",
                    color: "red",
                    display: "inline-block",
                    width: "495px",
                    height: "75px",
                    fontSize: "30px",
                    fontFamily: "vocana",
                }}
            >
                Log out
            </div>
            <div
                style={{                //line
                    position: "absolute",
                    top: "210px",
                    left: "345.5px",
                    borderRight: "3px solid #000",
                    boxSizing: "border-box",
                    width: "5px",
                    height: "863px",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "300px",
                    left: "440px",
                    backgroundColor: "#d9d9d9",
                    border: "3px solid #000",
                    boxSizing: "border-box",
                    width: "1450px",
                    height: "90px",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "388px",
                    left: "440px",
                    backgroundColor: "rgba(217, 217, 217, 0)",
                    border: "3px solid #000",
                    boxSizing: "border-box",
                    width: "1450px",
                    height: "630px",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "310px",
                    left: "1000px",
                    fontSize: "48px",
                    display: "inline-block",
                    width: "350px",
                    fontFamily : "Inter"
                }}
            >
                ประวัติการสั่งซื้อ
            </div>
            
            <div
                style={{
                    position: "absolute",
                    top: "410px",
                    left: "455px",
                    display: "inline-block",
                    width: "120px",
                }}
            >
                วัน-เวลา
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "410px",
                    left: "640px",
                    display: "inline-block",
                    width: "120px",
                }}
            >
                รูปสินค้า
            </div>
            
            <div
                style={{
                    position: "absolute",
                    top: "480px",
                    left: "440px",
                    borderTop: "1px solid #000",
                    boxSizing: "border-box",
                    width: "1450px",
                    height: "1px",
                }}
            />
            <div style={{ position: "absolute", top: "410px", left: "820px" }}>
                รหัสสินค้า
            </div>
            <div style={{ position: "absolute", top: "410px", left: "1030px" }}>
                ชื่อสินค้า
            </div>
            <div style={{ position: "absolute", top: "410px", left: "1240px" }}>
                ราคา
            </div>
            <div style={{ position: "absolute", top: "410px", left: "1390px" }}>
                จำนวน
            </div>
            <div style={{ position: "absolute", top: "410px", left: "1560px" ,width: "130px" }}>
                ยอดชำระ
            </div>
            <div style={{ position: "absolute", top: "410px", left: "1750px" }}>
                สถานะ
            </div>

        </div>

    );
}
export default History;


