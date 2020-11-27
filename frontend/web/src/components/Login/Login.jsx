import React, { useState, useContext } from "react";
import "./Login.scss";
import { BusinessesContext } from "../../context/Businesses.context";
import Cookies from "universal-cookie";

const Login = () => {
  const cookies = new Cookies();
  const [business, setBusiness] = useContext(BusinessesContext);
  const [error, setError] = useState("none");
  const submit = (e) => {
    e.preventDefault();
    let datas = [];
    const data = new FormData(e.target);
    data.forEach(function (value, key) {
      datas.push(value);
    });

    fetch(`http://localhost:3001/api/businesses/${datas[0]}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.message === undefined) {
          setBusiness(datas[0]);
          console.log(json);
          setError("none");
          cookies.set("businesseID", datas[0], { path: "/" });
        } else {
          setError("flex");
          console.log("yey");
        }
      });
  };
  return (
    <>
      <main className="log-in">
        <div className="container">
          <div className="login-form">
            <form className="log-in-form" onSubmit={submit}>
              <h2 className="title">Business Log In</h2>
              <label htmlFor="business-CO-ID" name="business-CO-ID">
                <input
                  required
                  type="text"
                  name="business-CO-ID"
                  placeholder="Your CO ID"
                />
              </label>
              <div className="error" style={{ display: error }}>
                <p className="error-text">Invalid CO ID please try again!</p>
              </div>
              <div className="log-in-btn">
                <button type="submit" className="primary-btn">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
