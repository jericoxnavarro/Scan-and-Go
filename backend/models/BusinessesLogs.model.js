const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BusinessesLogsSchema = new Schema({
  _id: String,
  BusinessId: String,
  logDate: String,
  customersLogs: [
    {
      customerId: String,
      customerTemp: String,
      logTime: String,
    },
  ],
});

const BusinessesLogs = mongoose.model("BusinessesLogs", BusinessesLogsSchema);

module.exports = BusinessesLogs;
