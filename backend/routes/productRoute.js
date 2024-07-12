import express from "express";
import { addProductController, getAllProductsController } from "../controllers/productController.js";

const router = express.Router();


router.post("/addproduct", addProductController);
router.get("/get-products", getAllProductsController);


export default router;