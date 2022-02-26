import React from 'react';
import { skillsWrap, skillItem, skillTitle, skillDescr } from './headerbot.module.scss';
const Headerbot = () => {
    return (
        <>
            <div className={skillsWrap}>
                <div className={skillItem}>
                    <div className={skillTitle}>ПАРТНЕРСТВО</div>
                    <div className={skillDescr}>
                        Мы предлагаем нашим клиентам уникальные дилерские условия, оптимальные для
                        вашего региона
                    </div>
                </div>
                <div className={skillItem}>
                    <div className={skillTitle}>ТЕХНОЛОГИИ</div>
                    <div className={skillDescr}>
                        Использование современных технологий обеспечивает качество продукции и её
                        долговечность
                    </div>
                </div>
                <div className={skillItem}>
                    <div className={skillTitle}>КОЛЛЕКТИВ</div>
                    <div className={skillDescr}>
                        Более 100 специалистов ежедневно работают над созданием высококачественной
                        продукции
                    </div>
                </div>
                <div className={skillItem}>
                    <div className={skillTitle}>АССОРТИМЕНТ</div>
                    <div className={skillDescr}>
                        Мы предлагаем вам более 180 видов изделий систем выхлопа автомобиля и
                        регулярно расширяем линейку номенклатуры
                    </div>
                </div>
            </div>
        </>
    );
};

export default Headerbot;
