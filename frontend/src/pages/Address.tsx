import { useCallback } from "react";
import { Link } from "react-router-dom";

import truck1 from "../assets/truck1.png";
import truck2 from "../assets/truck2.png";
import icontruck from "../assets/icontruck.png";
import waypoint from "../assets/waypoint.png";
import circle1 from "../assets/circle1.png";
import circle2 from "../assets/circle2.png";
import undertab from "../assets/undertab.png";
import conditions from "../assets/conditions.png";

function Address() {
    return (
      <div
      style={{
        
        width: "1980",
        height: "1080px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "24px",
        color: "#000",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "260px",
          left: "1204px",
          width: "415px",
          height: "384px",
          fontSize: "48px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            backgroundColor: "#fff",
            border: "3px solid #000",
            boxSizing: "border-box",
            width: "415px",
            height: "384px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "199px",
            left: "11px",
            width: "290px",
            height: "174px",
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "290px",
              height: "174px",
              objectFit: "cover",
            }}
            alt=""
            src={conditions}
          />
          <img
            style={{
              position: "absolute",
              top: "7px",
              left: "60px",
              width: "95px",
              height: "91px",
              objectFit: "cover",
            }}
            alt=""
            src={truck2}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            backgroundColor: "#d9d9d9",
            border: "3px solid #000",
            boxSizing: "border-box",
            width: "415px",
            height: "90px",
          }}
        />
        <div style={{ position: "absolute", top: "16px", left: "74px" }}>
          ข้อมูลคำสั่งซื้อ
        </div>
        <div
          style={{
            position: "absolute",
            top: "121px",
            left: "24px",
            fontSize: "24px",
          }}
        >{`รวมทั้งหมด (บาท)   `}</div>
        <div
          style={{
            position: "absolute",
            top: "111.5px",
            left: "10.49px",
            borderTop: "1px solid #000",
            boxSizing: "border-box",
            width: "373.02px",
            height: "1px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "158.5px",
            left: "10.5px",
            borderTop: "1px solid #000",
            boxSizing: "border-box",
            width: "373.02px",
            height: "1px",
          }}
        />
      </div>
      <img
        style={{
          position: "absolute",
          top: "976px",
          left: "254px",
          width: "1397px",
          height: "85px",
          objectFit: "cover",
        }}
        alt=""
        src={undertab}
      />
      <div
        style={{
          position: "absolute",
          top: "876px",
          left: "718px",
          width: "235px",
          height: "56px",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
            backgroundColor: "#2d3d92",
          }}
        />
        <b
          style={{
            position: "absolute",
            height: "58.93%",
            width: "74.38%",
            top: "21.43%",
            left: "12.32%",
            display: "inline-block",
          }}
        >{`<    ตะกร้าสินค้า`}</b>
      </div>
      <div
        style={{
          position: "absolute",
          top: "260px",
          left: "58px",
          width: "1119px",
          height: "672px",
          color: "#f2591d",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "290px",
            left: "18px",
            backgroundColor: "#fff",
            border: "1px dashed rgba(0, 0, 0, 0.5)",
            boxSizing: "border-box",
            width: "854px",
            height: "248px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "616px",
            left: "916px",
            backgroundColor: "#2d3d92",
            width: "203px",
            height: "56px",
          }}
        />
        <b
          style={{
            position: "absolute",
            top: "628px",
            left: "951px",
            display: "inline-block",
            color: "#fff",
            width: "168px",
            height: "33px",
          }}
        >{`ชำระเงิน        >`}</b>
        <div
          style={{
            position: "absolute",
            top: "106px",
            left: "18px",
            backgroundColor: "#fff",
            border: "1px dashed rgba(0, 0, 0, 0.5)",
            boxSizing: "border-box",
            width: "854px",
            height: "180px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            backgroundColor: "#d9d9d9",
            border: "3px solid #000",
            boxSizing: "border-box",
            width: "895px",
            height: "90px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            backgroundColor: "rgba(217, 217, 217, 0)",
            border: "3px solid #000",
            boxSizing: "border-box",
            width: "895px",
            height: "557px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "17px",
            left: "25px",
            fontSize: "48px",
            color: "#000",
            display: "inline-block",
            width: "286px",
          }}
        >
          <p style={{ margin: "0" }}>ที่อยู่จัดส่ง</p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "114px",
            left: "25px",
            width: "229px",
            height: "64px",
          }}
        >
          <b
            style={{
              position: "absolute",
              top: "19px",
              left: "54px",
              display: "inline-block",
              width: "190px",
            }}
          >
            ที่อยู่จัดส่งปัจจุบัน
          </b>
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "48px",
              height: "64px",
              objectFit: "cover",
            }}
            alt=""
            src={waypoint}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "294px",
            left: "20px",
            width: "250px",
            height: "109px",
          }}
        >
          <b style={{ position: "absolute", top: "11px", left: "59px" }}>
            วิธีการจัดส่งสินค้า
          </b>
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "62px",
              height: "51px",
              objectFit: "cover",
            }}
            alt=""
            src={icontruck}
          />
          <div
            style={{
              position: "absolute",
              top: "84px",
              left: "135px",
              borderRadius: "50%",
              backgroundColor: "rgba(45, 61, 146, 0)",
              border: "1px solid #2d3d92",
              boxSizing: "border-box",
              width: "25px",
              height: "25px",
            }}
          />
          <img
            style={{
              position: "absolute",
              top: "89px",
              left: "140px",
              width: "15px",
              height: "15px",
            }}
            alt=""
            src={circle2}
          />
          <img
            style={{
              position: "absolute",
              top: "89px",
              left: "140px",
              width: "15px",
              height: "15px",
            }}
            alt=""
            src={circle1}
          />
        </div>
        <img
          style={{
            position: "absolute",
            top: "403px",
            left: "103px",
            width: "128px",
            height: "122px",
            objectFit: "cover",
          }}
          alt=""
          src={truck1}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "466px",
          left: "131px",
          fontSize: "16px",
          textDecoration: "underline",
          color: "#fcb117",
        }}
      >
        เพิ่มที่อยู่
      </div>
    </div>
    );
  }
  export default Address;