import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { filterByCategory } from '../api';

import Preloader from '../components/Preloader';
import MealsList from '../components/MealsList';

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        filterByCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return <>{!meals.length ? <Preloader /> : <MealsList meals={meals} />}</>;
}

export default Category;
