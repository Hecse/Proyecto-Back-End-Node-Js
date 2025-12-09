import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
} from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener los productos" });
  }
};

// Rutas Parametrizadas (path params)
export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const product = await getProductByIdService(id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Producto no encontrado" });
      }
    } else {
      res.status(400).json({ message: "ID de producto no proporcionado" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener el producto" });
  }
};

// Metodo Post
export const createProduct = async (req, res) => {
  const { category, name, price } = req.body;
  const newProduct = await createProductService({ category, name, price });
  res.status(201).json(newProduct);
};
