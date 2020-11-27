const express = require("express");
const router = express.Router();
const Businesses = require("../models/Businesses.model");

// Get all Businesses
router.get("/businesses", async (req, res) => {
  try {
    const businesses = await Businesses.find();
    res.json(businesses);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get Businesse
router.get("/businesses/:businesseID", async (req, res) => {
  try {
    const businesse = await Businesses.findById(req.params.businesseID);
    res.json(businesse);
  } catch (err) {
    res.json({ message: err });
  }
});

// Add Businesse
router.post("/businesses/add", async (req, res) => {
  const businesse = new Businesses({
    businessId: req.body.businessId,
    businessName: req.body.businessName,
    email: req.body.email,
    province: req.body.province,
    city: req.body.city,
    barangay: req.body.barangay,
    streetAddress: req.body.streetAddress,
    phoneNumber: req.body.phoneNumber,
    logList: [],
    customersLogs: [],
  });

  try {
    const saveBusinesse = await businesse.save();
    res.json(saveBusinesse);
  } catch (err) {
    res.json({ message: err });
  }
});

// Add Customer Log
router.put(
  "/businesses/:businessId/:customerId/:customerTemp",
  async (req, res) => {
    try {
      let date = new Date();
      const fullDate = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
      const fullTime = `${date.getHours()}:${date.getMinutes()}`;
      const addDate = await Businesses.update(
        { _id: req.params.businessId },
        {
          $push: {
            logList: [
              {
                logDate: fullDate,
              },
            ],
          },
          $push: {
            customersLogs: [
              {
                logDate: fullDate,
                customerId: req.params.customerId,
                customerTemp: req.params.customerTemp,
                logTime: fullTime,
              },
            ],
          },
        }
      );
      let obj = await addDate;
      console.log(obj);
    } catch (err) {
      res.json({ message: err });
    }
  }
);

module.exports = router;
