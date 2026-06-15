import './App.css';
import { RouterProvider } from 'react-router';
import { router } from './router';

// Componente principal que envuelve toda la app con el RouterProvider
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
