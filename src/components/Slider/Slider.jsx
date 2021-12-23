import * as React from 'react';
import { useState, useRef } from 'react';
import SliderImg from './SliderImg';
//import { GatsbyImage } from 'gatsby-plugin-image';
//import { } from 'react-icons/fa'
import { slider__container, catalog__sliderControl } from './slider.module.scss';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imgCount, setImgCount] = useState(0);
    const slider = useRef(null);

    const nextImg = () => {
        if (currentIndex < imgCount - 1) {
            setCurrentIndex((prevState) => prevState + 1);
            console.log(currentIndex);
        }
    };

    const prevImg = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
            console.log(currentIndex);
        }
    };

    const nextSlide = (up = true) => {
        console.log('nextSlide');
        const slides = slider.current.childNodes;
        const sliderWidth = slider.current.offsetWidth;
        const sliderFullWidth = slider.current.scrollWidth;
        const sliderScrolled = slider.current.scrollLeft;
        const itemWidth = sliderFullWidth / slides.length;
        const maxItems = Math.round(sliderWidth / itemWidth);
        const maxScroll = (slides.length - maxItems) * itemWidth;
        console.log(sliderScrolled);
        let left = 0;
        if (up) {
            if (sliderScrolled >= maxScroll) {
                left = 0;
                slider.current.scrollTo({
                    left,
                    behavior: 'instant',
                });
            }
            left = sliderScrolled < maxScroll && sliderScrolled + itemWidth;
        } else {
            if (sliderScrolled <= 0) {
                left = maxScroll;
                slider.current.scrollTo({
                    left,
                    behavior: 'instant',
                });
            } else {
                left = sliderScrolled - itemWidth;
            }
        }
        slider.current.scrollTo({
            left,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className={slider__container}>
                <button className={catalog__sliderControl} onClick={() => nextSlide(true)}>
                    &lt;
                </button>
                <button className={catalog__sliderControl} onClick={() => nextSlide(false)}>
                    &gt;
                </button>

                <SliderImg setImgCount={setImgCount} slider={slider} />
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
