require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// const { HoldingsModel } = require("./model/HoldingsModel");
// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");
const AuthRoute = require("./routes/AuthRoute");
const InitRoute = require("./routes/InitRoute");
const HoldingsRoute = require("./routes/HoldingsRoute");
const PositionsRoute = require("./routes/PositionsRoute");
const OrderRoute = require("./routes/OrderRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(mongoose.connect(uri).then(() => console.log("MongoDB connected.")));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/auth", AuthRoute);
app.use("/init", InitRoute);
app.use("/holdings", HoldingsRoute);
app.use("/positions", PositionsRoute);
app.use("/orders", OrderRoute);

// app.listen(PORT, () => {
//   console.log("Server listening to port 3002");
//   mongoose.connect(uri);
//   console.log("DB connected");
// });

// Export the app for the serverless function
module.exports = app;