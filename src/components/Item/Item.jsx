import "./item.css";
import { Link } from "react-router";

// Componente de presentación para cada tarjeta de peluche en el listado
const Item = ({ product }) => {
  return (
    <li className="item">
      <div className="img-item-container">
        <img className="img-item" src={product.image} alt={product.name} />
      </div>

      <div className="text-item-container">
        <p className="title-item">{product.name}</p>
        <p className="price-item">${product.price}</p>
        <Link to={`/detail/${product.id}`}>
          <div className="button-item">MÁS INFORMACIÓN</div>
        </Link>
      </div>
    </li>
  );
};

export default Item;
