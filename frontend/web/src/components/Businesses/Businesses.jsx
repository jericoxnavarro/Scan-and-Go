import React, { useState } from "react";
import "./Businesses.scss";

const Businesses = () => {
  const [business, setBusiness] = useState("");
  const submit = (e) => {
    e.preventDefault();
    let datas = [];
    const data = new FormData(e.target);
    data.forEach(function (value, key) {
      datas.push(value);
    });
    console.log(datas);

    fetch("http://localhost:3001/api/businesses/add", {
      method: "POST",
      body: JSON.stringify({
        businessId: datas[0],
        businessName: datas[1],
        email: datas[2],
        province: datas[3],
        birthDay: datas[4],
        city: datas[5],
        barangay: datas[6],
        streetAddress: datas[7],
        phoneNumber: datas[8],
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => setBusiness(json));
  };

  if (business === "") {
    return (
      <>
        <main className="main-businesses">
          <div className="container">
            <div className="form-box">
              <h1 className="Title">Business Information</h1>
              <form className="businesses-form" onSubmit={submit}>
                <label htmlFor="business-id" name="business-id">
                  <span>Business ID</span>
                  <input
                    required
                    type="number"
                    name="business-id"
                    placeholder="Business ID"
                  />
                </label>
                <label htmlFor="business-name" name="business-name">
                  <span>Business Name</span>
                  <input
                    required
                    type="text"
                    name="business-name"
                    placeholder="Business Name"
                  />
                </label>
                <label htmlFor="email" name="email">
                  <span>Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </label>
                <div className="input-2">
                  <label htmlFor="provice" name="provice">
                    <span>Provice</span>
                    <select required name="provice">
                      <option value="Ilocos Sur">Ilocos Sur</option>
                    </select>
                  </label>
                  <label htmlFor="city" name="city">
                    <span>City</span>
                    <select required name="city">
                      <option value="Vigan">Vigan</option>
                    </select>
                  </label>
                </div>
                <label htmlFor="barangay" name="barangay">
                  <span>Barangay</span>
                  <select required name="barangay">
                    <option value="Anonang Mayor">Anonang Mayor</option>
                  </select>
                </label>
                <label htmlFor="s-address" name="s-address">
                  <span>Street Address</span>
                  <input
                    type="text"
                    name="s-address"
                    placeholder="Street Address"
                  />
                </label>

                <label htmlFor="p-number" name="p-number">
                  <span>Phone Number</span>
                  <input
                    required
                    type="number"
                    name="p-number"
                    placeholder="Phone Number"
                  />
                </label>

                <div className="create-customer">
                  <button className="primary-btn" type="submit">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </>
    );
  } else {
    return (
      <main className="main-businesses">
        <div className="container">
          <div className="form-box">
            <div className="businessCO-id">
              <h1 className="remind">Log in Using this CO ID</h1>
              <h2 className="business-CO-ID">{business._id}</h2>
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default Businesses;
