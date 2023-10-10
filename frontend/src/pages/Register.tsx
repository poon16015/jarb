import { FC } from 'react'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import hide from "../assets/hide.png";

import jarb from "../assets/jarb icon.png";
import register from "../assets/register.png";

import { UsersInterface } from '../interfaces/IUser';
import { createUser } from '../services/https';

const Register: FC = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [user, setUser] = useState<UsersInterface>({ Email: '', Password: '' });
    const [error, setError] = useState<string>('');
    const navigate = useNavigate(); // ใช้ navigate เพื่อเปลี่ยนหน้า
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const isPasswordMatched = user.Password === confirmPassword;
    //ปุ่มsubmit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // เรียกใช้ API เพื่อสร้างผู้ใช้ใหม่
        if (!isPasswordMatched) {
            setError('Password and confirm password must match');
            return;
        }
        const response = await createUser(user);
        if (response.status) {
        // Successful 
        // ล้าง error state เมื่อสำเร็จ
        setError('');
        navigate('/'); // เปลี่ยนหน้าเมื่อสร้างผู้ใช้เรียบร้อย
        } else {
        // Error 
        setError(response.message); // แสดงข้อความข้อผิดพลาด
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
                    width: "990px",
                    height: "1120px",
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
                style={{                    //user login
                    position: "absolute",
                    top: "100px",
                    left: "1374px",
                    width: "230px",
                    height: "230px",
                    objectFit: "cover",
                }}
                alt=""
                src={register}
            />
            <div
                style={{                //login
                    position: "absolute",
                    top: "290px",
                    left: "1345px",
                    color: "black",
                    display: "inline-block",
                    width: "495px",
                    height: "75px",
                    fontSize: "60px",
                    fontFamily: "Prata",
                }}
                >
                REGISTER
            </div>
            <div
                style={{              // Login Account
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
                <Link to="/" style={{ textDecoration: 'none', color: 'red' }}>
                Login Account
                </Link>
            </div>
            <form onSubmit={handleSubmit}>
            <input                 //text email
                type="text"
                placeholder="Email *"
                value={user.Email}
                onChange={(e) => setUser({ ...user, Email: e.target.value })}
                required
                style={{
                    position: "absolute",
                    border: "1px",
                    height: "65px",
                    padding: "30px",
                    fontSize: "30px",
                    width: "700px",
                    marginLeft: "1150px",
                    marginTop: "-685px",
                    fontFamily: "Prata",
                    borderRadius: "30px",
                    backgroundColor: "#D3D3D3",
                }}
                />
            <input                      //text password
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password *"
                value={user.Password}
                onChange={(e) => setUser({ ...user, Password: e.target.value })}
                required
                style={{
                    position: "absolute",
                    height: "65px",
                    padding: "30px",
                    fontSize: "30px",
                    width: "700px",
                    marginLeft: "1150px",
                    marginTop: "-560px",
                    fontFamily: "Prata",
                    borderRadius: "30px",
                    border: "1px",
                    backgroundColor: "#D3D3D3",
                }}
                />
            <input                      //text password confirm
                type={confirmPasswordVisible ? 'text' : 'password'}
                placeholder="Confirm password *"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={{
                    position: "absolute",
                    height: "65px",
                    padding: "30px",
                    fontSize: "30px",
                    width: "700px",
                    marginLeft: "1150px",
                    marginTop: "-435px",
                    fontFamily: "Prata",
                    borderRadius: "30px",
                    border: "1px",
                    backgroundColor: "#D3D3D3",
                }}
                />
                <button
                    type='submit'
                    style={{                    //login button
                        backgroundColor: isPasswordMatched ? '#2d3d92' : 'gray', // Change background color
                        color: isPasswordMatched ? 'white' : 'red', // Change text color
                        position: "absolute",
                        height: "75px",
                        padding: "10px",
                        fontSize: isPasswordMatched ? '30px' : '20px',
                        lineHeight: isPasswordMatched ? '0' : '1',
                        width: "150px",
                        marginLeft: "1430px",
                        marginTop: "-315px",
                        fontFamily: "Prata",
                        borderRadius: "15px",
                        border: "1px",
                        cursor: isPasswordMatched ? 'pointer' : 'not-allowed',
                    }}
                    disabled={!isPasswordMatched} // ปิดปุ่มถ้า password และ confirm password ไม่ตรงกัน
                    >  
                    {isPasswordMatched ? 'SUBMIT' : 'Password must match Confirm Password'} {/* แสดงข้อความตามเงื่อนไข */}
                </button>
                {error && <div style={{position: "absolute",width: "500px",top: "750px",left: "1600px",color: "red",fontFamily: "Prata",fontSize: "24px",}}>{error}</div>} {/* แสดงข้อความข้อผิดพลาด */}
                </form>
            <img
                style={{                 // ตาเปิดปิด  password
                    position: "absolute",
                    top: "575px",
                    left: "1800px",
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                    cursor: "pointer",
                }}
                alt=""
                src={hide}
                onClick={() => setPasswordVisible(!passwordVisible)}
                />
            <img
                style={{                 // ตาเปิดปิด  confirm password
                    position: "absolute",
                    top: "700px",
                    left: "1800px",
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                    cursor: "pointer",
                }}
                alt=""
                src={hide}
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                />
        </div>
    );
};
export default Register;