import React, { useState, useEffect } from "react";
import "./Businesses.scss";
import provinces from "philippines/provinces";
import cities from "philippines/cities";

const Businesses = () => {
  const [business, setBusiness] = useState("");
  const [reg, setReg] = useState("MM");
  const [city, setCity] = useState([]);
  console.log(provinces);
  useEffect(() => {
    setCity([]);
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].province === reg) {
        setCity((oldArray) => [...oldArray, cities[i]]);
      }
    }
  }, [reg]);

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
        province: datas[3].substr(0, datas[3].indexOf(",")),
        city: datas[4],
        barangay: datas[5],
        phoneNumber: datas[6],
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
                    <select
                      required
                      name="provice"
                      onChange={(e) =>
                        setReg(
                          e.target.value.substr(
                            e.target.value.indexOf(",") + 1,
                            e.target.value.length
                          )
                        )
                      }
                    >
                      {provinces.map((province, index) => (
                        <option
                          key={index}
                          value={[province.name, province.key]}
                        >
                          {province.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label htmlFor="city" name="city">
                    <span>City</span>
                    <select required name="city">
                      {city.map((cit, index) => (
                        <option key={index} value={cit.name}>
                          {cit.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label htmlFor="s-address" name="s-address">
                  <span>Barangay</span>
                  <input type="text" name="s-address" placeholder="Barangay" />
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
