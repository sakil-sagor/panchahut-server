const mongoose = require("mongoose");
const StockInSchema = mongoose.Schema(
  {
    productId: {
      type: Number,
      ref: "Product",
      required: true,
    },
    costingPrice: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StockIn", StockInSchema);
