import React, { useContext, useEffect, useState } from "react";
import "./Homebusiness.scss";
import { BusinessesContext } from "../../../context/Businesses.context";
import Customerbox from "../../Customerinfo/Customerbox";

const Homebusiness = () => {
  const [business] = useContext(BusinessesContext);
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const getCustomers = async () => {
      let date = new Date();
      const fullDate = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
      const response = await fetch(
        `https://hackfest-2020.herokuapp.com/api/businesses/${business}/${fullDate}`
      );
      const data = await response.json();
      setCustomers(data);
    };
    getCustomers();
  }, []);

  return (
    <>
      <main className="home-business">
        <div className="container hero">
          <div className="hero-box">
            <h1 className="Title">Logs Today</h1>
          </div>
        </div>
        <div className="container logss">
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
