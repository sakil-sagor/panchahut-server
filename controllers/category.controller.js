const {
  createCategoryInDb,
  findSingleCategoryInDb,
  deleteCategoryInDb,
} = require("../services/category.service");

// create report
exports.createCategory = async (req, res) => {
  try {
    const result = await createCategoryInDb(req.body);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't get the Products",
    });
  }
};
exports.singleCategory = async (req, res) => {
  try {
    const result = await findSingleCategoryInDb();
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't get the Products",
    });
  }
};
// create report
exports.deleteCategory = async (req, res) => {
  try {
    const result = await deleteCategoryInDb();
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't get the Products",
    });
  }
};
