import {
  getAllProductsService,
  getProductByIdService,
  addProductService,
  deleteProductService,
  updateProductService,
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

export const createProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await addProductService(product);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el producto" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      await deleteProductService(id);
      res.status(200).json({ message: "Producto eliminado correctamente" });
    } else {
      res.status(400).json({ message: "ID de producto no proporcionado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el producto" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = req.body;

    if (id && product) {
      const updatedProduct = await updateProductService(id, product);
      res.status(200).json(updatedProduct);
    } else {
      res.status(400).json({ message: "ID ó datos del producto no proporcionados" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el producto" });
  }
};
