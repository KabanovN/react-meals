import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getAllCategories } from '../api';
import Preloader from '../components/Preloader';
import CategoriesList from '../components/CategoriesList';
import SearchPanel from '../components/SearchPanel';

function Home() {
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const navigate = useNavigate();
    const { pathname, search } = useLocation();

    const searchCategory = (value) => {
        const filtered = categories.filter((item) =>
            item.strCategory.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCategories(filtered);
        navigate(`${pathname}?search=${value}`); //внесение в строку поиска
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCategories(data.categories);
            //фильтрация при копировании ссылки в строку поиска либо без неё
            setFilteredCategories(
                search
                    ? data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.split('=')[1])
                      )
                    : data.categories
            );
        });
    }, [search]);

    return (
        <>
            <SearchPanel searchCategory={searchCategory} />
            {!categories.length ? (
                <Preloader />
            ) : (
                <CategoriesList categories={filteredCategories} />
            )}
        </>
    );
}

export default Home;
