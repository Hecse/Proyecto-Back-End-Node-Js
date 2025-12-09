import {
  getProducts,
  getProduct,
  addProduct,
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

export const createProductService = async (productData) => {
  const { category, name, price } = productData;
  return await addProduct(category, name, price);
};
