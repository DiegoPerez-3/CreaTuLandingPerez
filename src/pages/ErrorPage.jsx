import { Link } from "react-router";

// Página de error para rutas no válidas
const ErrorPage = ({ statusCode = 404, message = "Lo sentimos, el peluche o la página que buscas no existe." }) => {
  return (
    <div className="error-page" style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h2 style={{ fontSize: '4rem', color: '#fca5a5' }}>{statusCode}</h2>
      <p style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '20px' }}>{message}</p>
      <Link to="/" style={{
        display: 'inline-block',
        backgroundColor: '#fbcfe8',
        color: '#4c1d95',
        padding: '10px 20px',
        borderRadius: '25px',
        fontWeight: 'bold',
        textDecoration: 'none',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s'
      }}>
        Volver a la tienda 🧸
      </Link>
    </div>
  );
};

export default ErrorPage;
