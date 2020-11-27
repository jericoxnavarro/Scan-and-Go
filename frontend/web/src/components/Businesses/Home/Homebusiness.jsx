import React, { useContext, useEffect, useState } from "react";
import "./Homebusiness.scss";
import { BusinessesContext } from "../../../context/Businesses.context";
import Customerbox from "../../Customerinfo/Customerbox";

const Homebusiness = () => {
  const [business, setBusiness] = useContext(BusinessesContext);
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const getCustomers = async () => {
      console.log(business);
      let date = new Date();
      const fullDate = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
      const response = await fetch(
        `http://localhost:3001/api/businesses/${business}/${fullDate}`
      );
      const data = await response.json();
      console.log(data);
      setCustomers(data);
    };
    getCustomers();
  }, [customers]);

  return (
    <>
      <main className="home-business">
        <div className="container hero">
          <div className="hero-box">
            <h1 className="Title">Logs Today</h1>
          </div>
        </div>
        <div className="container logs">
          <div className="grid-logs">
            {customers.map((customer, index) => (
              <div key={customer._id} className="box">
                <Customerbox data={customer} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Homebusiness;
