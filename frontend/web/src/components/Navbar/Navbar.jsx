import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="container">
          <Link className="brand-logo" to="/">
            CO
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
};

export default Navbar;
