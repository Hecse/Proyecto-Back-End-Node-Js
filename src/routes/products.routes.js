import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct
} from "../controllers/product.controller.js";
import { authentication } from "../middlewares/authentication.js";

const router = express.Router();

router.get("/products", getAllProducts);

router.get("/products/:id", getProductById);

router.post("/products/create", authentication, createProduct);

router.delete("/products/:id", authentication, deleteProduct);

router.put("/products/:id", authentication, updateProduct);

export default router;
