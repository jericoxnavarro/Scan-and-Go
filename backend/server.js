const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Routes
const customersRoute = require("./routes/Customers.routes");
const businessesRoute = require("./routes/Businesses.routes");

const app = express();
const port = process.env.PORT || 3001;

// Midlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("/api", customersRoute);
app.use("/api", businessesRoute);

//DB Connections
const dbURI = process.env.dbURI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};
mongoose.Promise = global.Promise;
mongoose
  .connect(dbURI, options)
  .then((res) => {
    console.log("Connected to", res.connections[0].name);
    // Server run after DB Connection is up
    app.listen(port, () => {
      console.log("CO server is running on port", port);
    });
  })
  .catch((err) => console.log(err));
