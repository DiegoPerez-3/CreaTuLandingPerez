import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";

// Componente de presentación que muestra los detalles del peluche seleccionado
const ItemDetail = ({ product }) => {
  // Manejador simple para simular agregar al carrito
  const handleAdd = (quantity) => {
    alert(`¡Agregaste ${quantity} unidad(es) de "${product.name}" al carrito! (Simulación)`);
  };

  if (!product) return null;

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
        
        {/* Incluimos el ItemCount pasando el stock disponible */}
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
