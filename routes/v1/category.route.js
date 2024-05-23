const express = require("express");
const router = express.Router();
const categoryController = require("../../controllers/category.controller");
// user create
router
  .route("/")
  .get(categoryController.allCategory)
  .post(categoryController.createCategory)
  .delete(categoryController.deleteCategory);

router.route("/:id").delete(categoryController.deleteCategory);

module.exports = router;
