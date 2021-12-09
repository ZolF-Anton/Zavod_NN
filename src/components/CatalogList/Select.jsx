import React from 'react';
import { useState } from 'react';
import { tab__btn, tab__wrap } from './mat.module.css';

function Select(props) {
    //const [partName, setSelect] = useState('');

    let handleFilter = (event) => {
        props.selectParts(event.target.dataset.type);
    };

    return (
        <>
            <div className={tab__wrap}>
                <button data-type="catalyst" className={tab__btn} onClick={handleFilter}>
                    Катализатор
                </button>
                <button data-type="resonator" className={tab__btn} onClick={handleFilter}>
                    Резонатор
                </button>
                <button data-type="muffler" className={tab__btn} onClick={handleFilter}>
                    Глушитель
                </button>
                <button data-type="collector" className={tab__btn} onClick={handleFilter}>
                    Коллектор
                </button>
                <button data-type="rest" className={tab__btn} onClick={handleFilter}>
                    Остальное
                </button>
            </div>
        </>
    );
}
export default Select;
