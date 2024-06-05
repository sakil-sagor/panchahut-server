const StockIn = require("../models/StockIn");
const {
  createStocksInDb,
  getAllStockInDb,
  makeStockProductSellDb,
  getSingleStockaFromDb,
  updateStockAfterOrder,
} = require("../services/stocks.service");

// create stocks
exports.createStocks = async (req, res) => {
  try {
    // make the unique product id

    const createdStocks = await createStocksInDb(req.body);
    if (!createdStocks) {
      res.status(400);
      throw new Error("Error");
    }
    res.status(200).json({
      status: "success",
      message: "Successfully  created product",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create product",
      error: error.message,
    });
  }
};

// make sell product from stock
exports.makeSellProdcut = async (req, res) => {
  try {
    // make the unique product id
    const { orderdProduct } = req.body;
    // console.log(orderdProduct);
    for (let product of orderdProduct) {
      let productStock = await getSingleStockaFromDb(product.stockId);

      if (productStock.quantity >= product.orderQuentity) {
        continue;
      } else {
        throw new Error("Stock is low, Please Cheack again!");
      }
    }
    for (let product of orderdProduct) {
      const updateStock = await updateStockAfterOrder(
        product?.stockId,
        product?.orderQuentity
      );
    }
    const createdStocks = await makeStockProductSellDb(req.body);

    res.status(200).json({
      status: "success",
      data: createdStocks,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create product",
      error: error.message,
    });
  }
};

// get all stocks
exports.getStocksInAll = async (req, res) => {
  try {
    // make the unique product id

    const createdStocks = await getAllStockInDb();

    res.status(200).json({
      status: "success",
      data: createdStocks,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create product",
      error: error.message,
    });
  }
};
// get all stocks with pagination
exports.stockInWithPagination = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 1;
  const skip = (page - 1) * limit;
  try {
    // make the unique product id

    const total = await StockIn.countDocuments();
    const stocksIn = await StockIn.find()
      .sort({ createdAt: -1 }) // Optional: sort by creation date
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      status: "success",

      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      data: stocksIn,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create product",
      error: error.message,
    });
  }
};
