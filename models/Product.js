const mongoose = require("mongoose");
const validator = require("validator");

const ProductSchema = mongoose.Schema(
  {
    productId: {
      type: Number,
      required: true,
      unique: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productNameBangla: {
      type: String,
      default: "N/A",
    },

    description: {
      type: String,
      default: "N/A",
    },
    brandName: {
      type: String,
      default: "N/A",
    },
    category: {
      type: String,
      default: "N/A",
    },
    subcategory: {
      type: String,
      default: "N/A",
    },

    productImage: {
      type: String,
      validate: {
        validator: (value) =>
          validator.isURL(value, {
            protocols: ["http", "https"],
            require_tld: true,
            require_protocol: true,
          }),

        message: "Invalid image URL",
      },
      required: true,
    },

    weight: {
      type: Number,
      default: 0,
    },
    weightUnit: {
      type: String,
      default: "",
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
