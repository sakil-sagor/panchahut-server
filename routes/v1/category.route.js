const express = require("express");
const router = express.Router();
const categoryController = require("../../controllers/category.controller");
// category create
router
  .route("/")
  .get(categoryController.allCategory)
  .post(categoryController.createCategory)
  .delete(categoryController.deleteCategory);

router.route("/:id").delete(categoryController.deleteCategory);

// create sub category
router.route("/createsubcategory").put(categoryController.createSubCategory);

router.route("/deletesubcategory").put(categoryController.deleteSubCategory);

module.exports = router;
