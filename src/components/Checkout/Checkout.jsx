import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext.js";
import { createOrderWithStockUpdate } from "../../services/firestore.js";
import { toast } from "react-toastify";
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

  return (
    <div className="checkout">
      <h1 className="checkout-title">Completar tu Compra</h1>
      {
        orderId === null ? (
          <CheckoutForm 
            dataForm={dataForm}
            handleChangeInput={handleChangeInput}
            handleSubmitForm={handleSubmitForm}
          />
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
