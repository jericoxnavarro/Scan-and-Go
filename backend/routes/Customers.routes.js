const express = require("express");
const router = express.Router();
const Customers = require("../models/Customers.model");

// Get all Customers
router.get("/customers", async (req, res) => {
  try {
    const customers = await Customers.find();
    res.json(customers);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get Customer
router.get("/customers/:customerID", async (req, res) => {
  try {
    const customer = await Customers.findById(req.params.customerID);
    res.json(customer);
  } catch (err) {
    res.json({ message: err });
  }
});

// Add Customer
router.post("/customers/add", async (req, res) => {
  const customer = new Customers({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    email: req.body.email,
    birthDay: req.body.birthDay,
    sex: req.body.sex,
    province: req.body.province,
    city: req.body.city,
    barangay: req.body.barangay,
    streetAddress: req.body.streetAddress,
    phoneNumber: req.body.phoneNumber,
    Logs: [],
  });
  try {
    const saveCustomer = await customer.save();
    res.json(saveCustomer);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
