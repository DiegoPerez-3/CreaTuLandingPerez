import Checkout from "../components/Checkout/Checkout";

// pagina de la vista de checkout para finalizar la compra
const CheckoutPage = () => {
  return (
    <div>
      <title>Checkout | Fluffy Store</title>
      <meta name="description" content="Finalizar compra de peluches en Fluffy Store" />
      <Checkout />
    </div>
  );
};

export default CheckoutPage;
