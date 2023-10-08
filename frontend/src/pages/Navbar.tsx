import {useCallback} from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import point from "../assets/3point.png";
import account_icon from "../assets/account icon.png";
import cart from "../assets/cart.png";
import jarb from "../assets/jarb icon.png";
import jarb_wb from "../assets/jarb icon(wb).png";
import glass from "../assets/magnifying glass.png";

function Navbar() {
      const ContactClick = useCallback(() => {
        window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0");
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
          left: "1355px",
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
        <Link to="/product">
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
        />
        </Link>
        <div
            style={{
              position: "absolute",
              top: "101px",
              left: "1440px",
              backgroundColor: "transparent",
              width: "200px",
              height: "50px",
              cursor: "pointer",
              fontSize: "30px",  
              lineHeight: "1.4",
              textAlign: "right",
            }}
        >
            <Link to="/cart" style={{ textDecoration: 'none', color: 'white', width: '100%', height: '100%' }}>
                  ตะกร้าสินค้า
            </Link>
        </div>
        <div
            style={{
              position: "absolute",
              top: "101px",
              left: "1670px",
              backgroundColor: "transparent",
              width: "210px",
              height: "50px",
              cursor: "pointer",
              fontSize: "30px",  
              lineHeight: "1.4",
              textAlign: "right",
            }}
        >
            <Link to="/member1" style={{ textDecoration: 'none', color: 'white', width: '100%', height: '100%' }}>
                  บัญชีของฉัน
            </Link>
        </div>
        <div
            style={{
              position: "absolute",
              top: "219px",
              left: "510px",
              backgroundColor: "#fbb017",
              borderRadius: "10px",
              width: "150px",
              height: "30px",
              cursor: "pointer",
              fontSize: "30px",  
              lineHeight: "1.1",
              textAlign: "center",
            }}
        >
            <Link to="/customPC" style={{ textDecoration: 'none', color: 'black', width: '100%', height: '100%' }}>
                  จัดสเปค
            </Link>
        </div>
        <div
            style={{
              position: "absolute",
              top: "219px",
              left: "361px",
              backgroundColor: "#fbb017",
              borderRadius: "10px",
              width: "130px",
              height: "30px",
              cursor: "pointer",
              fontSize: "30px",  
              lineHeight: "1.1",
              textAlign: "center",
            }}
        >
            <Link to="/product" style={{ textDecoration: 'none', color: 'black', width: '100%', height: '100%' }}>
                  สินค้า
            </Link>
        </div>
      </div>
    
  );
}
export default Navbar;
