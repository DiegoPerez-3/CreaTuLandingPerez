import { useState } from "react";
import "./itemcount.css";

// Componente para seleccionar la cantidad de unidades y agregarlas (lógica visual)
const ItemCount = ({ stock = 5, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (onAdd) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count-container">
      <div className="controls">
        <button className="btn-count" onClick={decrement} disabled={count <= 1}>
          -
        </button>
        <span className="count-display">{count}</span>
        <button className="btn-count" onClick={increment} disabled={count >= stock}>
          +
        </button>
      </div>
      <button className="btn-add-to-cart" onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
