import React from 'react';
import { Link } from 'gatsby';
import { popularHeader, popularWrap, popularCar } from './autopopular.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import {} from './autopopular.module.scss';

const AutoPopular = () => {
    return (
        <section>
            <h1 className={popularHeader}>Популярные модели</h1>

            <div className={popularWrap}>
                <Link to='/catalog'>
                    <div className={popularCar}>
                        <StaticImage
                            src='../../images/PopularCar/DSC07675-2.jpg'
                            alt='Car brand name'
                            placeholder='blurred'
                            layout='fullWidth'
                        />
                    </div>
                </Link>
                <Link to='/catalog'>
                    <div className={popularCar}>
                        <StaticImage
                            src='../../images/PopularCar/DSC07697-2.jpg'
                            alt='Car brand name'
                            placeholder='blurred'
                            layout='fullWidth'
                        />
                    </div>
                </Link>
                <Link to='/catalog'>
                    <div className={popularCar}>
                        <StaticImage
                            src='../../images/PopularCar/DSC07705-2.jpg'
                            alt='Car brand name'
                            placeholder='blurred'
                            layout='fullWidth'
                        />
                    </div>
                </Link>
                <Link to='/catalog'>
                    <div className={popularCar}>
                        <StaticImage
                            src='../../images/PopularCar/DSC07847-2.jpg'
                            alt='Car brand name'
                            placeholder='blurred'
                            layout='fullWidth'
                        />
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default AutoPopular;
