import { FC, useCallback } from 'react'
import { Link } from 'react-router-dom';

import jarb from "../assets/jarb icon.png";
import register from "../assets/register.png";
import facebook from "../assets/facebook.png";
import google from "../assets/facebook (2).png";
import twitter from "../assets/twitter.png";

const Register: FC = () => {

    return (
        // logo and background jarb
        <div className='logo'>
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

            <           div
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
            <input                 //text email
                type="text"
                placeholder="Email *"
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
                type="text"
                placeholder="Password *"
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
                type="text"
                placeholder="Confirm password *"
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
                    backgroundColor: "#2d3d92", // Change background color
                    color: 'white', // Change text color
                    position: "absolute",
                    height: "75px",
                    padding: "10px",
                    fontSize: "30px",
                    width: "150px",
                    marginLeft: "1400px",
                    marginTop: "-315px",
                    fontFamily: "Prata",
                    borderRadius: "15px",
                    border: "1px",


                }}
            >
                SUBMIT
            </button>

            <div
                style={{              // login with contact
                    position: "absolute",
                    top: "990px",
                    left: "1239px",
                    color: "black",
                    width: "232px",
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
                    cursor: 'pointer', // Add pointer cursor

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
                    cursor: 'pointer', // Add pointer cursor

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
                    cursor: 'pointer', // Add pointer cursor

                }}
                alt=""
                src={twitter}
            />

        </div>



    );
};

export default Register;