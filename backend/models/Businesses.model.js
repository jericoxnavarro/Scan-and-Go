const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BusinessesSchema = new Schema({
  businessId: String,
  businessName: String,
  email: String,
  province: String,
  city: String,
  barangay: String,
  phoneNumber: Number,
  logList: [
    {
      logDate: String,
    },
  ],
  customersLogs: [
    {
      logDate: String,
      customerId: String,
      customerTemp: String,
      logTime: String,
    },
  ],
});

const Businesses = mongoose.model("Businesses", BusinessesSchema);

module.exports = Businesses;
