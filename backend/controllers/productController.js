import { Product } from "../models/productModel.js";

export const addProductController = async (req, res) => {
  try {
    const {
      product_name,
      product_image,
      category,
      price,
      mrp,
      date,
      available,
    } = req.body;
    const product = new Product({
      product_name,
      product_image,
      category,
      price,
      mrp,
      date,
      available,
    });
    await product.save();
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error,
    });
  }
};


export const getAllProductsController = async (req, res) => {
    try {
      const products = await Product.find({});
      return res.status(200).json({
        success: true,
        products,
        total: products.length,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error,
        message: "Internal server error",
      });
    }
  }