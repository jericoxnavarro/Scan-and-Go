import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import "./Customerbox.scss";
import Logs from "./Logs";

const Customerbox = ({ data }) => {
  const [customers, setCustomers] = useState({});
  const [hide, setHide] = useState("none");
  const [set, setSet] = useState("");

  useEffect(() => {
    const getCustomer = async () => {
      const response = await fetch(
        `https://hackfest-2020.herokuapp.com/api/customers/${data.customerId}`
      );
      const datas = await response.json();
      setCustomers(datas);
    };
    getCustomer();
  }, []);

  if (set === "") {
    return (
      <>
        <div
          className="customer-info-box"
          onClick={() => {
            setHide("block");
            setSet("1");
          }}
        >
          <div className="customer-qrcode">
            <div className="qrbox">
              <QRCode
                size={250}
                fgColor="#043353"
                bgColor="#ffffff"
                value={`${data.customerId}`}
              />
            </div>
          </div>
          <div className="customer-info">
            <h2 className="customer-name">{`${customers.firstName} ${customers.lastName}`}</h2>
            <p className="more-info">{`${customers.barangay} ${customers.city} ${customers.province}`}</p>
            <p className="more-info">{`${customers.email}`}</p>
            <p className="more-info">{`0${customers.phoneNumber}`}</p>
            <p className="more-info">{`${data.logTime}`}</p>
            <p className="more-info">{`${data.customerTemp}°C`}</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="customer-info-box" onClick={() => setHide("block")}>
          <div className="customer-qrcode">
            <div className="qrbox">
              <QRCode
                size={250}
                fgColor="#043353"
                bgColor="#ffffff"
                value={`${data.customerId}`}
              />
            </div>
          </div>
          <div className="customer-info">
            <h2 className="customer-name">{`${customers.firstName} ${customers.lastName}`}</h2>
            <p className="more-info">{`${customers.barangay} ${customers.city} ${customers.province}`}</p>
            <p className="more-info">{`${customers.email}`}</p>
            <p className="more-info">{`0${customers.phoneNumber}`}</p>
            <p className="more-info">{`${data.logTime}`}</p>
            <p className="more-info">{`${data.customerTemp}°C`}</p>
          </div>
        </div>
        <div className="modal-customer-info" style={{ display: hide }}>
          <div className="container">
            <div className="main-info">
              <i
                onClick={() => setHide("none")}
                className="fas fa-times-circle logo"
              ></i>
              <div className="info-qrcode">
                <div className="qr-code">
                  <div className="qrbox">
                    <QRCode
                      size={250}
                      fgColor="#043353"
                      bgColor="#ffffff"
                      value={`${data.customerId}`}
                    />
                  </div>
                </div>
                <div className="infos">
                  <div className="customer-info">
                    <h2 className="customer-name">{`${customers.firstName} ${customers.lastName}`}</h2>
                    <p className="more-info">{`${customers.barangay} ${customers.city} ${customers.province}`}</p>
                    <p className="more-info">{`${customers.email}`}</p>
                    <p className="more-info">{`0${customers.phoneNumber}`}</p>
                    <p className="more-info">{`${data.logTime}`}</p>
                    <p className="more-info">{`${data.customerTemp}°C`}</p>
                  </div>
                </div>
              </div>
              <div className="customer-logs">
                <h1 className="logs-list">Customer Logs</h1>
                <div className="logs-box">
                  <div className="wrapper">
                    {customers.logsBusinesses.map((customer, index) => (
                      <Logs key={index} bus={customer} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Customerbox;
