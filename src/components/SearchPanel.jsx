import { useState } from 'react';

function SearchPanel({ searchCategory }) {
    const [value, setValue] = useState('');

    const handleKey = (evt) => {
        if (evt.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        searchCategory(value);
    };

    return (
        <div className='row search_wrapper'>
            <div className='input-field col s12'>
                <input
                    type='search'
                    placeholder='Search'
                    value={value}
                    onChange={(evt) => setValue(evt.target.value)}
                    onKeyDown={handleKey}
                />
            </div>
            <button
                className='btn'
                style={{ position: 'absolute', top: 20, right: 0 }}
                onClick={handleSubmit}>
                Search
            </button>
        </div>
    );
}

export default SearchPanel;
