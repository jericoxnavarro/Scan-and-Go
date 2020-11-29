import React, { useState, useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { BusinessesContext } from "../../context/Businesses.context";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Navbar = () => {
  const [business, setBusiness] = useContext(BusinessesContext);
  if (business === undefined) {
    return (
      <>
        <nav className="main-nav">
          <div className="container">
            <Link className="brand-logo" to="/">
              S&G
            </Link>
            <ul className="nav-items">
              <li className="nav-item">
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/customers" className="link">
                  Customers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/businesses" className="link">
                  Businesses
                </Link>
              </li>
            </ul>
            <div className="login-btn">
              <button className="primary-btn">
                <Link to="/login" className="login">
                  Log in
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav className="main-nav">
          <div className="container">
            <Link className="brand-logo" to="/business">
              S&G
            </Link>
            <ul className="nav-items">
              <li className="nav-item">
                <Link to="/business" className="link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/customerslist" className="link">
                  Customers List
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/loglist" className="link">
                  Log List
                </Link>
              </li>
            </ul>
            <div className="login-btn">
              <button
                className="primary-btn"
                onClick={() => {
                  setBusiness("");
                  cookies.remove("businesseID", { path: "/" });
                }}
              >
                <Link to="/login" className="login">
                  Log Out
                </Link>
              </button>
            </div>
          </div>
        </nav>
      </>
    );
  }
};

export default Navbar;
