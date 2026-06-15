import { useState, useEffect } from "react";
import { getProductById } from "../../data/products.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { useParams } from "react-router";

// Componente contenedor que maneja el estado de la carga de un peluche individual
const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    // Buscamos el producto según el id de la URL
    getProductById(productId)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]); // dependencias recomendadas: el productId de la URL

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className="error-container">Error - {error}</div>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
