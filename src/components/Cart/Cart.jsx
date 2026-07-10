import { useContext } from "react";
import { CartContext } from "../../context/cartContext.js";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";
import "./cart.css";

// componente que muestra el listado de productos agregados al carrito
const Cart = () => {
  const { cart, deleteProductById, deleteCart, totalPrice } = useContext(CartContext);

  // si el carrito esta vacio, mostramos cartelito condicional
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>No hay peluches en el carrito 😢</h1>
        <Link to="/" className="button-to-home">Volver al inicio 🧸</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1 className="cart-title">Tu Carrito de Compras</h1>
      
      <div className="products-list-cart">
        {
          cart.map((productCart) => (
            <div key={productCart.id} className="product-cart">
              <div className="product-cart-info">
                <img src={productCart.image} alt={productCart.name} className="product-cart-img" />
                <div className="product-cart-details">
                  <p className="product-cart-name">{productCart.name}</p>
                  <p className="product-cart-price">Precio unitario: ${productCart.price}</p>
                </div>
              </div>
              <div className="product-cart-meta">
                <p className="product-cart-qty">Cantidad: {productCart.quantity}</p>
                <p className="product-cart-subtotal">Subtotal: ${productCart.price * productCart.quantity}</p>
                <button className="button-to-delete" onClick={() => deleteProductById(productCart.id)} title="Eliminar producto">
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))
        }
      </div>

      <div className="cart-summary">
        <p className="total-price-text">Precio total: <span>${totalPrice()}</span></p>
        
        <div className="cart-actions">
          <Link className="button-to-checkout" to="/checkout">
            Ir a checkout 💳
          </Link>

          <button className="button-to-delete-all" onClick={deleteCart}>
            <p>Vaciar carrito</p>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
