import Navbar from "./Navbar";
import log_out from "../assets/log-out.png";
import user3 from "../assets/user (3).png";


function Member2() {
    




    return (
        <div
        > 
        <Navbar/>
  
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





