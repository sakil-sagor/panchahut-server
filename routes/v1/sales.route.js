const express = require("express");
const router = express.Router();
const salesController = require("../../controllers/sales.controller");
// search product for sell by id
router.route("/:id").get(salesController.searchProductById);
// search product for sell by id
router.route("/barcode/:id").get(salesController.searchProductByIdBarCode);

// add to cart sales count
router.route("/salesforcountincart/:id").get(salesController.getStockQuentity);
// find and get user

module.exports = router;
