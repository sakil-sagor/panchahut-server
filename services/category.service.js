const Category = require("../models/Category");
// create category
exports.createCategoryInDb = async (details) => {
  const result = await Category.create(details);
  return result;
};
// find all category
exports.findAllCategoryInDb = async () => {
  const result = await Category.find({})
    .select({ isDeleted: 0 })
    .sort({ category: -1 });

  return result;
};

// delete category
exports.deleteCategoryInDb = async (id) => {
  const result = await Category.deleteOne({ _id: id });

  return result;
};

// find existing category
exports.findExistinCategoryDb = async (data) => {
  const result = await Category.findOne({ category: data });
  return result;
};

// this is all for sub category from here
// create sub category
exports.createSubCategoryInDB = async (categoryId, subCategory) => {
  const result = await Category.updateOne(
    { _id: categoryId },
    { $addToSet: { subCategory: { $each: [subCategory] } } }
  );

  return result;
};
// remove sub category name
exports.deleteSubCategoryInDB = async (categoryId, subName) => {
  const result = await Category.updateOne(
    { _id: categoryId },
    { $pull: { subCategory: subName } }
  );

  return result;
};

// db.practise.updateOne({_id:ObjectId("6406ad65fc13ae5a400000c4")},{$addToSet:{languages:{$each:["Bangla","English"]}}})
