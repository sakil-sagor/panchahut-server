const Category = require("../models/Category");

exports.createCategoryInDb = async (details) => {
  const result = await Category.create(details);
  return result;
};
exports.deleteCategoryInDb = async () => {
  const result = await Category.create();
  return result;
};
