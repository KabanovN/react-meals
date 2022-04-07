import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Preloader from '../components/Preloader';

import { getMealById } from '../api';

function Recipe() {
    const { id } = useParams();
    const goBack = useNavigate();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <>
                    <button
                        className='btn'
                        onClick={() => goBack(-1)}
                        style={{ margin: '1rem 0' }}>
                        Go Back
                    </button>
                    <div className='recipe'>
                        <img
                            className='recipe_img'
                            src={recipe.strMealThumb}
                            alt={recipe.strMeal}
                        />
                        <h2 className='recipe_title'>{recipe.strMeal}</h2>
                        <h5 className='recipe_area'>Area: {recipe.strArea}</h5>
                        <h5 className='recipe_category'>
                            Category: {recipe.strCategory}
                        </h5>
                        <p className='recipe_descr'>{recipe.strInstructions}</p>

                        <table className='centered recipe_table'>
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Measure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(recipe).map((key) => {
                                    if (
                                        key.includes('strIngredient') &&
                                        recipe[key]
                                    ) {
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>
                                                    {
                                                        recipe[
                                                            `strMeasure${key.slice(
                                                                13
                                                            )}`
                                                        ]
                                                    }
                                                </td>
                                            </tr>
                                        );
                                    }
                                    return null;
                                })}
                            </tbody>
                        </table>

                        {recipe.strYoutube ? (
                            <div className='recipe_video'>
                                <h5>Video Recipe</h5>
                                <iframe
                                    width='480'
                                    height='350'
                                    src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                        -11
                                    )}`}
                                    style={{ margin: '1rem 0' }}
                                    title={recipe.strMeal}
                                    allowfullscreen></iframe>
                            </div>
                        ) : null}
                    </div>
                </>
            )}
        </>
    );
}

export default Recipe;
