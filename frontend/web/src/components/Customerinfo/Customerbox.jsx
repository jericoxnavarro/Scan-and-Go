import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import "./Customerbox.scss";

const Customerbox = ({ data }) => {
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    const getCustomer = async () => {
      console.log(data);
      const response = await fetch(
        `http://localhost:3001/api/customers/${data.customerId}`
      );
      const datas = await response.json();
      setCustomer(datas);
    };
    getCustomer();
  }, []);
  return (
    <>
      <div className="customer-info-box">
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
          <h2 className="customer-name">{`${customer.firstName} ${customer.lastName}`}</h2>
          <p className="more-info">{`${customer.barangay} ${customer.city} ${customer.province}`}</p>
          <p className="more-info">{`${customer.email}`}</p>
          <p className="more-info">{`0${customer.phoneNumber}`}</p>
          <p className="more-info">{`${data.logTime}`}</p>
          <p className="more-info">{`${data.customerTemp}°C`}</p>
        </div>
      </div>
    </>
  );
};

export default Customerbox;
