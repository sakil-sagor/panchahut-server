const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

// middlewares

app.use(
  cors({
    origin: ["http://localhost:5173", "*"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//routes
const usersRoute = require("./routes/v1/users.route");
const productsRoute = require("./routes/v1/products.route");

app.use("/api/v1/product", productsRoute);
app.use("/api/v1/user", usersRoute);

module.exports = app;
