const express = require("express");
const router = express.Router();
const stocksController = require("../../controllers/stocks.controller");
// user create
router.route("/create").post(stocksController.createStocks);

// get all stock in
router.route("/stockin").get(stocksController.getStocksInAll);
//stock out product
router.route("/stockout").post(stocksController.makeSellProdcut);

router.route("/stocks-in").get(stocksController.stockInWithPagination);

module.exports = router;
