import { useState, useEffect } from "react";
import { getProductByIdDB } from "../../services/firestore.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { useParams } from "react-router";

// componente contenedor que maneja el estado de la carga de un peluche individual desde firestore
const ItemDetailContainer = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    // buscamos el producto segun el id de la URL en firestore
    getProductByIdDB(productId)
      .then((data) => {
        if (active) setProduct(data);
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

