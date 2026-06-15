import "./footer.css";

// Componente Footer para la parte inferior de la tienda
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Fluffy Store 🧸</h3>
        <p>Los peluches más tiernos y esponjosos del mundo.</p>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Fluffy Store. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
