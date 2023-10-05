import {useCallback} from "react";
import point from "../assets/3point.png";
import account_icon from "../assets/account icon.png";
import cart from "../assets/cart.png";
import jarb from "../assets/jarb icon.png";
import jarb_wb from "../assets/jarb icon(wb).png";
import glass from "../assets/magnifying glass.png";

function Navbar() {
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
          backgroundColor: "transparent",
          width: "1920px",
          height: "1080px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            backgroundColor: "#2d3d92",
            width: "2091px",
            height: "210px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "81px",
            left: "361px",
            backgroundColor: "#d9d9d9",
            width: "1070px",
            height: "75px",
          }}
        />
        <div
        
          style={{
            position: "absolute",
            top: "97px",
            left: "403px",
            fontFamily: "'Comic Neue'",
            display: "inline-block",
            width: "546px",
            height: "50px",
          }}
        >
          ค้นหาสินค้า
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
        }}
        alt=""
        src={glass} 
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
      </div>
    </div>
  );
}
export default Navbar;