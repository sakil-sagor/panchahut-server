const mongoose = require("mongoose");
const StockOutSchema = mongoose.Schema(
  {
    manager: {
      type: Number,
      ref: "User",
      required: true,
    },
    totelPirice: {
      type: Number,
      required: true,
    },
    orderdProduct: [],
    totelPirice: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    less: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StockOut", StockOutSchema);
