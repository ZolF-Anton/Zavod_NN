import React from 'react';
import cn from 'classnames';
import { tab__btn, tab__wrap, tab__btn__active } from './mat.module.css';

function Select(props) {
    //const [partName, setSelect] = useState('');
    const { selectParts, btnName } = props;

    let handleFilter = (event) => {
        selectParts(event.target.dataset.type);
    };

    return (
        <>
            <div className={tab__wrap}>
                {/* <button
                    data-type="catalyst"
                    className={cn(tab__btn, { [tab__btn__active]: btnName === 'catalyst' })}
                    onClick={handleFilter}
                >
                    Катализатор
                </button> */}
                <button
                    data-type='resonator'
                    className={cn(tab__btn, { [tab__btn__active]: btnName === 'resonator' })}
                    onClick={handleFilter}
                >
                    Резонатор
                </button>
                <button
                    data-type='muffler'
                    className={cn(tab__btn, { [tab__btn__active]: btnName === 'muffler' })}
                    onClick={handleFilter}
                >
                    Глушитель
                </button>
                <button
                    data-type='collector'
                    className={cn(tab__btn, { [tab__btn__active]: btnName === 'collector' })}
                    onClick={handleFilter}
                >
                    Приёмная труба
                </button>
                <button
                    data-type='rest'
                    className={cn(tab__btn, { [tab__btn__active]: btnName === 'rest' })}
                    onClick={handleFilter}
                >
                    Прочее
                </button>
            </div>
        </>
    );
}
export default Select;
