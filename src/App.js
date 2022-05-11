import React from 'react';
import './App.css';
import Recipes from './components/Recipes';

const App = () => {
  return (
    <div>
      <h1> La cuisine de Mané </h1>
      <Recipes />
    </div>
  );
};

export default App;

/* /!\ BIEN PENSER à remettre un c minuscule sur le nom de la route car j'ai mis un C majuscule quand j'ai créé le dossier components */