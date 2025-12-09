import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
} from "../controllers/product.controller.js";

const routes = express.Router();

routes.get("/products", getAllProducts);

routes.get("/products/:id", getProductById);

// Query params (ej. /product?category=electronics&price=low)
/* router.get("/product", (req, res) => {
  const category = req.query.category;
  const price = req.query.price;
  res.send(`Categoría: ${category}, Precio: ${price}`);
}); */

routes.post("/product", createProduct);

export default routes;
