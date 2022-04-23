import React from 'react';
import cn from 'classnames';
import { tab__btn, tab__wrap, tab__btn__active } from './mat.module.css';
import { Link } from 'gatsby';

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
                    data-type='catalyst'
                    className={cn(tab__btn, { [tab__btn__active]: btnName === 'catalyst' })}
                    onClick={handleFilter}
                >
                    <Link to='/catalog'>Катализатор</Link>
                </button> */}
                <button
                    data-type='resonator'
                    className={cn(tab__btn, { [tab__btn__active]: btnName === 'resonators' })}
                    onClick={handleFilter}
                >
                    <Link to='/catalog'>Резонатор</Link>
                </button>
                <button
                    data-type='mufflers'
                    className={cn(tab__btn, { [tab__btn__active]: btnName === 'mufflers' })}
                    onClick={handleFilter}
                >
                    <Link to='/catalog'>Глушитель</Link>
                </button>
                <button
                    data-type='collectors'
                    className={cn(tab__btn, { [tab__btn__active]: btnName === 'collectors' })}
                    onClick={handleFilter}
                >
                    <Link to='/catalog'>Приёмная труба</Link>
                </button>
                <button
                    data-type='others'
                    className={cn(tab__btn, { [tab__btn__active]: btnName === 'others' })}
                    onClick={handleFilter}
                >
                    <Link to='/catalog'>Прочее</Link>
                </button>
            </div>
        </>
    );
}
export default Select;
