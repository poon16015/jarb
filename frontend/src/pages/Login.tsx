import { FC, useCallback } from 'react'
import { Link } from 'react-router-dom';

import jarb from "../assets/jarb icon.png";
import user1 from "../assets/user (1).png";
import lock from "../assets/lock.png";
import email from "../assets/email.png";
import hide from "../assets/hide.png";
import facebook from "../assets/facebook.png";
import google from "../assets/facebook (2).png";
import twitter from "../assets/twitter.png";

const Login: FC = () => {

    return (
        // logo and background jarb
        <div className='logo'>
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
                style={{                    //user login
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
                style={{                //login
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
                style={{              // NewUser? Register
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
                <Link to="/register" style={{ textDecoration: 'none', color: 'red' }}>
                NewUser? Register
        </Link>
            </div>

            <input                 //text email
                type="text"
                placeholder="Email*"
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


            <img
                style={{              //email icon
                    position: "absolute",
                    top: "471px",
                    left: "1107px",
                    width: "110px",
                    height: "110px",
                    objectFit: "cover",

                }}
                alt=""
                src={email}

            />

            <input                      //text password
                type="text"
                placeholder="password*"
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

            <img
                style={{                  //password icon
                    position: "absolute",
                    top: "609px",
                    left: "1107px",
                    width: "110px",
                    height: "110px",
                    objectFit: "cover",

                }}
                alt=""
                src={lock}

            />
            <img                       // ตาเปิดปิด email
                style={{
                    position: "absolute",
                    top: "640px",
                    left: "1830px",
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                    cursor: "pointer",
                }}
                alt=""
                src={hide}

            />

            <img
                style={{                 // ตาเปิดปิด  password
                    position: "absolute",
                    top: "505px",
                    left: "1830px",
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                    cursor: "pointer",
                }}
                alt=""
                src={hide}

            />

            <div
                style={{              // Forgot the password?
                    position: "absolute",
                    top: "710px",
                    left: "1649px",
                    color: "red",
                    width: "270px",
                    cursor: "pointer",
                    fontFamily: "Prata",
                    fontSize: "30px",

                }}

            >
                <Link to="/forgotpassword" style={{ textDecoration: 'none', color: 'red' }}>
                Forgot the password?
        </Link>
            </div>

            <button
                type='submit'
                style={{                    //login button
                    backgroundColor: "#2d3d92", // Change background color


                    color: 'white', // Change text color
                    position: "absolute",
                    height: "75px",
                    padding: "10px",
                    fontSize: "30px",
                    width: "150px",
                    marginLeft: "1400px",
                    marginTop: "-320px",
                    fontFamily: "Prata",
                    borderRadius: "15px",
                    border: "1px",
                    cursor: "pointer",

                }}
            >
                LOGIN
            </button>

            <div
                style={{              // login with contact
                    position: "absolute",
                    top: "990px",
                    left: "1239px",
                    color: "black",
                    width: "232px",
                    cursor: "pointer",
                    fontFamily: "Prata",
                    fontSize: "30px",

                }}

            >
                Login with
            </div>

            <img
                style={{                  //facebook icon
                    position: "absolute",
                    top: "960px",
                    left: "1407px",
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",

                }}
                alt=""
                src={facebook}
            />

            <img
                style={{
                    position: "absolute",    //google icon
                    top: "960px",
                    left: "1517px",
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",

                }}
                alt=""
                src={google}
            />

            <img
                style={{                  //twitter icon
                    position: "absolute",
                    top: "960px",
                    left: "1627px",
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",

                }}
                alt=""
                src={twitter}
            />
        </div>

    );
};




export default Login;
