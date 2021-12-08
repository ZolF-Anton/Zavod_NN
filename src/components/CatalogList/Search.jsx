import React from 'react';
import { useState } from 'react';

function Search(props) {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');
    let handleKey = (event) => {
        if (event.key === 'Enter') {
            props.searchMovies(search, type);
        }
    };

    let handleFilter = (event) => {
        setType(() => event.target.dataset.type);
        props.searchMovies(search, event.target.dataset.type);
    };

    return (
        <>
            <div className='input-field col s6'>
                <input
                    placeholder='Search'
                    id='last_name'
                    type='search'
                    className='validate'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    onClick={() => props.searchMovies(search, type)}
                    className='waves-effect waves-light btn btn_search'
                >
                    <i className='material-icons left'>search</i>search
                </button>
            </div>
            <div className='btn_radio'>
                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='all'
                        onChange={handleFilter}
                        checked={type === 'all'}
                    />
                    <span>All</span>
                </label>

                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='movie'
                        onChange={handleFilter}
                        checked={type === 'movie'}
                    />
                    <span>Movie</span>
                </label>

                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='series'
                        onChange={handleFilter}
                        checked={type === 'series'}
                    />
                    <span>Series</span>
                </label>
                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='episode'
                        onChange={handleFilter}
                        checked={type === 'episode'}
                    />
                    <span>Episode</span>
                </label>
            </div>
        </>
    );
}
export default Search;
