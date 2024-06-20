const express = require("express");
const router = express.Router();
const stocksController = require("../../controllers/stocks.controller");
// user create
router.route("/create").post(stocksController.createStocks);
// get signle stock product
router.route("/singlestock/:productId").get(stocksController.getSingleStock);

// get all stock in
router.route("/stockin").get(stocksController.getStocksInAll);
//stock out product
router.route("/stockout").post(stocksController.makeSellProdcut);

router.route("/stocks-in").get(stocksController.stockInWithPagination);

// delete single stock
router.route("/singlestock/:stockId").delete(stocksController.deleteStock);

module.exports = router;
