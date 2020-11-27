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
  streetAddress: String,
  phoneNumber: Number,
  Logs: [
    {
      logsDate: Date,
      logsBusinesses: [
        {
          businessName: String,
          businessID: Number,
          businessAddress: String,
          customerTemp: String,
          logTime: String,
        },
      ],
    },
  ],
});

const Customers = mongoose.model("Customers", CustomersSchema);

module.exports = Customers;
