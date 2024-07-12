import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});


export const Product = mongoose.model("Product", productSchema)