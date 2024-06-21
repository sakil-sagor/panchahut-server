const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

// middlewares

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://panchahut.com",
      "https://panchahut.netlify.app",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//routes
const usersRoute = require("./routes/v1/users.route");
const productsRoute = require("./routes/v1/products.route");
const stocksRoute = require("./routes/v1/stocks.route");
const categoryRoute = require("./routes/v1/category.route");
const salesRoute = require("./routes/v1/sales.route");

app.use("/api/v1/sales", salesRoute);
app.use("/api/v1/product", productsRoute);
app.use("/api/v1/stocks", stocksRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/user", usersRoute);

module.exports = app;

// PORT=5000
// TOKEN_SECRET=ec7358b8dae1636356ca084d7e6f8614f1f892761d484e1997793617255cc9a0c10925350cc6598a0f109e62c679dc743ba4f5af1ba3106fd9816107f51ce9c1

// DB_USER=mithun-coaching
// DB_PASS=rQuUc5Ke4IOvOmw1

// panchahut
// keAS8g1X78BSwiNG
// mongodb+srv://panchahut:keAS8g1X78BSwiNG@cluster0.uw9t1vb.mongodb.net/panchahut?retryWrites=true&w=majority&appName=Cluster0
