import { collection, query, where, getDocs, doc, getDoc, runTransaction, serverTimestamp } from "firebase/firestore";
import db from "../db/db.js";

// funcion para crear la orden de compra y actualizar el stock en una transaccion
export const createOrderWithStockUpdate = async (order, cart) => {
  const newOrderId = await runTransaction(db, async (transaction) => {
    const ordersRef = collection(db, "orders");
    const orderRef = doc(ordersRef);

    // aca guardamos las referencias y el stock nuevo de cada producto
    const productsToUpdate = [];

    // primero hacemos todas las lecturas y validaciones de stock
    for (const productCart of cart) {
      const productRef = doc(db, "products", productCart.id);
      const productDoc = await transaction.get(productRef);

      if (!productDoc.exists()) {
        throw new Error(`El producto ${productCart.name} no existe en la base de datos`);
      }

      // guardamos el stock actual del peluche
      const currentStock = productDoc.data().stock;

      if (currentStock < productCart.quantity) {
        throw new Error(`No hay stock suficiente de ${productCart.name}. Stock disponible: ${currentStock}`);
      }

      // agregamos para actualizar despues de validar todo
      productsToUpdate.push({ ref: productRef, newStock: currentStock - productCart.quantity });
    }

    // despues de validar todos los productos, hacemos las actualizaciones
    productsToUpdate.forEach((product) => {
      transaction.update(product.ref, { stock: product.newStock });
    });

    // subimos la orden con la fecha del servidor
    transaction.set(orderRef, { ...order, date: serverTimestamp() });

    return orderRef.id;
  });

  return newOrderId;
};

// funcion para traer los productos de la db, opcionalmente filtrados por categoria
export const getProductsDB = async (category) => {
  const productsRef = collection(db, "products");

  // si nos pasan categoria, filtramos la query
  const productsQuery = category
    ? query(productsRef, where("category", "==", category))
    : productsRef;

  const dataDb = await getDocs(productsQuery);
  const data = dataDb.docs.map((productDb) => {
    return { id: productDb.id, ...productDb.data() };
  });

  return data;
};

// funcion para obtener un producto especifico por su id
export const getProductByIdDB = async (productId) => {
  const productRef = doc(db, "products", productId);
  const dataDb = await getDoc(productRef);
  
  if (!dataDb.exists()) {
    throw new Error("El producto solicitado no existe");
  }

  const data = { id: dataDb.id, ...dataDb.data() };
  return data;
};
