import { useState, useCallback } from 'react';
import { Button, Tabs, Card, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import undertab from "../assets/undertab.png";
import qr_code from "../assets/qr_code.png";
import bank_scb from "../assets/bank_scb.png";
import bank_bangkok from "../assets/bank_bangkok.png";
import bank_kasikorn from "../assets/bank_kasikorn.png";
import bank_krungsri from "../assets/bank_krungsri.png";
import credit_kasikorn from "../assets/credit_kasikorn.png";
import american_express from "../assets/american_express.png";
import ktc from "../assets/ktc.png";
import delivery from "../assets/delivery.jpg";
import Navbar from "./Navbar";

const { TabPane } = Tabs;

function Bank() {
  
  const [value, setValue] = useState<number>(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const QR_CodeClick = useCallback(() => {
    setValue(1); // กำหนดค่า value เป็น 1 เมื่อคลิกที่รูปภาพ
  }, []);

  const bank_scbClick = useCallback(() => {
    setValue(1); // กำหนดค่า value เป็น 1 เมื่อคลิกที่รูปภาพ
  }, []);

  const bank_bangkokClick = useCallback(() => {
    setValue(2); // กำหนดค่า value เป็น 2 เมื่อคลิกที่รูปภาพ
  }, []);

  const bank_kasikornClick = useCallback(() => {
    setValue(3); // กำหนดค่า value เป็น 3 เมื่อคลิกที่รูปภาพ
  }, []);

  const bank_krungsriClick = useCallback(() => {
    setValue(4); // กำหนดค่า value เป็น 4 เมื่อคลิกที่รูปภาพ
  }, []);

  const credit_kasikornClick = useCallback(() => {
    setValue(1); // กำหนดค่า value เป็น 1 เมื่อคลิกที่รูปภาพ
  }, []);

  const ktcClick = useCallback(() => {
    setValue(2); // กำหนดค่า value เป็น 2 เมื่อคลิกที่รูปภาพ
  }, []);

  const american_expressClick = useCallback(() => {
    setValue(3); // กำหนดค่า value เป็น 3 เมื่อคลิกที่รูปภาพ
  }, []);

  return (
    <div>
      <Navbar/>
      <div
        style={{
          position: 'absolute',
          top: '260px',
          left: '25px',
          fontFamily: 'Helvetica',
          fontSize: '48px',
        }}
      >
        ชำระเงิน
      </div>

      <Tabs
        type="card"
        defaultActiveKey="1"
        
        tabBarGutter={100}
        className="custom-tabs"
      >
        <TabPane
          tab={
            <span
              style={{
                width: '180px',
                display: 'inline-block',
                fontFamily: 'Helvetica',
                textAlign: 'center',
                fontSize: '28px',
              }}
            >
              QR Code
            </span>
          }
          key="1"
        >
          <img
            style={{
              position: "absolute",
              top: "62px",
              left: "2px",
              width: "230px",
              height: "300px",
              cursor: "pointer",
              borderRadius: "20px",
            }}
            alt=""
            src={qr_code}
            onClick={QR_CodeClick}
          />
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1} style={{ marginLeft: '110px', marginTop: '10px', fontSize: '40px' }}></Radio>
          </Radio.Group>
        </TabPane>
        <TabPane
          tab={
            <span
              style={{
                width: '180px',
                display: 'inline-block',
                fontFamily: 'Helvetica',
                textAlign: 'center',
                fontSize: '28px',
              }}
            >
              ธนาคาร
            </span>
          }

          key="2"
        >
          <img
            style={{
              position: "absolute",
              top: "62px",
              left: "2px",
              width: "230px",
              height: "300px",
              cursor: "pointer",
              borderRadius: "20px",
            }}
            alt=""
            src={bank_scb}
            onClick={bank_scbClick}
          />

          <img
            style={{
              position: "absolute",
              top: "62px",
              left: "350px",
              width: "230px",
              height: "300px",
              cursor: "pointer",
              borderRadius: "20px",
            }}
            alt=""
            src={bank_bangkok}
            onClick={bank_bangkokClick}
          />

          <img
            style={{
              position: "absolute",
              top: "62px",
              left: "698px",
              width: "230px",
              height: "300px",
              cursor: "pointer",
              borderRadius: "20px",
            }}
            alt=""
            src={bank_kasikorn}
            onClick={bank_kasikornClick}
          />

          <img
            style={{
              position: "absolute",
              top: "62px",
              left: "1046px",
              width: "230px",
              height: "300px",
              cursor: "pointer",
              borderRadius: "20px",
            }}
            alt=""
            src={bank_krungsri}
            onClick={bank_krungsriClick}
          />
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1} style={{ marginLeft: '110px', marginTop: '10px', fontSize: '40px' }}></Radio>
            <Radio value={2} style={{ marginLeft: '320px', marginTop: '10px', fontSize: '40px' }}></Radio>
            <Radio value={3} style={{ marginLeft: '322.5px', marginTop: '10px', fontSize: '40px' }}></Radio>
            <Radio value={4} style={{ marginLeft: '327px', marginTop: '10px', fontSize: '40px' }}></Radio>
          </Radio.Group>
        </TabPane>
        <TabPane
          tab={
            <span
              style={{
                width: '180px',
                display: 'inline-block',
                fontFamily: 'Helvetica',
                textAlign: 'center',
                fontSize: '28px',
              }}
            >
              บัตรเครดิต
            </span>
          }
          key="3"
        >
          <img
            style={{
              position: "absolute",
              top: "62px",
              left: "2px",
              width: "230px",
              height: "300px",
              cursor: "pointer",
              borderRadius: "20px",
            }}
            alt=""
            src={credit_kasikorn}
            onClick={credit_kasikornClick}
          />

          <img
            style={{
              position: "absolute",
              top: "62px",
              left: "350px",
              width: "230px",
              height: "300px",
              cursor: "pointer",
              borderRadius: "20px",
            }}
            alt=""
            src={ktc}
            onClick={ktcClick}
          />

          <img
            style={{
              position: "absolute",
              top: "62px",
              left: "698px",
              width: "230px",
              height: "300px",
              cursor: "pointer",
              borderRadius: "20px",
            }}
            alt=""
            src={american_express}
            onClick={american_expressClick}
          />
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1} style={{ marginLeft: '110px', marginTop: '10px', fontSize: '40px' }}></Radio>
            <Radio value={2} style={{ marginLeft: '320px', marginTop: '10px', fontSize: '40px' }}></Radio>
            <Radio value={3} style={{ marginLeft: '322.5px', marginTop: '10px', fontSize: '40px' }}></Radio>
          </Radio.Group>
        </TabPane>
      </Tabs>

      <style>
        {`
          .ant-tabs.custom-tabs {
            position: absolute;
            top: 33%;
            left: 1.2%;
          }

        `}
      </style>
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
        {`<     ที่อยู่จัดส่ง`}
      </Button>
      <Button
        type="primary"
        style={{
          backgroundColor: '#1414b8',
          position: 'absolute',
          top: '890px',
          left: '930px',
          width: '180px',
          height: '50px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '18px',
        }}
      >
        {`ยืนยันการสั่งซื้อ    >`}
      </Button>

      <Card
        title="ข้อมูลคำสั่งซื้อ"
        bordered={false}
        style={{
          width: 585,
          position: 'absolute',
          left: '1315px',
          top: '300px', // ปรับตำแหน่งตามที่คุณต้องการ
          height: '540px', // ปรับความสูงตามที่คุณต้องการ
          border: '1px solid #ccc', // เพิ่มเส้นขอบด้วย CSS
          fontSize: '45px', // ปรับขนาดตัวอักษรของข้อความ "ข้อมูลคำสั่งซื้อ"
          fontFamily: 'Bold, Helvetica',
        }}
      >
        <p style={{ margin: '8px 0', borderBottom: '1px solid #ccc', fontSize: '20px', fontFamily: 'Arial, Helvetica' }}>รวมทั้งหมด (บาท)</p>
        <p style={{ margin: '8px 0', borderBottom: '1px solid #ccc', fontSize: '20px', fontFamily: 'Arial, Helvetica' }}>ค่าจัดส่ง (บาท)</p>
        <p style={{ margin: '8px 0', borderBottom: '1px solid #ccc', fontSize: '20px', fontFamily: 'Arial, Helvetica', color: 'red' }}>ราคาสุทธิที่ต้องชำระ (บาท)</p>
      </Card>
      <img
        style={{
          position: "absolute",
          top: "520px",
          left: "1330px",
          width: "360px",
          height: "300px",
          cursor: "pointer",
        }}
        alt=""
        src={delivery}
      />
    </div>
  );
}

export default Bank;
