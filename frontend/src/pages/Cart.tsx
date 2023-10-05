import Navbar from "./Navbar";
import twohr from "../assets/2hr.png";
import undertab from "../assets/undertab.png";

function Cart() {
    return (
      <div>
        <Navbar/>
        <div
      style={{
        position: "relative",
        backgroundColor: "transparent",
        width: "100%",
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
          left: "58px",
          width: "895px",
          height: "557px",
        }}
      >
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
            display: "inline-block",
            width: "286px",
          }}
        >
          ตะกร้าสินค้า
        </div>
        <div
          style={{
            position: "absolute",
            top: "130px",
            left: "30px",
            display: "inline-block",
            width: "88px",
          }}
        >
          รูปสินค้า
        </div>
        <div
          style={{
            position: "absolute",
            top: "166.5px",
            left: "14.72px",
            borderTop: "1px solid #000",
            boxSizing: "border-box",
            width: "801px",
            height: "1px",
          }}
        />
        <div style={{ position: "absolute", top: "130px", left: "177px" }}>
          รหัสสินค้า
        </div>
        <div style={{ position: "absolute", top: "130px", left: "345px" }}>
          ชื่อสินค้า
        </div>
        <div style={{ position: "absolute", top: "130px", left: "500px" }}>
          ราคา
        </div>
        <div style={{ position: "absolute", top: "130px", left: "621px" }}>
          จำนวน
        </div>
        <div style={{ position: "absolute", top: "130px", left: "760px" }}>
          ลบ
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "260px",
          left: "1211px",
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
            top: "144px",
            left: "15px",
            fontSize: "24px",
          }}
        >{`รวมทั้งหมด (บาท)   `}</div>
        <div
          style={{
            position: "absolute",
            top: "129.5px",
            left: "10.5px",
            borderTop: "1px solid #000",
            boxSizing: "border-box",
            width: "373.02px",
            height: "1px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "191.5px",
            left: "10.5px",
            borderTop: "1px solid #000",
            boxSizing: "border-box",
            width: "373.02px",
            height: "1px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "206px",
            left: "9px",
            width: "398px",
            height: "154px",
            objectFit: "cover",
          }}
          alt=""
          src={twohr}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "876px",
          left: "750px",
          width: "203px",
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
        >{`<    เลือกสินค้า`}</b>
      </div>
      <div
        style={{
          position: "absolute",
          top: "876px",
          left: "974px",
          width: "203px",
          height: "56px",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            backgroundColor: "#2d3d92",
            width: "203px",
            height: "56px",
          }}
        />
        <b
          style={{
            position: "absolute",
            top: "12px",
            left: "35px",
            display: "inline-block",
            width: "170px",
            height: "33px",
          }}
        >{`ที่อยู่จัดส่ง      >`}</b>
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
    </div>
      </div>

    );
  }
  
  export default Cart;