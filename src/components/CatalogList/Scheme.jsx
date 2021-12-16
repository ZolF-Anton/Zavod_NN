import React from 'react';
import collector from '../../images/parts/collector.svg';
import resonator from '../../images/parts/resonator.svg';
import muffler from '../../images/parts/muffler.svg';
import cn from 'classnames';
import {
    scheme__wrap,
    scheme__part,
    scheme__img,
    scheme__img_resonator,
    scheme__img_muffler,
    scheme__img_active,
} from './mat.module.css';

const Schema = (props) => {
    const { btnName, selectParts } = props;
    let handleFilter = (event) => {
        selectParts(event.target.dataset.type);
    };
    return (
        <div>
            <div className={scheme__wrap}>
                <div className={cn(scheme__part)}>
                    <img
                        data-type="collector"
                        className={cn(scheme__img, {
                            [scheme__img_active]: btnName === 'collector',
                        })}
                        src={collector}
                        alt="collector"
                        onClick={handleFilter}
                    />
                </div>
                <div className={cn(scheme__part)}>
                    <img
                        data-type="resonator"
                        className={cn(scheme__img, scheme__img_resonator, {
                            [scheme__img_active]: btnName === 'resonator',
                        })}
                        src={resonator}
                        alt="resonator"
                        onClick={handleFilter}
                    />
                </div>
                <div className={cn(scheme__part)}>
                    <img
                        data-type="muffler"
                        className={cn(scheme__img, scheme__img_muffler, {
                            [scheme__img_active]: btnName === 'muffler',
                        })}
                        src={muffler}
                        alt="muffler"
                        onClick={handleFilter}
                    />
                </div>
            </div>
        </div>
    );
};

export default Schema;
