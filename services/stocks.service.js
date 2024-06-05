const { restart } = require("nodemon");
const InventoryBatch = require("../models/InventoryBatch");
const StockIn = require("../models/StockIn");
const StockOut = require("../models/StockOut");

// create stocks

exports.createStocksInDb = async (details) => {
  const result = await InventoryBatch.create(details);
  const againResult = await createStocksforStockIn(result);

  if (againResult) {
    return true;
  } else {
    return false;
  }
};

const createStocksforStockIn = async (details) => {
  try {
    let newStock = {
      productId: details.productIdNumber,
      productName: details.productName,
      costingPrice: details.costingPrice,
      quantity: details.quantity,
    };
    const createStockIn = await StockIn.create(newStock);
    return createStockIn;
  } catch (error) {
    if (error) {
      const deleteResult = await InventoryBatch.deleteOne({ _id: details._id });
    }
  }
};
// make sell product from stock
exports.makeStockProductSellDb = async (detail) => {
  const result = await StockOut.create(detail);
  return result;
};
exports.getAllStockInDb = async () => {
  const result = await StockIn.find({});
  return result;
};

exports.getSingleStockaFromDb = async (id) => {
  const result = await InventoryBatch.findOne({ _id: id });
  return result;
};
exports.updateStockAfterOrder = async (id, remainStock) => {
  const result = await InventoryBatch.findOneAndUpdate(
    { _id: id },
    { $inc: { quantity: -remainStock } },
    { new: true } // Return the updated document
  );
  return result;
};
