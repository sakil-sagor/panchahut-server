const InventoryBatch = require("../models/InventoryBatch");
const Product = require("../models/Product");
const { getSingleProductForSell } = require("./products.service");

exports.getSingleProductFromStock = async (id) => {
  const mergedData = await InventoryBatch.aggregate([
    { $match: { stockId: Number(id), quantity: { $gt: 0 } } },
    {
      $lookup: {
        from: "products",
        localField: "productIdNumber",
        foreignField: "productId",
        as: "product",
      },
    },
    { $unwind: "$product" },
  ]);

  return mergedData;
};

exports.getSingleStock = async (id) => {
  const result = await InventoryBatch.findOne({ stockId: id });

  return result;
};

exports.getSingleStockbyBarcode = async (id) => {
  const result = await InventoryBatch.findOne({ stockId: id });
  return result;
};
