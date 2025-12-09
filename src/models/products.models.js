import { db } from "../data/data.js";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Función para obtener todos los productos
export function getProducts() {
  return new Promise(async (res, rej) => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productos = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        productos.push({ id: doc.id, ...doc.data() });
      });
      console.log("Lista de Productos: ", productos);
      res(productos);
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
}

// Función para obtener un producto por ID
export function getProduct(id) {
  return new Promise(async (res, rej) => {
    try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document id:", docSnap.id);
        console.log("Document data:", docSnap.data());
        res(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("Document no encontrado");
      }
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
}

// Función para agregar un nuevo producto
export function addProduct(producto) {
  return new Promise(async (res, rej) => {
    try {
      const docRef = await addDoc(collection(db, "products"), producto);
      console.log("Doc ID: ", docRef.id, " => ", producto);
      res({ id: docRef.id, ...producto });
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
}

// Función para actualizar un producto existente
export function updateProduct(producto) {
  return new Promise(async (res, rej) => {
    try {
      await updateDoc(doc(db, "products", producto.id), {
        price: producto.price,
      });
      console.log("Producto actualizado: ", producto);
      res(producto);
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
}

export function deleteProduct(id) {
  return new Promise(async (res, rej) => {
    try {
      await deleteDoc(doc(db, "products", id));
      console.log("Producto eliminado");
      res();
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
}

//getProduct("NxIePvG0ylFEh12aDpwG");
//getProducts();
//addProduct({ category: "Libro", name: "Producto 5", price: 5000 });
//updateProduct({ id: "A4azBRDfUZ3HEAQXJwGv", price: 5005 });
//deleteProduct("TbDUiZW7i1b0vyRkZ1f6");
