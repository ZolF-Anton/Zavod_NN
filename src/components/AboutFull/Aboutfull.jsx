import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
    aboutWrap,
    bg,
    aboutBox,
    aboutAdress,
    aboutTitle,
    aboutGrid,
} from './Aboutfull.module.scss';
//import {} from './Aboutfull.module.scss';

const Aboutfull = () => {
    return (
        <main>
            <div className={aboutWrap}>
                <div className={aboutBox}>
                    <div className={aboutTitle}>Завод КД и ТДГ</div>
                    <div className={aboutAdress}>г. Зерноград, ул. Ленина, 16Е</div>
                </div>
                <StaticImage
                    alt=''
                    style={{ position: 'absolute' }}
                    src='../../images/Aboutfull.png'
                    className={bg}
                />
            </div>
            <div className={aboutGrid}>
                <div className='aboutTm_img'></div>
                <div className='aboutTm'>
                    <h4>Торговая марка «КД»</h4>
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </div>
                <div className='aboutTm_img'></div>
                <div className='aboutTm'>
                    <h4>Торговая марка «ТДГ»</h4>
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </div>
            </div>
        </main>
    );
};

export default Aboutfull;
