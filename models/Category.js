const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },

  subCategory: [
    {
      type: String,
    },
  ],

  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
