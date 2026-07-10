import { getProductsDB } from "../../services/firestore.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { useParams, useNavigate } from "react-router";
import "./itemlistcontainer.css";

// componente contenedor que maneja el estado de los peluches desde firestore
const ItemListContainer = ({ saludo = "Bienvenidos", greeting }) => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // usamos el prop saludo o greeting por las dudas
  const displaySaludo = saludo || greeting;

  useEffect(() => {
    let active = true;

    // traemos los productos directamente de la base de datos
    getProductsDB(category)
      .then((data) => {
        if (active) setProducts(data);
      })
      .catch((err) => {
        if (active) setError(err.message || err);
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
      setIsLoading(true);
    };
  }, [category]);



  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className="error-container">Ups: {error}</div>;
  }

  // capitaliza la primera letra de la categoria para que quede mas lindo
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
