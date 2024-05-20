const Category = require("../models/Category");

exports.createCategoryInDb = async (details) => {
  const result = await Category.create(details);
  return result;
};
exports.findSingleCategoryInDb = async () => {
  const result = await Category.create();
  return result;
};
exports.deleteCategoryInDb = async () => {
  const result = await Category.create();
  return result;
};
