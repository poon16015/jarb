import { FC, useCallback } from 'react'
import { Link } from 'react-router-dom';
import forgot from "../assets/forgot.png";


const ForgotPassword: FC = () => {


    return (
        <div className='Header'>
            <>
                <div
                    style={{
                        top: "0px",
                        left: "0px",
                        backgroundColor: "white",
                        width: "1980px",
                        height: "1120px",
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        top: "400px",
                        left: "450px",
                        backgroundColor: "#2d3d92",
                        width: "1040px",
                        height: "540px",
                        border: "2px",
                        borderRadius: "30px",
                    }}
                />

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

                <div
                    style={{              // NewUser? Register
                        position: "absolute",
                        top: "60px",
                        left: "100px",
                        color: "red",
                        width: "240px",
                        cursor: "pointer",
                        fontFamily: "Prata",
                        fontSize: "30px",

                    }}
                >
                    <Link to="/" style={{ textDecoration: 'none', color: 'red' }}>
                    Back
                    </Link>
                </div>
                <img
                    style={{                    //Forgot icon
                        position: "absolute",
                        top: "180px",
                        left: "594px",
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                    }}
                    alt=""
                    src={forgot}
                />


                <div />
                <div
                    style={{                //Forgot the password?
                        position: "absolute",
                        top: "280px",
                        left: "850px",
                        color: "black",
                        display: "inline-block",
                        width: "500px",
                        height: "75px",
                        fontSize: "45px",
                        fontFamily: "Verdana",
                        
                    }}
                >
                    Forgot the password?
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
                        marginLeft: "620px",
                        marginTop: "-645px",
                        fontFamily: "Prata",
                        borderRadius: "30px",
                        backgroundColor: "white",
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
                        marginLeft: "620px",
                        marginTop: "-540px",
                        fontFamily: "Prata",
                        borderRadius: "30px",
                        border: "1px",
                        backgroundColor: "white",
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
                        marginLeft: "620px",
                        marginTop: "-435px",
                        fontFamily: "Prata",
                        borderRadius: "30px",
                        border: "1px",
                        backgroundColor: "white",
                    }}
                />

                <button
                    type='submit'
                    style={{                    //login button
                        backgroundColor: "#228B22", // Change background color
                        color: 'white', // Change text color
                        position: "absolute",
                        height: "75px",
                        padding: "10px",
                        fontSize: "30px",
                        width: "150px",
                        marginLeft: "880px",
                        marginTop: "-315px",
                        fontFamily: "Verdana",
                        borderRadius: "15px",
                        border: "1px",


                    }}
                >
                    SUBMIT
                </button>
            </>

        </div>

    )
}

export default ForgotPassword







