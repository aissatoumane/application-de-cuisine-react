import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Recipes = () => {
    const [data, setData] = useState([]);
            console.log(data);

    useEffect(() => {
        axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?s")
        .then((res) => setData(res.data));
    }, [])

    return (
        <div className='recipes'>
            {data
            .sort((a, b) => a.strMeal + b.strMeal)
            .map((meals))
            }
        </div>
    );
};

export default Recipes;