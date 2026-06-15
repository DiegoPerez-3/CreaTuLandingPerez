import { getProducts } from "../../data/products.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { useParams, useNavigate } from "react-router";
import "./itemlistcontainer.css";

// Componente contenedor que maneja el estado de los peluches y la lógica de filtrado
const ItemListContainer = ({ saludo = "Bienvenidos", greeting }) => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Usamos el prop saludo o greeting por si acaso
  const displaySaludo = saludo || greeting;

  useEffect(() => {
    setIsLoading(true);

    getProducts()
      .then((data) => {
        if (category) {
          // Filtramos los productos según la categoría de la URL
          const filtered = data.filter((p) => p.category === category);
          setProducts(filtered);
        } else {
          // Si no hay categoría, cargamos todo el catálogo
          setProducts(data);
        }
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [category]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className="error-container">Ups: {error}</div>;
  }

  // Capitaliza la primera letra de la categoría para mostrarla más linda
  const formatCategory = (cat) => {
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  return (
    <div className="item-list-container-main">
      {category && (
        <button className="btn-back" onClick={() => navigate(-1)}>
          ← Volver atrás
        </button>
      )}
      <h2 className="section-title">
        {category ? `${displaySaludo} ${formatCategory(category)}` : displaySaludo}
      </h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
