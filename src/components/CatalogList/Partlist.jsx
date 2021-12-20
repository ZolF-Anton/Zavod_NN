import React from 'react';
import Part from './Part';
import Preloader from './preloader';
import { parts_item, parts_container } from './mat.module.css';

function Partlist(props) {
    const { parts, errorLoad } = props;

    return (
        <div className={parts_container}>
            <div className={parts_item}>
                {errorLoad ? (
                    <>
                        <Preloader />
                        <h4>Nothing...</h4>
                    </>
                ) : (
                    parts.map((part) => {
                        return <Part key={part.id} id={part.id} {...part.fields} />;
                    })
                )}
            </div>
        </div>
    );
}

export default Partlist;
