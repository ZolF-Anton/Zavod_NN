import React from 'react';
import Part from './Part';
import Preloader from './preloader';

function Partlist(props) {
    const { parts, errorLoad } = props;

    return (
        <div className='parts'>
            {errorLoad ? (
                <>
                    <Preloader />
                    <h4>Nothing...</h4>
                </>
            ) : (
                parts.map((part) => {
                    return <Part key={part.imdbID} {...part} />;
                })
            )}
        </div>
    );
}

export default Partlist;
