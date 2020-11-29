const express = require("express");
const router = express.Router();
const Businesses = require("../models/Businesses.model");
const Customers = require("../models/Customers.model");
const moment = require("moment-timezone");

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

// Get Businesse Loglist
router.get("/businesses/:businesseID/loglist", async (req, res) => {
  try {
    let arrDates = [];
    const businesse = await Businesses.findById(req.params.businesseID);
    for (let e = 0; e < businesse.logList.length; e++) {
      let arrLogs = [];
      for (let i = 0; i < businesse.customersLogs.length; i++) {
        if (
          businesse.logList[e].logDate === businesse.customersLogs[i].logDate
        ) {
          arrLogs.push(businesse.customersLogs[i]);
        }
      }
      let cache = { data: businesse.logList[e], length: arrLogs.length };
      arrDates.push(cache);
    }
    res.json(arrDates);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get Businesse customersLogs using Date
router.get("/businesses/:businesseID/:Date", async (req, res) => {
  try {
    let arrLogs = [];
    const businesse = await Businesses.findById(req.params.businesseID);
    for (let i = 0; i < businesse.customersLogs.length; i++) {
      if (businesse.customersLogs[i].logDate === req.params.Date) {
        arrLogs.push(businesse.customersLogs[i]);
      }
    }

    res.json(arrLogs);
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
      let addDate;
      await Businesses.find(
        {
          _id: req.params.businessId,
          logList: { $elemMatch: { logDate: fullDate } },
        },
        async (err, res) => {
          if (res.length) {
            addDate = "";
          } else {
            addDate = await Businesses.updateOne(
              { _id: req.params.businessId },
              {
                $push: {
                  logList: [
                    {
                      logDate: fullDate,
                    },
                  ],
                },
              }
            );
          }
        }
      );

      const addLogs = await Businesses.updateOne(
        { _id: req.params.businessId },
        {
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

      let addDateCustomer;

      await Customers.find(
        {
          _id: req.params.customerId,
          Logs: { $elemMatch: { businessID: req.params.businessId } },
        },
        async (err, res) => {
          if (res.length) {
            addDateCustomer = "";
          } else {
            addDateCustomer = await Customers.updateOne(
              { _id: req.params.customerId },
              {
                $push: {
                  Logs: [
                    {
                      logDate: fullDate,
                      businessID: req.params.businessId,
                    },
                  ],
                },
              }
            );
          }
        }
      );

      const addLogsCustomer = await Customers.updateOne(
        { _id: req.params.customerId },
        {
          $push: {
            logsBusinesses: [
              {
                logsDate: fullDate,
                businessID: req.params.businessId,
                customerTemp: req.params.customerTemp,
                logTime: fullTime,
              },
            ],
          },
        }
      );
      res.json({ addDate, addLogs, addDateCustomer, addLogsCustomer });
    } catch (err) {
      res.json({ message: err });
    }
  }
);

module.exports = router;
