import './App.css';
import { RouterProvider } from 'react-router';
import { router } from './router';
import { CartProvider } from './context/CartContext.jsx';

// componente principal que envuelve todo con el cart provider
function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;

