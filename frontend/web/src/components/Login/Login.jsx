import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <>
      <main className="log-in">
        <div className="container">
          <div className="login-form">
            <form className="log-in-form">
              <h2 className="title">Business Log In</h2>
              <label htmlFor="business-CO-ID" name="business-CO-ID">
                <input
                  required
                  type="text"
                  name="business-CO-ID"
                  placeholder="Your CO ID"
                />
              </label>
              <div className="log-in-btn">
                <button className="primary-btn">Log in</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
