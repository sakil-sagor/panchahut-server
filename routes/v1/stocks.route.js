const express = require("express");
const router = express.Router();
const stocksController = require("../../controllers/stocks.controller");
// user create
router.route("/create").post(stocksController.createStocks);

module.exports = router;
