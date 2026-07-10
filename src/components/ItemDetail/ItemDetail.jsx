import { useContext } from "react";
import { CartContext } from "../../context/cartContext.js";
import { Link } from "react-router";
import { toast } from "react-toastify";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";

// componente de presentacion que muestra el detalle de un peluche
const ItemDetail = ({ product }) => {
  const { addProductInCart, isInCart } = useContext(CartContext);

  // manejador para agregar el peluche al carrito global
  const handleAdd = (quantity) => {
    const newProduct = { ...product, quantity };
    addProductInCart(newProduct);
    toast.success("¡Peluche agregado al carrito! 🧸");
  };

  if (!product) return null;

  // evaluamos si el producto ya esta en el carrito
  const productIsInCart = isInCart(product.id);

  return (
    <div className="itemdetail">
      <div className="img-container-itemdetail">
        <img className="img-itemdetail" src={product.image} alt={product.name} />
      </div>
      <div className="text-itemdetail">
        <h2 className="title-itemdetail">{product.name}</h2>
        <p className="category-tag">Categoría: {product.category}</p>
        <p className="description-itemdetail">{product.description}</p>
        <p className="price-itemdetail">Precio: ${product.price}</p>
        
        {/* renderizado condicional segun stock y si ya esta en el carrito */}
        {
          product.stock < 1 ? (
            <p className="no-stock-itemdetail">Producto sin stock momentáneamente 😢</p>
          ) : productIsInCart === true ? (
            <Link to="/cart" className="button-to-buy">
              Terminar mi compra 🛒
            </Link>
          ) : (
            <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
          )
        }
      </div>
    </div>
  );
};

export default ItemDetail;

