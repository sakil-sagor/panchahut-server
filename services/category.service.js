const Category = require("../models/Category");
// create all
exports.createCategoryInDb = async (details) => {
  const result = await Category.create(details);
  return result;
};
// find all
exports.findAllCategoryInDb = async () => {
  const result = await Category.find({}).sort({ category: -1 });

  return result;
};
exports.findSingleCategoryInDb = async () => {
  const result = await Category.create();

  return result;
};
// delete category
exports.deleteCategoryInDb = async (id) => {
  const result = await Category.deleteOne({ _id: id });
  console.log(result);
  return result;
};

// find existing category
exports.findExistinCategoryDb = async (data) => {
  const result = await Category.findOne({ category: data });
  return result;
};
