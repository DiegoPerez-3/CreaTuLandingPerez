import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// layout base con navbar, outlet y footer, mas el toast container
const LayoutApp = () => {
  return (
    <div className="layout-container">
      <NavBar />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
    </div>
  );
};

export default LayoutApp;

