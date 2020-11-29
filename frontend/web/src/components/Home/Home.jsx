import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <main className="home">
        <div className="container">
          <div className="hero">
            <h1 className="title">Scan&Go</h1>
            <p className="short">
              No more writing in the log books, Scan&Go make log in easy.
              Contact Tracing is much easier with Scan&Go.
            </p>
            <div className="create-btn">
              <button className="primary-btn">
                <Link to="/customers" className="create">
                  Create Your QRCode
                </Link>
              </button>
            </div>
          </div>
          <div className="logo-main">
            <img src="logs.svg" alt="LOGO" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
