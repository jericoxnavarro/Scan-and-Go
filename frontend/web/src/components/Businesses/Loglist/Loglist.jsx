import React, { useContext, useEffect, useState } from "react";
import { BusinessesContext } from "../../../context/Businesses.context";
import "./Loglist.scss";
import Logdates from "../../Logdates/Logdates";

const Loglist = () => {
  const [business, setBusiness] = useContext(BusinessesContext);
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    const getLogs = async () => {
      const response = await fetch(
        `http://localhost:3001/api/businesses/${business}/loglist`
      );
      const data = await response.json();
      setLogs(data);
    };
    getLogs();
  }, []);
  return (
    <>
      <main className="Log-list">
        <div className="container hero">
          <div className="hero-box">
            <h1 className="title"> Log List</h1>
          </div>
        </div>
        <div className="container content">
          {logs
            .slice(0)
            .reverse()
            .map((log, index) => (
              <Logdates key={index} logs={log} />
            ))}
        </div>
      </main>
    </>
  );
};

export default Loglist;
