import * as React from 'react';
import { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
    catalog__slider,
    slider__container,
    catalog__sliderItem,
    catalog__sliderControl,
} from './slider.module.scss';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(9);

    useEffect(() => {
        setLength(9); //Количество изображений
    }, []);

    const nextImg = () => {
        if (currentIndex < length - 1) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const prevImg = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    return (
        <>
            <div className={slider__container}>
                <ul className={catalog__slider}>
                    <button className={catalog__sliderControl}>&lt;</button>
                    <button className={catalog__sliderControl}>&gt;</button>
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
                </ul>
            </div>
        </>
    );
};

export default Slider;

/*
<ul className={catalog__slider}>
                    <button className={catalog__sliderControl}>&lt;</button>
                    <button className={catalog__sliderControl}>&gt;</button>
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
                </ul>

*/
