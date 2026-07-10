import "./item.css";
import { Link } from "react-router";

// tarjeta de presentacion para cada peluche individual
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
