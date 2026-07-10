import "./hero.css";

// hero banner para darle un look premium a la pagina de inicio
const Hero = () => {
  const handleScrollToProducts = () => {
    // buscamos la seccion del catalogo para hacer scroll suave
    const productsSection = document.querySelector(".item-list-container-main");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="hero-banner">
      <div className="hero-content">
        <span className="hero-tag">🧸 Colección Exclusiva 🧸</span>
        <h1 className="hero-title">Fluffy Store</h1>
        <p className="hero-subtitle">
          Tus compañeros de abrazos perfectos. Descubrí los peluches más tiernos, 
          suaves y mágicos diseñados para llenar tu hogar de amor.
        </p>
        <button className="hero-btn" onClick={handleScrollToProducts}>
          Explorar Catálogo ✨
        </button>
      </div>
      <div className="hero-illustration">
        <div className="hero-circle-bg"></div>
        <span className="hero-emoji-floating">🧸</span>
      </div>
    </header>
  );
};

export default Hero;
