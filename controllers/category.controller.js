const {
  createCategoryInDb,
  findExistinCategoryDb,
  findAllCategoryInDb,
} = require("../services/category.service");

const {
  findSingleCategoryInDb,
  deleteCategoryInDb,
} = require("../services/category.service");

// create report
exports.createCategory = async (req, res) => {
  try {
    console.log(req.body);
    const findExisting = await findExistinCategoryDb(req.body.category);
    if (findExisting) {
      res.status(400);
      throw new Error("Already Exist this Category");
    }

    const result = await createCategoryInDb(req.body);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};
// find All Category
exports.allCategory = async (req, res) => {
  try {
    const result = await findAllCategoryInDb();
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
// delete category
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteCategoryInDb(id);
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
