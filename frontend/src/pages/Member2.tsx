import { useCallback } from "react";
import point from "../assets/3point.png";
import account_icon from "../assets/account icon.png";
import cart from "../assets/cart.png";
import jarb from "../assets/jarb icon.png";
import jarb_wb from "../assets/jarb icon(wb).png";
import glass from "../assets/magnifying glass.png";
import { useState } from 'react'
import log_out from "../assets/log-out.png";
import user3 from "../assets/user (3).png";


function Member2() {
    const JarbClick = useCallback(() => {
        //  sync "product" to the project
    }, []);

    const CartClick = useCallback(() => {
        //  sync "cart" to the project
    }, []);

    const MemberClick = useCallback(() => {
        //  sync "Member " to the project
    }, []);

    const CustomPcClick = useCallback(() => {
        //  sync "customPc2" to the project
    }, []);

    const ContactClick = useCallback(() => {
        window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0");
    }, []);

    const ProductClick = useCallback(() => {
        //  sync "product" to the project
    }, []);

    const [searchTerm, setSearchTerm] = useState("");

    const SearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const SearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <div
            style={{
                textAlign: "left",
                fontSize: "32px",
                color: "#000",
                fontFamily: "Inter",
            }}
        >

            <div
                style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    backgroundColor: "#2d3d92",
                    width: "1980px",
                    height: "210px",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "82px",
                    left: "910px",
                    transform: "translateX(-50%)",
                    display: "flex",
                    width: "1130px",
                    height: "75px",
                }}
            >
                <input
                    type="text"
                    placeholder="ค้นหาสินค้า"
                    value={searchTerm}
                    onChange={SearchInputChange}
                    style={{
                        padding: "30px",
                        fontSize: "30px",
                        marginRight: "50px",
                        width: "1070px",
                    }}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "80.5px",
                    left: "1345.5px",
                    borderRight: "1px solid #000",
                    boxSizing: "border-box",
                    width: "1px",
                    height: "76px",
                }}
            />
            <img
                style={{
                    position: "absolute",
                    top: "92px",
                    left: "1366px",
                    width: "53px",
                    height: "52px",
                    objectFit: "cover",
                    cursor: "pointer",
                }}
                alt=""
                src={glass}
                onClick={SearchSubmit}
            />
            <img
                style={{
                    position: "absolute",
                    top: "81px",
                    left: "1392px",
                    width: "115px",
                    height: "75px",
                    objectFit: "cover",
                }}
                alt=""
                src={cart}
            />
            <div
                style={{
                    position: "absolute",
                    top: "101px",
                    left: "1490px",
                    color: "#fff",
                    display: "inline-block",
                    width: "160px",
                    height: "50px",
                    cursor: "pointer",
                }}
                onClick={CartClick}
            >
                ตะกร้าสินค้า
            </div>
            <img
                style={{
                    position: "absolute",
                    top: "101px",
                    left: "1650px",
                    width: "12px",
                    height: "39px",
                    objectFit: "cover",
                }}
                alt=""
                src={point}
            />
            <img
                style={{
                    position: "absolute",
                    top: "100px",
                    left: "1674px",
                    width: "45px",
                    height: "44px",
                    objectFit: "cover",
                }}
                alt=""
                src={account_icon}
            />
            <div
                style={{
                    position: "absolute",
                    top: "101px",
                    left: "1719px",
                    color: "#fff",
                    display: "inline-block",
                    width: "182px",
                    height: "50px",
                    cursor: "pointer",
                }}
                onClick={MemberClick}
            >
                บัญชีของฉัน
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "216px",
                    left: "361px",
                    width: "130px",
                    height: "33px",
                    cursor: "pointer",
                }}
                onClick={ProductClick}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "3px",
                        left: "0px",
                        borderRadius: "10px",
                        backgroundColor: "#fcb117",
                        width: "130px",
                        height: "30px",

                    }}

                />
                <div
                    style={{
                        position: "absolute",
                        top: "0px",
                        left: "26px",
                        display: "inline-block",
                        width: "71px",
                        height: "29.25px",
                    }}
                >
                    สินค้า
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "215px",
                    left: "510px",
                    width: "150px",
                    height: "39px",
                    cursor: "pointer",
                }}
                onClick={CustomPcClick}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "4px",
                        left: "0px",
                        borderRadius: "10px",
                        backgroundColor: "#fbb017",
                        width: "150px",
                        height: "30px",
                    }}
                />
                <div style={{ position: "absolute", top: "0px", left: "23px" }}>
                    จัดสเปค
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "219px",
                    left: "680px",
                    width: "130px",
                    height: "30px",
                    cursor: "pointer",
                    fontSize: "20px",
                    fontFamily: "Inder",
                }}
                onClick={ContactClick}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        borderRadius: "10px",
                        backgroundColor: "#fbb017",
                        width: "130px",
                        height: "30px",
                    }}
                />
                <div style={{ position: "absolute", top: "2px", left: "20px" }}>
                    ติดต่อ
                </div>
                <img
                    style={{
                        position: "absolute",
                        top: "5px",
                        left: "70px",
                        width: "48px",
                        height: "21px",
                        objectFit: "cover",
                    }}
                    alt=""
                    src={jarb_wb}
                />
            </div>
            <img
                style={{
                    position: "absolute",
                    top: "62px",
                    left: "29px",
                    width: "309px",
                    height: "138px",
                    objectFit: "cover",
                    cursor: "pointer",
                }}
                alt=""
                src={jarb}
                onClick={JarbClick}
            />

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
                }}
            >
                บัญชีของฉัน
            </div>

            <div
                style={{                //ข้อมูลส่วนตัว
                    position: "absolute",
                    top: "450px",
                    left: "35px",
                    color: "black",
                    display: "inline-block",
                    width: "495px",
                    height: "75px",
                    fontSize: "40px",
                    fontFamily: "Inter",
                }}
            >
                ข้อมูลส่วนตัว
            </div>

            <div
                style={{                //แก้ไขข้อมูลส่วนตัว
                    position: "absolute",
                    top: "550px",
                    left: "35px",
                    color: "black",
                    display: "inline-block",
                    width: "495px",
                    height: "75px",
                    fontSize: "40px",
                    fontFamily: "Inter",
                }}
            >
                แก้ไขข้อมูลส่วนตัว
            </div>

            <div
                style={{                //login
                    position: "absolute",
                    top: "650px",
                    left: "35px",
                    color: "black",
                    display: "inline-block",
                    width: "495px",
                    height: "75px",
                    fontSize: "40px",
                    fontFamily: "Inter",
                }}
            >
                ประวัติการสั่งซื้อ
            </div>

            <div
                style={{                //login
                    position: "absolute",
                    top: "750px",
                    left: "35px",
                    color: "black",
                    display: "inline-block",
                    width: "495px",
                    height: "75px",
                    fontSize: "40px",
                    fontFamily: "Inter",
                }}
            >
                ลบบัญชี
            </div>

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

            <div
                style={{                //log out
                    position: "absolute",
                    top: "980px",
                    left: "114px",
                    color: "red",
                    display: "inline-block",
                    width: "495px",
                    height: "75px",
                    fontSize: "25px",
                    fontFamily: "Inter",
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

            <input                          //Text Name
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
                style={{              // Gender
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
                style={{              // login with contact
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
                type='submit'
                style={{
                    backgroundColor: 'green', // Change background color
                    color: 'white', // Change text color
                    border: '4px', // Remove border
                    padding: '20px 20px', // Adjust padding
                    cursor: 'pointer', // Add pointer cursor
                    marginLeft: "1250px",
                    height: '70px',
                    width: '230px',
                    fontSize: '28px',
                    borderRadius: "10px",
                    marginTop : "50px"
                }}
            >
                บันทึกข้อมูล
            </button>

            <button
                type='button'

                style={{
                    position: "absolute",
                    marginRight: '100px',
                    backgroundColor: 'red', // Change background color
                    color: 'white', // Change text color
                    border: '2px', // Remove border
                    padding: '20px 20px', // Adjust padding
                    cursor: 'pointer', // Add pointer cursor
                    marginLeft: "55px",
                    height: '70px',
                    width: '230px',
                    top: '960px',
                    fontSize: '28px',
                    borderRadius: "10px",
                    marginTop : "6px",

                }}
            >
                ยกเลิกการแก้ไข
            </button>



        </div>

    );
}
export default Member2;





