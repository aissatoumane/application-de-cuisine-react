import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Card from './components/Card';

const App = () => {
  const [mealsData, setmMealsData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
        axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
        )
        .then((res) => setmMealsData(res.data.meals));
      }, [inputSearch]);

  return (
    <div className='app-container'>
      <h1> La cuisine de Mané </h1>
      <input 
      type="text" 
      placeholder="Tapez le nom d'un aliment (en anglais" 
      onChange={(e) => setInputSearch(e.target.value)} />
      <div className="meals-container">
      {mealsData && mealsData
      /* sécurité : s'assurer que mealsData existe avant de slice */
      .slice(0, 24)
      .map((meal) => (
        <Card key={meal.idMeal} meal={meal} />
        /* meal = nom donné à la props qui sera appelée dans Card.js */
        ))}
      </div>
    </div>
  );
      }

export default App;

/* /!\ BIEN PENSER à remettre un c minuscule sur le nom de la route car j'ai mis un C majuscule quand j'ai créé le dossier components */