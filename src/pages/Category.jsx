import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { filterByCategory } from '../api';

import Preloader from '../components/Preloader';
import MealsList from '../components/MealsList';

function Category() {
    const { name } = useParams();
    const goBack = useNavigate();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        filterByCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            <button
                className='btn'
                onClick={() => goBack(-1)}
                style={{ margin: '1rem 0' }}>
                Go Back
            </button>
            {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
        </>
    );
}

export default Category;
