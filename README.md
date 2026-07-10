# Fluffy Store 🧸 - E-commerce de Peluches

Este es el proyecto final para el curso de React de Coderhouse. Consiste en una aplicación web tipo Single Page Application (SPA) para la compra de peluches adorables y esponjosos.

La aplicación está conectada a **Firebase Firestore** para gestionar la persistencia de datos (catálogo de productos y órdenes de compra de los usuarios).

---

## 🚀 Funcionalidades

1. **Catálogo Dinámico:**
   * Carga de productos directamente desde Firebase Firestore.
   * Filtrado dinámico por categorías (*osos*, *marinos*, *fantasía*) a través del NavBar sin recargar la página.
2. **Detalle de Producto:**
   * Vista extendida para cada peluche con información detallada, precio, descripción e imagen.
   * Control de stock en tiempo real con el componente `ItemCount`.
3. **Carrito de Compras:**
   * Gestión global del estado de compras a través de React Context.
   * Almacenamiento persistente en `localStorage` para no perder la compra si se refresca el navegador.
   * Vista detallada del carrito con subtotales, totales y opción para eliminar ítems individuales o vaciar el carrito.
4. **Checkout e Integración con Firebase:**
   * Formulario de datos del comprador (`fullname`, `phone`, `email`).
   * Transacciones atómicas de Firestore (`runTransaction`) para subir la orden de compra y descontar stock simultáneamente de forma segura.
   * Retorno del ID único de orden al finalizar el proceso.
5. **Experiencia de Usuario:**
   * Renderizado condicional para Loaders, mensajes de error, producto sin stock y alertas interactivas a través de `react-toastify`.

---

## 🛠️ Tecnologías y Dependencias

* **Vite + React 19**
* **React Router v7** (Navegación SPA)
* **Firebase SDK v12** (Base de datos en la nube)
* **React Icons** (Iconos del carrito y trash)
* **React Spinners** (Cargador ClipLoader)
* **React Toastify** (Notificaciones elegantes de éxito y error)
* **CSS Puro** (Estilos y variables personalizadas con estética pastel)

---

## 📂 Estructura del Proyecto

* `src/components/`: Componentes modulares y reutilizables.
  * `NavBar/` & `CartWidget/`: Barra de navegación y su widget indicador.
  * `ItemListContainer/`, `ItemList/` & `Item/`: Contenedores y presentadores de las listas.
  * `ItemDetailContainer/` & `ItemDetail/`: Manejo e información del detalle de producto.
  * `ItemCount/`: Contador de productos respetando el stock.
  * `Cart/` & `Checkout/` & `CheckoutForm/`: Vistas de carrito, formulario y procesamiento de compra.
  * `Loading/` & `Footer/`: Componente de carga y pie de página.
* `src/context/`: `CartContext` y su `CartProvider`.
* `src/db/`: Inicialización de la base de datos de Firebase.
* `src/layouts/`: Layout general de la aplicación.
* `src/pages/`: Páginas individuales (`HomePage`, `CategoryPage`, `ProductDetailPage`, `CartPage`, `CheckoutPage`, `ErrorPage`).
* `src/services/`: Capa de servicios (`firestore.js`) encargada de interactuar con Firebase.

---

## ⚙️ Configuración y Ejecución Local

### 1. Clonar el repositorio e instalar dependencias
```bash
npm install
```

### 2. Configurar Variables de Entorno
Crea un archivo `.env.local` en la raíz del proyecto basándote en `.env.example` y rellena tus credenciales de Firebase:
```env
VITE_FIREBASE_API_KEY=tu_api_key_aqui
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain_aqui
VITE_FIREBASE_PROJECT_ID=tu_project_id_aqui
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket_aqui
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id_aqui
VITE_FIREBASE_APP_ID=tu_app_id_aqui
```

### 3. Base de Datos en Firebase Firestore
La base de datos debe constar de dos colecciones principales:
* **`products`**: Cada documento debe representar un peluche con la siguiente estructura:
  * `name`: string (Ej: `"Oso de Peluche Clásico"`)
  * `description`: string (Ej: `"Un tierno oso..."`)
  * `category`: string (Ej: `"osos"`)
  * `price`: number (Ej: `3200`)
  * `stock`: number (Ej: `10`)
  * `image`: string (Ej: `"/img/oso.png"` o URL de internet)
* **`orders`**: Se genera automáticamente al confirmar la compra desde la sección de checkout.

### 4. Ejecutar el Servidor de Desarrollo
```bash
npm run dev
```
