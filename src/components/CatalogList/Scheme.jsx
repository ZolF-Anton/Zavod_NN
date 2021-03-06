import React from 'react';
import collector from '../../images/parts/collector.svg';
import resonator from '../../images/parts/resonator.svg';
import muffler from '../../images/parts/muffler.svg';
import cn from 'classnames';
import {
    scheme__wrap,
    scheme__part,
    scheme__img,
    scheme__img_collector,
    scheme__img_resonator,
    scheme__img_muffler,
    scheme__img_active,
} from './mat.module.scss';

const Schema = (props) => {
    const { btnName, setBtnName, setClicker } = props;
    let handleFilter = (event) => {
        setClicker((prev) => !prev);
        setBtnName(event.target.dataset.type);
    };
    return (
        <>
            <div className={scheme__wrap}>
                <div className={cn(scheme__part)}>
                    <img
                        data-type='collectors'
                        className={cn(scheme__img, scheme__img_collector, {
                            [scheme__img_active]: btnName === 'collectors',
                        })}
                        src={collector}
                        alt='collectors'
                        onClick={handleFilter}
                    />
                </div>
                <div className={cn(scheme__part)}>
                    <img
                        data-type='resonators'
                        className={cn(scheme__img, scheme__img_resonator, {
                            [scheme__img_active]: btnName === 'resonators',
                        })}
                        src={resonator}
                        alt='resonators'
                        onClick={handleFilter}
                    />
                </div>
                <div className={cn(scheme__part)}>
                    <img
                        data-type='mufflers'
                        className={cn(scheme__img, scheme__img_muffler, {
                            [scheme__img_active]: btnName === 'mufflers',
                        })}
                        src={muffler}
                        alt='mufflers'
                        onClick={handleFilter}
                    />
                </div>
            </div>
        </>
    );
};

export default Schema;
