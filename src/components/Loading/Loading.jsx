import { ClipLoader } from "react-spinners";
import "./loading.css";

// spinner de carga para cuando traemos datos de firestore
const Loading = () => {
  return (
    <div className="loading-container">
      <ClipLoader color="#db2777" size={50} />
      <p className="loading-text">Buscando peluches...</p>
    </div>
  );
};

export default Loading;
