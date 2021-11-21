import React from 'react';
import { autoHeader, autoWrap, autoName } from './auto.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const Auto = () => {
    return (
        <section>
            <h1 className={autoHeader}>Автомобили</h1>
            <div className={autoWrap}>
                <div className={autoName}>
                    <StaticImage
                        src='../../images/icons/auto/gaz.svg'
                        alt='Car brand name'
                        placeholder='blurred'
                    />
                </div>
                <div className={autoName}>
                    <StaticImage
                        src='../../images/icons/auto/vaz.svg'
                        alt='Car brand name'
                        placeholder='blurred'
                    />
                </div>
                <div className={autoName}>
                    <StaticImage
                        src='../../images/icons/auto/uaz.svg'
                        alt='Car brand name'
                        placeholder='blurred'
                    />
                </div>
                <div className={autoName}>
                    <StaticImage
                        src='../../images/icons/auto/gaz.svg'
                        alt='Car brand name'
                        placeholder='blurred'
                    />
                </div>
                <div className={autoName}>
                    <StaticImage
                        src='../../images/icons/auto/vaz.svg'
                        alt='Car brand name'
                        placeholder='blurred'
                    />
                </div>
                <div className={autoName}>
                    <StaticImage
                        src='../../images/icons/auto/uaz.svg'
                        alt='Car brand name'
                        placeholder='blurred'
                    />
                </div>
            </div>
        </section>
    );
};

export default Auto;
