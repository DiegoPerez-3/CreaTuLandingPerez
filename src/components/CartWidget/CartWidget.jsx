import { FaCartShopping } from "react-icons/fa6";
import "./cartwidget.css";

// Widget para el carrito de compras en el NavBar
const CartWidget = () => {
  return (
    <div className="cartwidget">
      <FaCartShopping size={26} className="cart-icon-fa" />
      <span className="notification-cartwidget">3</span>
    </div>
  );
};

export default CartWidget;
