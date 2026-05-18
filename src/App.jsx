import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <ItemListContainer greeting="Bienvenido a PixelStore" />
      </main>
    </>
  );
}

export default App;
