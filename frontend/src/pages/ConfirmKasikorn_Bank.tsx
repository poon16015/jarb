import { Card, Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import car from "../assets/car.png";
import kasikorn from "../assets/kasikorn.png";
import undertab from "../assets/undertab.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

interface DataType {
    key: string;
    id: string;
    name: string;
    price: number;
    quantity: number;
    total: number;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'รหัสสินค้า',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'ชื่อสินค้า',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'ราคา',
      dataIndex: 'price',
      key: 'price',
    },
    {
        title: 'จำนวน',
        dataIndex: 'quantity',
        key: 'quantity',
      },
    {
        title: 'เงินรวม',
        key: 'total',
        dataIndex: 'total',
      },
  ];
  
  const data: DataType[] = [
    {
        key: '1',
        id: '00001',
        name: 'RAM',
        price: 1500,
        quantity: 1,
        total: 1500,
    },
  ];
  

function ConfirmKasikorn_Bank() {
  return (
    <div>
      <Navbar/>
      <div
        style={{
          position: 'absolute',
          top: '260px',
          left: '25px',
          fontFamily: 'Helvetica',
          fontSize: '38px',
        }}
      >
        ยืนยันการสั่งซื้อ
      </div>

      <Card
        style={{
          marginTop: 20,
          width: '1300px',
          height: '205px',
          border: '1px solid #ccc',
          position: 'absolute',
          left: '26px',
          top: '300px',
          fontSize: '34px',
        }}
        type="inner"
        title="ที่อยู่จัดส่ง"
      >
        <div
          style={{
            fontSize: '16px',
            margin: '6px 0',
            borderBottom: '1px solid #ccc',
          }}
        >
          ชื่อ-นามสกุล
        </div>
        <div
          style={{
            fontSize: '16px',
            margin: '20px 0',
            borderBottom: '1px solid #ccc',
          }}
        >
          ที่อยู่
        </div>
        <div
          style={{
            fontSize: '16px',
          }}
        >
          โทรศัพท์
        </div>
      </Card>
      <img
        style={{
          position: "absolute",
          top: "950px",
          left: "380px",
          width: "1200px",
          height: "110px",
        }}
        alt=""
        src={undertab}
      />
      <Table
        columns={columns}
        dataSource={data}
        style={{
            position: 'absolute',
            left: '26px',
            top: '530px',
            border: '1px solid #ccc',
            borderRadius: '10px', // ปรับความโค้งมนตามต้องการ
            width: '1300px', // ปรับความกว้างตามที่คุณต้องการ
            height: '165px',
        }}
      />
      
      <div //วิธีการชำระเงินสินค้า
            style={{
              position: "absolute",
              top: "700px",
              left: "26px",
              backgroundColor: "#f7f7f7",
              width: "1300px",
              height: "30px",
            }}
          />
          <div style={{ 
            position: "absolute", 
            top: "702px", 
            left: "650px",
            fontSize: '20px',
            }}>
            วิธีการชำระเงินสินค้า
          </div>
            
            <img //รูปscb
              style={{
                position: "absolute",
                top: "775px",
                left: "28px",
                width: "130px",
                height: "112px",
              }}
              alt=""
              src={kasikorn}
            /> 
            
            <div style={{ 
              position: "absolute", 
              top: "740px", 
              left: "28px",
              fontSize: '20px',
            }}>
            ชำระเงินโดยวิธีการโอนเงินเข้าบัญชีธนาคารผ่านเคาเตอร์ธนาคาร หรือ ตู้ ATM
            </div>   
            
            <div style={{ 
              position: "absolute", 
              top: "770px", 
              left: "175px",
              fontSize: '16px',
            }}>
            ธนาคาร : กสิกรไทย
            </div>   
            <div style={{ 
              position: "absolute", 
              top: "795px", 
              left: "175px",
              fontSize: '16px',
            }}>
            สาขาย่อย : ม.เทคโนโลยีสุรนารี
            </div> 
            <div style={{ 
              position: "absolute", 
              top: "820px", 
              left: "175px",
              fontSize: '16px',
            }}>
            ชื่อบัญชี : บริษัท จ๊าบ คอมพิวเตอร์ กรุ๊ป จำกัด
            </div> 
            <div style={{ 
              position: "absolute", 
              top: "845px", 
              left: "175px",
              fontSize: '16px',
            }}>
            ประเภทบัญชี : ออมทรัพย์
            </div> 
            <div style={{ 
              position: "absolute", 
              top: "870px", 
              left: "175px",
              fontSize: '16px',
            }}>
            เลขที่บัญชี : 418-2-83000-9
            </div> 
      <Button
        type="primary"
        style={{
          backgroundColor: '#1414b8',
          position: 'absolute',
          top: '890px',
          left: '730px',
          width: '180px',
          height: '50px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '18px',
        }}
      >
        <Link to="/payment" style={{ textDecoration: 'none', color: 'white', width: '100%', height: '100%' }}>
                {'<     ชำระเงิน'}
            </Link>
      </Button>
      <Button
        type="primary"
        style={{
          backgroundColor: '#17d40d',
          position: 'absolute',
          top: '890px',
          left: '930px',
          width: '210px',
          height: '50px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '18px',
        }}
      >
        {`ยืนยันการสั่งซื้อสินค้า    >`}
      </Button>
      <Card style={{ 
        width: 630,
        height: '175px',
        position: 'absolute',
        left: '1340px',
        top: '320px',
        border: '1px solid #ccc',
        backgroundColor: "#f7f7f7",
        }}>
        <p style={{ 
        position: 'absolute',
        left: '10px',
        top: '0px',
        fontSize: '20px', 
        fontFamily: 'Bold',
        }}>
            จัดส่งสินค้าโดย
        </p>
        <p style={{ 
        position: 'absolute',
        left: '200px',
        top: '70px',
        fontSize: '20px', 
        fontFamily: '1000',
        }}>
            บริษัทขนส่ง ค่าจัดส่ง
        </p>
        <p style={{ 
        position: 'absolute',
        left: '380px',
        top: '70px',
        fontSize: '20px', 
        fontFamily: '1000',
        color: '#f50707',
        }}>
             90 
        </p>
        <p style={{ 
        position: 'absolute',
        left: '410px',
        top: '70px',
        fontSize: '20px', 
        fontFamily: '1000',
        }}>
             บาท
        </p>
        <img
            style={{
                position: "absolute",
                top: "60px",
                left: "10px",
                width: "100px",
                height: "100px",
            }}
            alt=""
            src={car}
        />
      </Card>
      <Card
        style={{
          marginTop: 20,
          width: '630px',
          height: '230px',
          border: '1px solid #ccc',
          position: 'absolute',
          left: '1340px',
          top: '480px',
          fontSize: '34px',
        }}
        type="inner"
        title="ข้อมูลสั่งซื้อ"
      >
        <div
          style={{
            fontSize: '16px',
            margin: '6px 0',
            borderBottom: '1px solid #ccc',
          }}
        >
          รวมทั้งหมด (บาท)
        </div>
        <div
          style={{
            fontSize: '16px',
            margin: '20px 0',
            borderBottom: '1px solid #ccc',
          }}
        >
          ค่าจัดส่ง (บาท)
        </div>
        <div
          style={{
            fontSize: '16px',
            color: '#e80707',
          }}
        >
          ราคาสุทธิที่ต้องชำระ (บาท)
        </div>

        
      </Card>


    </div>
  );
}

export default ConfirmKasikorn_Bank;
