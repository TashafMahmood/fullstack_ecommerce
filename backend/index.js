import express from "express";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import { configDotenv } from "dotenv";
import { connectDB } from "./utils/db.js";
import { Product } from "./models/productModel.js";
import cors from "cors";
import productRoute from './routes/productRoute.js'

const app = express();

configDotenv(); //.env file configuration here
connectDB(); //Database Connection Here

const PORT = process.env.PORT || 7000;
app.use("/images", express.static("upload/images"));
app.use(express.json());
app.use(cors());

app.use('/api/v1', productRoute)

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

app.get("/product", (req, res) => {
  res.send("Hello World");
});




app.delete("/delete-product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        success: false, // Change this to false
        message: "Product with this id not found!",
      });
    }
    return res.status(200).json({
      success: true, // Ensure success is true here
      message: "Product deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false, // Ensure success is false here
      error: "Internal server error",
    });
  }
});



app.post(
  "/upload-product",
  upload.single("product_image"),
  async (req, res) => {
    try {
      const product_image = `http://localhost:${PORT}/images/${req.file.filename}`;
      const { product_name, category, price, mrp, date, available } = req.body;

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
        message: error.message,
      });
    }
  }
);

app.listen(PORT, () => {
  console.log("server running" + " " + PORT);
});
