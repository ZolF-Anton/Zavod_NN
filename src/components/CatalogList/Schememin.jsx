import React from 'react';
import collector from '../../images/parts/collector.svg';
import resonator from '../../images/parts/resonator.svg';
import muffler from '../../images/parts/muffler.svg';
import { Link } from 'gatsby';
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

const Schema = () => {
    return (
        <>
            <Link to='/catalog'>
                <div className={scheme__wrap}>
                    <div className={cn(scheme__part)}>
                        <img
                            data-type='collectors'
                            className={cn(scheme__img, scheme__img_collector)}
                            src={collector}
                            alt='collectors'
                        />
                    </div>
                    <div className={cn(scheme__part)}>
                        <img
                            data-type='resonators'
                            className={cn(scheme__img, scheme__img_resonator)}
                            src={resonator}
                            alt='resonators'
                        />
                    </div>
                    <div className={cn(scheme__part)}>
                        <img
                            data-type='mufflers'
                            className={cn(scheme__img, scheme__img_muffler)}
                            src={muffler}
                            alt='mufflers'
                        />
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Schema;
