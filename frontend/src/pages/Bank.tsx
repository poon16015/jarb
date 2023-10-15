import React, { useState, useCallback } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';

const { TabPane } = Tabs;

function Bank() {
  const [value, setValue] = useState<number>(1);
  const [selectedRadio, setSelectedRadio] = useState<number | null>(null);
  const navigate = useNavigate();

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const handleRadioClick = (radioValue: number) => {
    setSelectedRadio(radioValue);
  };

  const handleConfirmationButtonClick = () => {
    if (selectedRadio === 1) {
      navigate('/ConfirmQR');
    } else if (selectedRadio === 2) {
      navigate('/ConfirmSCB_Bank');
    } else if (selectedRadio === 3) {
      navigate('/ConfirmBangkok_Bank');
    } else if (selectedRadio === 4) {
      navigate('/ConfirmKasikorn_Bank');
    } else if (selectedRadio === 5) {
      navigate('/ConfirmKrungsri_Bank');
    } else if (selectedRadio === 6) {
      navigate('/ConfirmKasikorn_Credit');
    } else if (selectedRadio === 7) {
      navigate('/ConfirmKTC_Credit');
    } else if (selectedRadio === 8) {
      navigate('/ConfirmAmerican_Credit');
    }
  };

  const QR_CodeClick = useCallback(() => {
    setValue(1);
  }, []);

  const bank_scbClick = useCallback(() => {
    setValue(2);
  }, []);

  const bank_bangkokClick = useCallback(() => {
    setValue(3);
  }, []);

  const bank_kasikornClick = useCallback(() => {
    setValue(4);
  }, []);

  const bank_krungsriClick = useCallback(() => {
    setValue(5);
  }, []);

  const credit_kasikornClick = useCallback(() => {
    setValue(6);
  }, []);

  const ktcClick = useCallback(() => {
    setValue(7);
  }, []);

  const american_expressClick = useCallback(() => {
    setValue(8);
  }, []);

  return (
    <div>
      <Navbar/>
      {/* เริ่มต้นส่วนของ UI */}
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
        {/* แท็บที่ 1: QR Code */}
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
          {/* รูปภาพ QR Code */}
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
            onClick={() => {
              QR_CodeClick();
              handleRadioClick(1);
            }}
          />
          
          {/* Radio Group สำหรับเลือก QR Code */}
          <Radio.Group onChange={onChange} value={value}>
            <Radio
              value={1}
              style={{ marginLeft: '110px', marginTop: '10px', fontSize: '40px' }}
              checked={selectedRadio === 1}
              onClick={() => {
                handleRadioClick(1);
              }}
            ></Radio>
          </Radio.Group>
        </TabPane>

        {/* แท็บที่ 2: ธนาคาร */}
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
          {/* รูปภาพของธนาคาร */}
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
            onClick={() => {
              bank_scbClick();
              handleRadioClick(2);
            }}
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
            onClick={() => {
              bank_bangkokClick();
              handleRadioClick(3);
            }}
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
            onClick={() => {
              bank_kasikornClick();
              handleRadioClick(4);
            }}
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
            onClick={() => {
              bank_krungsriClick();
              handleRadioClick(5);
            }}
          />

          {/* เพิ่มรูปภาพธนาคารอื่น ๆ ตามที่ต้องการ */}
          
          {/* Radio Group สำหรับเลือกธนาคาร */}
          <Radio.Group onChange={onChange} value={value}>
            <Radio
              value={2}
              style={{ marginLeft: '110px', marginTop: '10px', fontSize: '40px' }}
              checked={selectedRadio === 2}
              onClick={() => {
                handleRadioClick(2);
              }}
            ></Radio>
            <Radio
              value={3}
              style={{ marginLeft: '320px', marginTop: '10px', fontSize: '40px' }}
              checked={selectedRadio === 3}
              onClick={() => {
                handleRadioClick(3);
              }}
            ></Radio>
            <Radio
              value={4}
              style={{ marginLeft: '322.5px', marginTop: '10px', fontSize: '40px' }}
              checked={selectedRadio === 4}
              onClick={() => {
                handleRadioClick(4);
              }}
            ></Radio>
            <Radio
              value={5}
              style={{ marginLeft: '327px', marginTop: '10px', fontSize: '40px' }}
              checked={selectedRadio === 5}
              onClick={() => {
                handleRadioClick(5);
              }}
            ></Radio>
          </Radio.Group>
        </TabPane>

        {/* แท็บที่ 3: บัตรเครดิต */}
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
          {/* รูปภาพบัตรเครดิต */}
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
            onClick={() => {
              credit_kasikornClick();
              handleRadioClick(6);
            }}
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
            onClick={() => {
              ktcClick();
              handleRadioClick(7);
            }}
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
            onClick={() => {
              american_expressClick();
              handleRadioClick(8);
            }}
          />

          {/* เพิ่มรูปภาพบัตรเครดิตอื่น ๆ ตามที่ต้องการ */}
          
          {/* Radio Group สำหรับเลือกบัตรเครดิต */}
          <Radio.Group onChange={onChange} value={value}>
            <Radio
              value={6}
              style={{ marginLeft: '110px', marginTop: '10px', fontSize: '40px' }}
              checked={selectedRadio === 6}
              onClick={() => {
                handleRadioClick(6);
              }}
            ></Radio>
            <Radio
              value={7}
              style={{ marginLeft: '320px', marginTop: '10px', fontSize: '40px' }}
              checked={selectedRadio === 7}
              onClick={() => {
                handleRadioClick(7);
              }}
            ></Radio>
            <Radio
              value={8}
              style={{ marginLeft: '322.5px', marginTop: '10px', fontSize: '40px' }}
              checked={selectedRadio === 8}
              onClick={() => {
                handleRadioClick(8);
              }}
            ></Radio>
          </Radio.Group>
        </TabPane>
      </Tabs>

      {/* CSS สำหรับปรับแต่งรูปแบบของแท็บ */}
      <style>
        {`
          .ant-tabs.custom-tabs {
            position: absolute;
            top: 36%;
            left: 1.2%;
          }
        `}
      </style>

      {/* รูปภาพด้านล่าง */}
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

      {/* ปุ่ม "ที่อยู่จัดส่ง" */}
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
        <Link to="/address" style={{ textDecoration: 'none', color: 'white', width: '100%', height: '100%' }}>
          {`<     ที่อยู่จัดส่ง`}
        </Link>
      </Button>

      {/* ปุ่ม "ยืนยันการสั่งซื้อ" */}
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
        onClick={handleConfirmationButtonClick}
      >
        {`ยืนยันการสั่งซื้อ     >`}
      </Button>

      {/* ข้อมูลคำสั่งซื้อ */}
      <Card
        title="ข้อมูลคำสั่งซื้อ"
        bordered={false}
        style={{
          width: 585,
          position: 'absolute',
          left: '1315px',
          top: '300px',
          height: '540px',
          border: '1px solid #ccc',
          fontSize: '45px',
          fontFamily: 'Bold, Helvetica',
        }}
      >
        <p style={{ margin: '8px 0', borderBottom: '1px solid #ccc', fontSize: '20px', fontFamily: 'Arial, Helvetica' }}>รวมทั้งหมด (บาท)</p>
        <p style={{ margin: '8px 0', borderBottom: '1px solid #ccc', fontSize: '20px', fontFamily: 'Arial, Helvetica' }}>ค่าจัดส่ง (บาท)</p>
        <p style={{ margin: '8px 0', borderBottom: '1px solid #ccc', fontSize: '20px', fontFamily: 'Arial, Helvetica', color: 'red' }}>ราคาสุทธิที่ต้องชำระ (บาท)</p>
      </Card>

      {/* รูปภาพด้านขวาล่าง */}
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
