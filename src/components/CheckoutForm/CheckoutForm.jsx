import "./checkoutform.css";

// formulario que pide datos de contacto para finalizar la compra
const CheckoutForm = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <form onSubmit={handleSubmitForm} className="checkoutform">
      <div className="input-group">
        <label className="label-checkoutform">Nombre completo</label>
        <input 
          className="input-checkoutform" 
          type="text" 
          name="fullname" 
          value={dataForm.fullname} 
          onChange={handleChangeInput} 
          placeholder="Ej: Diego Perez" 
          required
        />
      </div>

      <div className="input-group">
        <label className="label-checkoutform">Número de teléfono</label>
        <input 
          className="input-checkoutform" 
          type="number" 
          name="phone" 
          value={dataForm.phone} 
          onChange={handleChangeInput} 
          placeholder="Ej: 1122334455" 
          required
        />
      </div>

      <div className="input-group">
        <label className="label-checkoutform">Email de contacto</label>
        <input 
          className="input-checkoutform" 
          type="email" 
          name="email" 
          value={dataForm.email} 
          onChange={handleChangeInput} 
          placeholder="Ej: diego@fluffystore.com" 
          required
        />
      </div>

      <button className="button-to-buy-checkoutform" type="submit">
        Terminar mi compra 🧸
      </button>
    </form>
  );
};

export default CheckoutForm;
