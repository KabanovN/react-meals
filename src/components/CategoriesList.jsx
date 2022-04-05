import CategoryItem from './CategoryItem';

function CategoriesList({ categories = [] }) {
    return (
        <div className='category_list'>
            {categories.map((category) => {
                return <CategoryItem key={category.idCategory} {...category} />;
            })}
        </div>
    );
}

export default CategoriesList;
