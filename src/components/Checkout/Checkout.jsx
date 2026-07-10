import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext.js";
import { createOrderWithStockUpdate } from "../../services/firestore.js";
import { toast } from "react-toastify";
import { Link } from "react-router";
import CheckoutForm from "../CheckoutForm/CheckoutForm.jsx";
import "./checkout.css";

// componente checkout que controla el formulario de compra y la subida a firestore
const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  });
  const [orderId, setOrderId] = useState(null);
  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  // manejador para cuando el usuario escribe en los inputs
  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  // manejador para enviar el formulario y subir la compra
  const handleSubmitForm = async (event) => {
    event.preventDefault();

    // armamos la estructura de la orden
    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      total: totalPrice()
    };

    try {
      // subimos la orden y restamos el stock de la base de datos
      const newOrderId = await createOrderWithStockUpdate(order, cart);

      // si salio todo bien guardamos el id, vaciamos carrito y avisamos
      setOrderId(newOrderId);
      deleteCart();
      toast.success("¡Orden generada con éxito! 🎉");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // si el carrito esta vacio y no hay orden creada todavia, mostramos cartelito
  if (cart.length === 0 && orderId === null) {
    return (
      <div className="checkout empty-checkout" style={{ textAlign: "center" }}>
        <h1 className="checkout-title">Tu carrito está vacío 😢</h1>
        <p style={{ fontFamily: "Quicksand", color: "#6b7280" }}>No podés completar la compra sin peluches en el carrito.</p>
        <Link to="/" className="button-to-home" style={{ marginTop: "1.5rem", display: "inline-block" }}>
          Volver al inicio 🧸
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h1 className="checkout-title">Completar tu Compra</h1>
      {
        orderId === null ? (
          <div className="checkout-container">
            <div className="checkout-form-column">
              <h2 className="column-subtitle">Tus Datos</h2>
              <CheckoutForm 
                dataForm={dataForm}
                handleChangeInput={handleChangeInput}
                handleSubmitForm={handleSubmitForm}
              />
            </div>
            <div className="checkout-summary-column">
              <h2 className="column-subtitle">Resumen del Pedido</h2>
              <div className="summary-list">
                {cart.map((item) => (
                  <div key={item.id} className="summary-item">
                    <img src={item.image} alt={item.name} className="summary-item-img" />
                    <div className="summary-item-details">
                      <p className="summary-item-name">{item.name}</p>
                      <p className="summary-item-qty">Cantidad: {item.quantity}</p>
                      <p className="summary-item-price">${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="summary-total">
                <p>Total a pagar: <span>${totalPrice()}</span></p>
              </div>
            </div>
          </div>
        ) : (
          <div className="order-success-container">
            <h2 className="success-emoji">🧸❤️</h2>
            <h2 className="success-title">¡Orden generada correctamente!</h2>
            <p className="success-text">Muchas gracias por comprar en Fluffy Store.</p>
            <div className="order-id-box">
              <span className="order-id-label">Tu ID de orden es:</span>
              <span className="order-id-value">{orderId}</span>
            </div>
            <p className="success-hint">Guardá este código para hacer el seguimiento de tu envío.</p>
          </div>
        )
      }
    </div>
  );
};

export default Checkout;

