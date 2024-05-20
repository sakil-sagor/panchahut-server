const mongoose = require("mongoose");
const validator = require("validator");

const ProductSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    productName: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    brandName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    costingPrice: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    sellignPrice: {
      type: Number,
      required: true,
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
    adminName: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      default: 0,
    },
    weightUnit: {
      type: String,
      enum: ["kg", "liter", "pice"],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    available: {
      type: String,
      enum: ["available,sold-out"],
      default: "available",
    },

    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["pending", "active"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
