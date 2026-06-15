import { createBrowserRouter } from "react-router";
import LayoutApp from "./layouts/LayoutApp";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage";
import ErrorPage from "./pages/ErrorPage";

// Creamos el router con las rutas principales del e-commerce
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutApp />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "detail/:productId",
        element: <ProductDetailPage />
      },
      {
        path: "category/:category",
        element: <CategoryPage />
      },
      {
        path: "*",
        element: <ErrorPage statusCode={404} message={"¡Ups! Esta página no existe"} />
      }
    ]
  }
]);
