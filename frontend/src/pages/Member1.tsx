import React,{useState, useEffect} from "react";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import log_out from "../assets/log-out.png";
import user3 from "../assets/user (3).png";
import { useNavigate } from "react-router-dom";
import { MemberInterface } from "../interfaces/IMember";
import {getMember} from "../services/https/Member"

function Member1() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate(); // ใช้ navigate เพื่อเปลี่ยนหน้า
    const [Name, setName] = useState("");
    const [Dob, setDob] = useState("");
    const [Gender, setGender] = useState("");
    const [Tel, setTel] = useState("");
    const [Email, setEmail] = useState("");
  
    useEffect(() => {
      // Fetch member information when the component mounts
      fetchMemberData();
    }, []);
  
    const fetchMemberData = async () => {
      try {
        // Call your getMember function to fetch member information
        const memberId = "1";  // Replace with the actual member ID
        const response = await getMember(memberId);
  
        if (response.status) {
          // Member information fetched successfully
          const memberData = response.data;
          setName(memberData.name);
          setDob(memberData.dob);
          setGender(memberData.gender);
          setTel(memberData.tel);
          setEmail(memberData.email);
        } else {
          // Error fetching member information
          setError(true);
        }
      } catch (error) {
        // Handle any errors that occur during the fetch
        console.error("Error fetching member information:", error);
        setError(true);
      }
    };
  


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
              backgroundColor: "gray",
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
            <Link to="/member2" style={{ textDecoration: 'none', color: 'black', width: '100%', height: '100%' }}>
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

            <Link to="/">
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
            <Link to="/" style={{ textDecoration: 'none', color: 'red', width: '100%', height: '100%' }}>
            Log Out
            </Link>
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

            <img
                style={{
                    position: "absolute",    //log out icon
                    top: "480px",
                    left: "427px",
                    width: "350px",
                    height: "350px",
                    objectFit: "cover",

                }}
                alt=""
                src={user3}
            />
            <div
                style={{              // Name Lastname
                    position: "absolute",
                    top: "390px",
                    left: "889px",
                    color: "black",
                    width: "232px",
                    fontFamily: "Prata",
                    fontSize: "40px",

                }}

            >
                ชื่อ-นามสกุล :
            </div>

            <input                          //Text Name
                type="text" 
                style={{
                    padding: "15px",
                    fontSize: "30px",
                    marginLeft: "1150px",
                    width: "700px",
                    marginTop: "380px",
                    borderRadius: "20px",

                }}
            />

            <div
                style={{              // Gender
                    position: "absolute",
                    top: "520px",
                    left: "889px",
                    color: "black",
                    width: "232px",
                    fontFamily: "Prata",
                    fontSize: "40px",

                }}

            >
                เพศ :
            </div>

            <input                      //Gender Text
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
                style={{              // Birth
                    position: "absolute",
                    top: "650px",
                    left: "889px",
                    color: "black",
                    width: "232px",
                    fontFamily: "Prata",
                    fontSize: "40px",

                }}

            >
                วันเกิด :
            </div>

            <input                      //Text Birth
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
                style={{              // login with contact
                    position: "absolute",
                    top: "780px",
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
                style={{              // login with contact
                    position: "absolute",
                    top: "900px",
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



        </div>

    );
}
export default Member1;