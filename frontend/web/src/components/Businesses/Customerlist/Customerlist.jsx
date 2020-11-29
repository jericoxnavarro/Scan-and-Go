import React, { useContext, useEffect, useState } from "react";
import "./Customerlist.scss";
import { BusinessesContext } from "../../../context/Businesses.context";
import Customerbox from "../../Customerinfo/Customerbox";

const Customerlist = () => {
  const [business] = useContext(BusinessesContext);

  const [customers, setCustomers] = useState([]);
  const [final, setFinal] = useState([]);
  useEffect(() => {
    const getCustomers = async () => {
      const response = await fetch(
        `https://hackfest-2020.herokuapp.com/api/businesses/${business}`
      );
      const data = await response.json();
      setCustomers(data.customersLogs);
    };
    getCustomers();
    console.log(customers);
    function getUnique(arr, comp) {
      const unique = arr
        .map((e) => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter((e) => arr[e])
        .map((e) => arr[e]);

      return unique;
    }
    console.log(getUnique(customers, "customerId"));
  }, []);

  return (
    <>
      <main className="home-business">
        <div className="container hero">
          <div className="hero-box">
            <h1 className="Title">Customer List</h1>
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

export default Customerlist;
