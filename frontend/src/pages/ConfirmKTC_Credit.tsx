import { Card, Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import car from "../assets/car.png";
import visa from "../assets/visa.jpg";
import master_card from "../assets/master_card.jpg";
import undertab from "../assets/undertab.png";

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
  

function ConfirmKTC_Credit() {
  return (
    <div>
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
            
            <img //รูปvisa
              style={{
                position: "absolute",
                top: "775px",
                left: "130px",
                width: "50px",
                height: "30px",
              }}
              alt=""
              src={visa}
            /> 

            <img //รูป master_card
              style={{
                position: "absolute",
                top: "775px",
                left: "190px",
                width: "50px",
                height: "30px",
              }}
              alt=""
              src={master_card}
            /> 
            
            <div style={{ 
              position: "absolute", 
              top: "740px", 
              left: "28px",
              fontSize: '20px',
            }}>
            วิธีการชำระค่าสินค้าด้วยบัตรเครดิต / Credit Card
            </div>   
            
            <div style={{ 
              position: "absolute", 
              top: "815px", 
              left: "26px",
              fontSize: '16px',
            }}>
            ท่านสามารถชำระค่าสินค้าด้วยบัตรเครดิต VISA, MASTER CARD, JCB ที่ออกโดยธนาคารต่างๆ ทั่วโลก 
            </div>   
            <div style={{ 
              position: "absolute", 
              top: "845px", 
              left: "26px",
              fontSize: '16px',
            }}>
            ได้สะดวก รวดเร็ว ปลอดภัย ด้วยมาตรฐานความปลอดภัยโดยบริการ KTC Gateway ของ ธนาคารกรุงไทย
            </div> 
            <div style={{ 
              position: "absolute", 
              top: "863px", 
              left: "26px",
              fontSize: '16px',
            }}>
            สามารถรองรับการอนุมัติวงเงินบัตรเครดิตแบบ Real-Time ได้ตลอด 24 ชั่วโมง
            </div> 
            <div style={{ 
              position: "absolute", 
              top: "893px", 
              left: "26px",
              fontSize: '16px',
            }}>
            บริการนี้ รองรับการชำระด้วยสกุลเงิน บาท เท่านั้น
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
        {`<     ชำระเงิน`}
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

export default ConfirmKTC_Credit;
