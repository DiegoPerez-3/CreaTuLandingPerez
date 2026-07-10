import { createBrowserRouter } from "react-router";
import LayoutApp from "./layouts/LayoutApp";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ErrorPage from "./pages/ErrorPage";

// ruteador con todas las rutas de la tienda
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
        path: "cart",
        element: <CartPage />
      },
      {
        path: "checkout",
        element: <CheckoutPage />
      },
      {
        path: "*",
        element: <ErrorPage statusCode={404} message={"¡Ups! Esta página no existe"} />
      }
    ]
  }
]);

