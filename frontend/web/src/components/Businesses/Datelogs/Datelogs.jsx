import React, { useContext, useEffect, useState } from "react";
import "./Datelogs.scss";
import { BusinessesContext } from "../../../context/Businesses.context";
import Customerbox from "../../Customerinfo/Customerbox";

const Datelogs = ({ date }) => {
  const [customers, setCustomers] = useState([]);
  const [business] = useContext(BusinessesContext);

  useEffect(() => {
    const getCustomers = async () => {
      const response = await fetch(
        `https://hackfest-2020.herokuapp.com/api/businesses/${business}/${date}`
      );
      const data = await response.json();
      console.log(data);
      setCustomers(data);
    };
    getCustomers();
  }, []);

  return (
    <>
      <main className="datelogs">
        <div className="container hero">
          <div className="hero-box">
            <h1 className="title">{date}</h1>
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

export default Datelogs;
