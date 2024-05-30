const { restart } = require("nodemon");
const InventoryBatch = require("../models/InventoryBatch");
const StockIn = require("../models/StockIn");

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
