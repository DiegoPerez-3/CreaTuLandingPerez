import { useContext } from "react";
import { CartContext } from "../../context/cartContext.js";
import { Link } from "react-router";
import { FaCartShopping } from "react-icons/fa6";
import "./cartwidget.css";

// widget para el carrito de compras en el navbar
const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const total = totalQuantity();

  return (
    <Link to="/cart" className="cartwidget">
      <FaCartShopping size={26} className="cart-icon-fa" />
      {
        total > 0 && <span className="notification-cartwidget">{total}</span>
      }
    </Link>
  );
};

export default CartWidget;

