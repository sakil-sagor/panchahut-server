const mongoose = require("mongoose");
const InventoryBatchSchema = mongoose.Schema(
  {
    productIdNumber: {
      type: Number,
      ref: "Product",
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    costingPrice: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    regularPrice: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      default: 0,
    },

    isAvailable: {
      type: String,
      enum: ["available", "limited", "sold-out"],
      default: "available",
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

module.exports = mongoose.model("InventoryBatch", InventoryBatchSchema);
