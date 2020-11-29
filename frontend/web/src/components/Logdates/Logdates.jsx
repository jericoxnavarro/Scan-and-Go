import React, { useContext, useEffect, useState } from "react";
import "./Logdates.scss";
import { BusinessesContext } from "../../context/Businesses.context";
import Customerbox from "../Customerinfo/Customerbox";

const Logdates = ({ logs }) => {
  const [customers, setCustomers] = useState([]);
  const [business, setBusiness] = useContext(BusinessesContext);
  const [change, setChange] = useState("");

  useEffect(() => {
    const getCustomers = async () => {
      const response = await fetch(
        `https://hackfest-2020.herokuapp.com/api/businesses/${business}/${logs.data.logDate}`
      );
      const data = await response.json();
      console.log(data);
      setCustomers(data);
    };
    getCustomers();
  }, []);

  if (change === "") {
    return (
      <>
        <div className="log-dates">
          <div className="total-customers">
            <h3 className="total">{logs.length}</h3>
          </div>
          <div className="log-info">
            <h2 className="log-date">{logs.data.logDate}</h2>
            <p className="log-id">{logs.data._id}</p>
          </div>
          <div className="check-btn">
            <button onClick={() => setChange("1")} className="primary-btn">
              Check
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="container logs">
        <div className="up">
          <h2 className="date">{logs.data.logDate}</h2>
          <div className="back-btn">
            <button onClick={() => setChange("")} className="primary-btn">
              Close
            </button>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="grid-logs">
          {customers.map((customer, index) => (
            <div key={customer._id} className="box">
              <Customerbox data={customer} />
            </div>
          ))}
        </div>
        <hr className="line"></hr>
      </div>
    );
  }
};

export default Logdates;
