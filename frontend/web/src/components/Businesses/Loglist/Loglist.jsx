import React from "react";
import "./Loglist.scss";

const Loglist = () => {
  return (
    <>
      <main className="Log-list">
        <div className="container hero">
          <div className="hero-box">
            <h1 className="title"> Log List</h1>
          </div>
        </div>
        <div className="container content">
          <div className="log-dates">
            <div className="total-customers">
              <h3 className="total">33</h3>
            </div>
            <div className="log-info">
              <h2 className="log-date">Nov 25 2020</h2>
              <p className="log-id">690082780230713386</p>
            </div>
            <div className="check-btn">
              <button className="primary-btn">Check</button>
            </div>
          </div>
          <div className="log-dates">
            <div className="total-customers">
              <h3 className="total">33</h3>
            </div>
            <div className="log-info">
              <h2 className="log-date">Nov 25 2020</h2>
              <p className="log-id">690082780230713386</p>
            </div>
            <div className="check-btn">
              <button className="primary-btn">Check</button>
            </div>
          </div>
          <div className="log-dates">
            <div className="total-customers">
              <h3 className="total">33</h3>
            </div>
            <div className="log-info">
              <h2 className="log-date">Nov 25 2020</h2>
              <p className="log-id">690082780230713386</p>
            </div>
            <div className="check-btn">
              <button className="primary-btn">Check</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Loglist;
