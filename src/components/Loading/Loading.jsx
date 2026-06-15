import { ClipLoader } from "react-spinners";
import "./loading.css";

// Componente simple para mostrar un spinner mientras se cargan los productos
const Loading = () => {
  return (
    <div className="loading-container">
      <ClipLoader color="#db2777" size={50} />
      <p className="loading-text">Buscando peluches...</p>
    </div>
  );
};

export default Loading;
