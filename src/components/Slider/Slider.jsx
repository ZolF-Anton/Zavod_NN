import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { catalog__slider, slider__container, catalog__sliderItem } from './slider.module.scss';

const Slider = () => {
    return (
        <>
            <div className={slider__container}>
                <ul className={catalog__slider}>
                    <li className={catalog__sliderItem}>
                        <StaticImage
                            src="../../images/slider/slide_1.png"
                            alt="Car brand name"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </li>
                    <li className={catalog__sliderItem}>
                        <StaticImage
                            src="../../images/slider/slide_2.png"
                            alt="Car brand name"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </li>
                    <li className={catalog__sliderItem}>
                        <StaticImage
                            src="../../images/slider/slide_3.png"
                            alt="Car brand name"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </li>
                    <li className={catalog__sliderItem}>
                        <StaticImage
                            src="../../images/slider/slide_4.png"
                            alt="Car brand name"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </li>

                    <li className={catalog__sliderItem}>
                        <StaticImage
                            src="../../images/slider/slide_5.png"
                            alt="Car brand name"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </li>
                    <li className={catalog__sliderItem}>
                        <StaticImage
                            src="../../images/slider/slide_6.png"
                            alt="Car brand name"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </li>
                    <li className={catalog__sliderItem}>
                        <StaticImage
                            src="../../images/slider/slide_7.png"
                            alt="Car brand name"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </li>
                    <li className={catalog__sliderItem}>
                        <StaticImage
                            src="../../images/slider/slide_8.png"
                            alt="Car brand name"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </li>
                    <li className={catalog__sliderItem}>
                        <StaticImage
                            src="../../images/slider/slide_9.png"
                            alt="Car brand name"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </li>
                    <li className={catalog__sliderItem}>
                        <StaticImage
                            src="../../images/slider/slide_10.png"
                            alt="Car brand name"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </li>
                    <li className={catalog__sliderItem}>
                        <StaticImage
                            src="../../images/slider/slide_11.png"
                            alt="Car brand name"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </li>
                    <li className={catalog__sliderItem}>
                        <StaticImage
                            src="../../images/slider/slide_12.png"
                            alt="Car brand name"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </li>
                    <li className={catalog__sliderItem}>
                        <StaticImage
                            src="../../images/slider/slide_13.png"
                            alt="Car brand name"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </li>
                    <li className={catalog__sliderItem}>
                        <StaticImage
                            src="../../images/slider/slide_14.png"
                            alt="Car brand name"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </li>
                    <li className={catalog__sliderItem}>
                        <StaticImage
                            src="../../images/slider/slide_15.png"
                            alt="Car brand name"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Slider;
