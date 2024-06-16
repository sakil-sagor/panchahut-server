const {
  getSingleProductFromStock,
  getSingleStock,
  getSingleStockbyBarcode,
} = require("../services/sales.service");

// find  product and stock both
exports.searchProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return "";
    }

    const singleProduct = await getSingleProductFromStock(id);

    res.status(200).json({
      status: "success",
      message: "Successfully  created product",
      data: singleProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create product",
      error: error.message,
    });
  }
};
// find  product and stock both
exports.searchProductByIdBarCode = async (req, res) => {
  try {
    const { id } = req.params;

    const singleProduct = await getSingleStockbyBarcode(id);
    res.status(200).json({
      status: "success",
      message: "Successfully  created product",
      data: singleProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create product",
      error: error.message,
    });
  }
};
// find stock for add to cart
exports.getStockQuentity = async (req, res) => {
  try {
    const { id } = req.params;

    const singleProduct = await getSingleStock(id);

    res.status(200).json({
      status: "success",
      message: "Successfully  created product",
      data: singleProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create product",
      error: error.message,
    });
  }
};
