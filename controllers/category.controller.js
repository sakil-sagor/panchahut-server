const {
  createCategoryInDb,
  findExistinCategoryDb,
  findAllCategoryInDb,
  createSubCategoryInDB,
  deleteSubCategoryInDB,
} = require("../services/category.service");

const {
  findSingleCategoryInDb,
  deleteCategoryInDb,
} = require("../services/category.service");

// create category
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
// create sub category
exports.createSubCategory = async (req, res) => {
  try {
    const { categoryId, subCategory } = req.body;
    console.log(categoryId);
    console.log(subCategory);
    const result = await createSubCategoryInDB(categoryId, subCategory);
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
// remove sub category name
exports.deleteSubCategory = async (req, res) => {
  try {
    const { categoryId, subName } = req.body;

    const result = await deleteSubCategoryInDB(categoryId, subName);
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
