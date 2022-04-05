import MealItem from './MealItem';

function MealsList({ meals }) {
    return (
        <div className='meals_list'>
            {meals.map((meal) => {
                return <MealItem key={meal.idMeal} {...meal} />;
            })}
        </div>
    );
}

export default MealsList;
