import { useState, useEffect } from "react";
import { CartContext } from "./cartContext.js";

// proveedor del carrito para envolver la aplicacion y proveer el estado global
export const CartProvider = ({ children }) => {
  // recuperamos los productos guardados en localStorage si existen
  const cartLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"));
  const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : []);

  // guardamos el carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("cart-ecommerce", JSON.stringify(cart));
  }, [cart]);

  // funcion para agregar un producto al carrito
  const addProductInCart = (newProduct) => {
    // checkeamos si el peluche ya esta en el carrito
    if (isInCart(newProduct.id)) {
      // si ya esta, buscamos el indice y le sumamos la cantidad nueva
      const indexProduct = cart.findIndex((productCart) => productCart.id === newProduct.id);
      const newCart = [...cart];
      newCart[indexProduct].quantity = newCart[indexProduct].quantity + newProduct.quantity;
      setCart(newCart);
    } else {
      // si no esta, lo agregamos como nuevo elemento al carrito
      setCart([...cart, newProduct]);
    }
  };

  // calcula la cantidad total de peluches en el carrito
  const totalQuantity = () => {
    return cart.reduce((total, productCart) => total + productCart.quantity, 0);
  };

  // calcula el precio total de toda la compra
  const totalPrice = () => {
    return cart.reduce((total, productCart) => total + (productCart.price * productCart.quantity), 0);
  };

  // comprueba si un producto especifico ya esta en el carrito
  const isInCart = (productId) => {
    return cart.some((productCart) => productCart.id === productId);
  };

  // borra un producto del carrito usando su id
  const deleteProductById = (productId) => {
    const productsFiltered = cart.filter((productCart) => productCart.id !== productId);
    setCart(productsFiltered);
  };

  // vacia por completo el carrito de compras
  const deleteCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, isInCart, deleteProductById, deleteCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
