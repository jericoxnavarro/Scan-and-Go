import React, { useState } from "react";
import "./Customers.scss";
import QRCode from "qrcode.react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const Customers = () => {
  const [customer, setCustomer] = useState("");
  const submit = (e) => {
    e.preventDefault();
    let datas = [];
    const data = new FormData(e.target);
    data.forEach(function (value, key) {
      datas.push(value);
    });
    console.log(datas);

    fetch("http://localhost:3001/api/customers/add", {
      method: "POST",
      body: JSON.stringify({
        firstName: datas[0],
        middleName: datas[1],
        lastName: datas[2],
        email: datas[3],
        birthDay: datas[4],
        sex: datas[5],
        province: datas[6],
        city: datas[7],
        barangay: datas[8],
        streetAddress: datas[9],
        phoneNumber: datas[10],
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => setCustomer(json));
  };

  const downloadID = async () => {
    let node = document.querySelector("#customerID");
    await html2canvas(node).then(function (canvas) {
      canvas.toBlob(function (blob) {
        saveAs(blob, `${customer._id}.png`);
      });
    });
  };

  if (customer === "") {
    return (
      <>
        <main className="main-customers">
          <div className="container">
            <div className="form-box">
              <h1 className="Title">Customer Information</h1>
              <form className="customers-form" onSubmit={submit}>
                <div className="input-2">
                  <label htmlFor="f-name" name="f-name">
                    <span>First Name</span>
                    <input
                      required
                      type="text"
                      name="f-name"
                      placeholder="First Name"
                    />
                  </label>
                  <label htmlFor="m-name" name="m-name">
                    <span>Middle Name</span>
                    <input
                      required
                      type="text"
                      name="m-name"
                      placeholder="Middle Name"
                    />
                  </label>
                  <label htmlFor="l-name" name="l-name">
                    <span>Last Name</span>
                    <input
                      required
                      type="text"
                      name="l-name"
                      placeholder="Last Name"
                    />
                  </label>
                </div>
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
                  <label htmlFor="b-day" name="b-day">
                    <span>Birth Date</span>
                    <input required type="date" name="b-day" />
                  </label>
                  <label htmlFor="sex" name="sex">
                    <span>Sex</span>
                    <select required name="sex">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </label>
                </div>
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
      <>
        <main className="main-customers">
          <div className="container">
            <div className="block"></div>
            <div className="form-box">
              <div className="customerCO-id" id="customerID">
                <h1 className="logo">CO</h1>
                <div className="qrcode">
                  <div className="qrbox">
                    <QRCode
                      size={350}
                      fgColor="#043353"
                      bgColor="#ffffff"
                      value={customer._id}
                    />
                  </div>
                </div>
                <div className="customer-info">
                  <h2 className="customer-name">{`${
                    customer.firstName
                  } ${customer.middleName.charAt(0)}. ${
                    customer.lastName
                  }`}</h2>
                  <p className="info">{`${customer.streetAddress} ${customer.barangay} ${customer.city} ${customer.province}`}</p>
                  <p className="info">{`0${customer.phoneNumber}`}</p>
                  <p className="info">{`${customer.sex}`}</p>
                  <p className="info">{`${customer.email}`}</p>
                </div>
              </div>
              <div className="download-id">
                <button className="primary-btn" onClick={downloadID}>
                  Download your CO ID
                </button>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default Customers;
