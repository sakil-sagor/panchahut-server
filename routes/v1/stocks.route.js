const express = require("express");
const router = express.Router();
const stocksController = require("../../controllers/stocks.controller");
// user create
router.route("/create").post(stocksController.createStocks);

// get all stock in
router.route("/stockin").get(stocksController.getStocksInAll);
//stock out product
router.route("/stockout").post(stocksController.makeSellProdcut);

module.exports = router;
