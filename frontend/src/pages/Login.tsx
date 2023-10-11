import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/https';
import { UsersInterface } from '../interfaces/IUser';

import jarb from "../assets/jarb icon.png";
import user1 from "../assets/user (1).png";
import lock from "../assets/lock.png";
import emailicon from "../assets/email.png";
import hide from "../assets/hide.png";

const Login: FC = () => {
    //hidepassword
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [userlogin, setUser] = useState<UsersInterface>({ Email: '', Password: '' });
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const handleLogin = async () => {
    
    const response = await login(userlogin);
    if (response) {
      // ล้าง error state เมื่อสำเร็จ
      setError("");
      // Login navigate to the product page
      navigate("/product");
    } else {
      // Login failed, display error message
      setError("Login failed. Please check your email and password.");
    }   
    };
    return (
      // logo and background jarb
      <div>
        <div
          style={{
            top: "0px",
            left: "0px",
            backgroundColor: "#2d3d92",
            width: "1980px",
            height: "1080px",
          }}
        />
        <div
          style={{
            marginLeft: "990px",
            marginTop: "-1200px",
            backgroundColor: "white",
            width: "990px",
            height: "1200px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "450px",
            left: "195px",
            width: "609px",
            height: "298px",
          }}
          alt=""
          src={jarb}
        />
        <img
          style={{
            //user login
            position: "absolute",
            top: "130px",
            left: "1374px",
            width: "200px",
            height: "200px",
            objectFit: "cover",
          }}
          alt=""
          src={user1}
        />
        <div
          style={{
            //login
            position: "absolute",
            top: "350px",
            left: "1385px",
            color: "black",
            display: "inline-block",
            width: "495px",
            height: "75px",
            fontSize: "60px",
            fontFamily: "Prata",
          }}
        >
          LOGIN
        </div>
        <div
          style={{
            // NewUser? Register
            position: "absolute",
            top: "60px",
            left: "1690px",
            color: "red",
            width: "240px",
            cursor: "pointer",
            fontFamily: "Prata",
            fontSize: "30px",
          }}
        >
          <Link to="/register" style={{ textDecoration: "none", color: "red" }}>
            NewUser? Register
          </Link>
        </div>
        <img
          style={{
            //email icon
            position: "absolute",
            top: "430px",
            left: "1080px",
            width: "110px",
            height: "110px",
            objectFit: "cover",
          }}
          alt=""
          src={emailicon}
        />
        <input //text email
          type="text"
          placeholder="Email*"
          onChange={(e) => setUser({ ...userlogin, Email: e.target.value })}
          value={userlogin.Email}
          style={{
            position: "absolute",
            border: "1px",
            height: "65px",
            padding: "20px",
            fontSize: "30px",
            width: "700px",
            marginLeft: "1200px",
            marginTop: "-625px",
            fontFamily: "Prata",
            borderRadius: "10px",
            backgroundColor: "#D3D3D3",
          }}
        />
        <input //text password
          type={showPassword ? "text" : "password"}
          placeholder="password*"
          onChange={(e) => setUser({ ...userlogin, Password: e.target.value })}
          value={userlogin.Password}
          style={{
            position: "absolute",
            height: "65px",
            padding: "20px",
            fontSize: "30px",
            width: "700px",
            marginLeft: "1200px",
            marginTop: "-490px",
            fontFamily: "Prata",
            borderRadius: "10px",
            border: "1px",
            backgroundColor: "#D3D3D3",
          }}
        />
        <button
          type="submit"
          onClick={handleLogin}
          disabled={!(userlogin.Email && userlogin.Password)} // ถ้าไม่มี email หรือ password ปุ่มจะถูกปิดใช้งาน
          style={{
              //login button
              backgroundColor: userlogin.Email && userlogin.Password ? '#2d3d92' : 'grey', // Change background color
              color: userlogin.Email && userlogin.Password ? 'white' : 'red', // Change text color
              position: "absolute",
              height: "75px",
              padding: userlogin.Email && userlogin.Password ? '10px' : '3px',
              fontSize: userlogin.Email && userlogin.Password ? '30px' : '20px',
              width: "150px",
              marginLeft: "1400px",
              marginTop: "-320px",
              fontFamily: "Prata",
              borderRadius: "15px",
              border: "1px",
              cursor: "pointer",
            }}
            >
          {userlogin.Email && userlogin.Password ? 'LOGIN' : 'กรุณากรอกทั้ง Email และ Password'}
        </button>
        {error && <div style={{position: "absolute",width: "600px",top: "670px",left: "1300px",color: "red",fontFamily: "Prata",fontSize: "24px",textAlign: "right",}}>{error}</div>} {/* แสดงข้อความข้อผิดพลาด */}
        <img
          style={{
            //password icon
            position: "absolute",
            top: "570px",
            left: "1080px",
            width: "110px",
            height: "110px",
            objectFit: "cover",
          }}
          alt=""
          src={lock}
        />
        <img
          style={{
            // ตาเปิดปิด  password
            position: "absolute",
            top: "605px",
            left: "1830px",
            width: "40px",
            height: "40px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          alt=""
          src={hide}
          onClick={togglePasswordVisibility}
        />
      </div>
    );
};


export default Login;
