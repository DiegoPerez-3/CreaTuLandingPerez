import Item from "../Item/Item";
import "./itemlist.css";

// Componente encargado de hacer el map de los peluches y mostrarlos en grilla
const ItemList = ({ products }) => {
  return (
    <div className="itemlist">
      {
        products.map((product) => (
          <Item product={product} key={product.id} />
        ))
      }
    </div>
  );
};

export default ItemList;
