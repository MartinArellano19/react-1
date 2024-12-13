import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Zayko!" />
    </>
  );
}

export default App;
