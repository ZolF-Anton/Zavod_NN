import * as React from 'react';
import { useState, useEffect } from 'react';
import { search_container, search_wrap, btn_search, search_area } from './mat.module.css';

function Search({ cb = Function.prototype, btnName, selectParts }) {
    const [value, setValue] = useState('');
    const [placeholder, setPlaceholder] = useState('Найти глушитель');

    useEffect(() => {
        switch (btnName) {
            case 'collector':
                return setPlaceholder('Найти приёмную трубу');

            case 'resonator':
                return setPlaceholder('Найти резонатор');

            case 'rest':
                return setPlaceholder('Найти прочие детали');

            default:
                return setPlaceholder('Найти глушитель');
        }
    }, [btnName]);

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className={search_container}>
            <div className={search_wrap}>
                <div className={search_area}>
                    <input
                        type='search'
                        id='search-field'
                        placeholder={placeholder}
                        onKeyDown={handleKey}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                </div>
                <button className={btn_search} onClick={handleSubmit}>
                    Найти
                </button>
            </div>
        </div>
    );
}

export default Search;
