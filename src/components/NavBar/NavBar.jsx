import logo from "../../img/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router";
import "./navbar.css";

// navbar de la app con el logo, links de las categorias y el cart widget
const NavBar = () => {
  const categories = [
    {
      id: 1,
      label: "Osos",
      path: "osos"
    },
    {
      id: 2,
      label: "Marinos",
      path: "marinos"
    },
    {
      id: 3,
      label: "Fantasía",
      path: "fantasia"
    }
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img src={logo} className="brand-img" alt="Logo Fluffy Store" />
        <span className="brand-title">Fluffy Store</span>
      </Link>  
  
      <ul className="categories">
        {
          categories.map((category) => (
            <NavLink 
              to={`/category/${category.path}`} 
              className="category" 
              key={category.id}
            >
              {category.label}
            </NavLink>
          ))
        }
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
