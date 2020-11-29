const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomersSchema = new Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  email: String,
  birthDay: String,
  sex: String,
  province: String,
  city: String,
  barangay: String,
  phoneNumber: Number,
  Logs: [
    {
      logsDate: String,
      businessID: String,
    },
  ],
  logsBusinesses: [
    {
      logsDate: String,
      businessID: String,
      customerTemp: String,
      logTime: String,
    },
  ],
});

const Customers = mongoose.model("Customers", CustomersSchema);

module.exports = Customers;
