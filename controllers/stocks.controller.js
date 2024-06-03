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
