import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Hero from "../components/Hero/Hero";

// pagina de inicio de la tienda con el banner hero
const HomePage = () => {
  return (
    <div>
      <Hero />
      <ItemListContainer saludo="¡Bienvenidos a Fluffy Store!" />
    </div>
  );
};

export default HomePage;

