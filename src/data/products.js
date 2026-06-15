// Listado de peluches para la tienda Fluffy Store
const products = [
  {
    id: 1,
    name: "Oso de Peluche Clásico",
    description: "Un tierno oso de peluche marrón súper suave, con un moño celeste pastel. Es ideal para abrazar por las noches y muy esponjoso.",
    stock: 8,
    image: "/img/oso.png",
    price: 3200,
    category: "osos"
  },
  {
    id: 2,
    name: "Panda de Peluche Gigante",
    description: "Tierno oso panda de felpa en tamaño gigante. Súper blando y fabricado con materiales hipoalergénicos de excelente calidad.",
    stock: 4,
    image: "/img/panda.png",
    price: 5400,
    category: "osos"
  },
  {
    id: 3,
    name: "Pulpito Reversible",
    description: "El famoso pulpo reversible de felpa para mostrar tu estado de ánimo. De un lado es rosa feliz y del otro es celeste enojado.",
    stock: 15,
    image: "/img/pulpo.png",
    price: 1800,
    category: "marinos"
  },
  {
    id: 4,
    name: "Ballena Azul de Felpa",
    description: "Hermosa ballena azul de felpa de 50 cm. Su textura extra suave la hace perfecta para usar como almohada o compañero de siestas.",
    stock: 6,
    image: "/img/ballena.png",
    price: 3800,
    category: "marinos"
  },
  {
    id: 5,
    name: "Unicornio Mágico Pastel",
    description: "Lindo unicornio con cuerno brillante y crin de colores pastel (rosa, lila y amarillo). Trae la magia de los arcoíris a tu hogar.",
    stock: 7,
    image: "/img/unicornio.png",
    price: 4500,
    category: "fantasia"
  },
  {
    id: 6,
    name: "Dragón de Felpa Bebé",
    description: "Pequeño dragón verde menta con alitas suaves y cuernos lila pastel. Súper amigable y tierno, no echa fuego, solo da mucho amor.",
    stock: 5,
    image: "/img/dragon.png",
    price: 4100,
    category: "fantasia"
  }
];

// Retorna todos los productos con un delay simulado
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products.length === 0) {
        reject("No hay peluches disponibles en este momento");
      } else {
        resolve(products);
      }
    }, 1500); // delay de 1.5s
  });
};

// Retorna un producto por ID con un delay simulado
export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((prod) => prod.id === parseInt(productId));
      if (!product) {
        reject("No se encontró el peluche solicitado");
      } else {
        resolve(product);
      }
    }, 1500); // delay de 1.5s
  });
};
