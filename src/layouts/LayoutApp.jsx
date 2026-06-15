import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

// Layout base que incluye el NavBar, el Outlet para renderizar las páginas y el Footer
const LayoutApp = () => {
  return (
    <div className="layout-container">
      <NavBar />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutApp;
