import React from 'react';
import cn from 'classnames';
import { tab__btn, tab__wrap, tab__btn__active } from './mat.module.scss';

function Select(props) {
    const { btnName, setBtnName, setClicker } = props;

    let handleFilter = (event) => {
        setClicker((prev) => !prev);
        setBtnName('');
        setBtnName(event.target.dataset.type);
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
                    data-type='resonators'
                    className={cn(tab__btn, { [tab__btn__active]: btnName === 'resonators' })}
                    onClick={handleFilter}
                >
                    Резонатор
                </button>
                <button
                    data-type='mufflers'
                    className={cn(tab__btn, { [tab__btn__active]: btnName === 'mufflers' })}
                    onClick={handleFilter}
                >
                    Глушитель
                </button>
                <button
                    data-type='collectors'
                    className={cn(tab__btn, { [tab__btn__active]: btnName === 'collectors' })}
                    onClick={handleFilter}
                >
                    Приёмная труба
                </button>
                <button
                    data-type='others'
                    className={cn(tab__btn, { [tab__btn__active]: btnName === 'others' })}
                    onClick={handleFilter}
                >
                    Прочее
                </button>
            </div>
        </>
    );
}
export default Select;
