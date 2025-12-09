import {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../models/products.models.js";

export const getAllProductsService = async () => {
  return new Promise(async (res, rej) => {
    try {
      const products = await getProducts();
      res(products);
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
};

export const getProductByIdService = async (id) => {
  return new Promise(async (res, rej) => {
    try {
      const product = await getProduct(id);
      res(product);
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
};

export const addProductService = async (productData) => {
  return new Promise(async (res, rej) => {
    try {
      const newProduct = await addProduct(productData);
      res(newProduct);
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
};

export const deleteProductService = async (id) => {
  return new Promise(async (res, rej) => {
    try {
      await deleteProduct(id);
      res({ message: "Producto eliminado" });
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
};

export const updateProductService = async (id, product) => {
  return new Promise(async (res, rej) => {
    try {
      const updatedProduct = await updateProduct(id, product);
      res(updatedProduct);
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
};
