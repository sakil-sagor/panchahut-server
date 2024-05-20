const mongoose = require("mongoose");
const validator = require("validator");

const CategorySchema = mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique: true,
    },

    subCategory: [
      {
        subCatName: {
          type: String,
        },
        _id: false,
      },
    ],

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
