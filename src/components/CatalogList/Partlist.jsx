import React from 'react';
import Part from './Part';
import Preloader from './preloader';
import { parts_item, parts_container } from './mat.module.scss';

function Partlist(props) {
    const { parts, errorLoad, filteredByAssembler } = props;

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
                        return (
                            <Part
                                key={part.id}
                                id={part.id}
                                {...part.attributes}
                                filteredByAssembler={filteredByAssembler}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Partlist;
