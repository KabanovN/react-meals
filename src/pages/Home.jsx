import { useState, useEffect } from 'react';

import { getAllCategories } from '../api';
import Preloader from '../components/Preloader';
import CategoriesList from '../components/CategoriesList';

function Home() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCategories(data.categories);
        });
    }, []);

    return (
        <>
            {!categories.length ? (
                <Preloader />
            ) : (
                <CategoriesList categories={categories} />
            )}
        </>
    );
}

export default Home;
