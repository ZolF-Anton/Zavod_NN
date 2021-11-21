import React from 'react';
import { popularHeader, popularWrap, popularCar } from './autopopular.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import {} from './autopopular.module.scss';

const AutoPopular = () => {
    return (
        <section>
            <h1 className={popularHeader}>Популярные модели</h1>

            <div className={popularWrap}>
                <div className={popularCar}>
                    <StaticImage
                        src='../../images/PopularCar/gazel.png'
                        alt='Car brand name'
                        placeholder='blurred'
                        layout='fullWidth'
                    />
                </div>
                <div className={popularCar}>
                    <StaticImage
                        src='../../images/PopularCar/gazel.png'
                        alt='Car brand name'
                        placeholder='blurred'
                        layout='fullWidth'
                    />
                </div>
                <div className={popularCar}>
                    <StaticImage
                        src='../../images/PopularCar/gazel.png'
                        alt='Car brand name'
                        placeholder='blurred'
                        layout='fullWidth'
                    />
                </div>
                <div className={popularCar}>
                    <StaticImage
                        src='../../images/PopularCar/gazel.png'
                        alt='Car brand name'
                        placeholder='blurred'
                        layout='fullWidth'
                    />
                </div>
            </div>
        </section>
    );
};

export default AutoPopular;
