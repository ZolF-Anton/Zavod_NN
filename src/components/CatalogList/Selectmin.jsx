import React from 'react';
import cn from 'classnames';
import { tab__btn, tab__wrap, tab__btn__active } from './mat.module.scss';
import { Link } from 'gatsby';

function Select() {
    return (
        <>
            <div className={tab__wrap}>
                {/* <button
                    data-type='catalyst'
                    className={cn(tab__btn, { [tab__btn__active]: btnName === 'catalyst' })}
                    onClick={handleFilter}
                >
                    <Link to='/catalog'>Катализатор</Link>
                </button> */}
                <Link to='/catalog'>
                    <button data-type='resonator' className={cn(tab__btn)}>
                        Резонатор
                    </button>
                </Link>
                <Link to='/catalog'>
                    <button data-type='mufflers' className={cn(tab__btn)}>
                        Глушитель
                    </button>
                </Link>
                <Link to='/catalog'>
                    <button data-type='collectors' className={cn(tab__btn)}>
                        Приёмная труба
                    </button>
                </Link>
                <Link to='/catalog'>
                    <button data-type='others' className={cn(tab__btn)}>
                        Прочее
                    </button>
                </Link>
            </div>
        </>
    );
}
export default Select;
