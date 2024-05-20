const express = require("express");
const router = express.Router();
const categoryController = require("../../controllers/category.controller");
// user create
router
  .route("/")
  .post(categoryController.createCategory)
  .delete(categoryController.deleteCategory);

router.route("/id").get(categoryController.singleCategory);

module.exports = router;
