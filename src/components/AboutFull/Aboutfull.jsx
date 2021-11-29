import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
    aboutWrap,
    bg,
    aboutBox,
    aboutAdress,
    aboutTitle,
    aboutGrid,
    aboutTm,
    aboutDescr,
    aboutOl,
    aboutTm_img,
} from './aboutfull.module.scss';

const Aboutfull = () => {
    return (
        <div>
            <div className={aboutWrap}>
                <div className={aboutBox}>
                    <div className={aboutTitle}>Завод КД и ТДГ</div>
                    <div className={aboutAdress}>
                        <StaticImage alt='map-point' src='../../images/icons/map-point.svg' />
                        <span>г. Зерноград, ул. Ленина, 16Е</span>
                    </div>
                </div>
                <StaticImage
                    alt=''
                    style={{ position: 'absolute' }}
                    src='../../images/Aboutfull.png'
                    className={bg}
                />
            </div>
            <div className={aboutGrid}>
                <div className={aboutTm_img}>
                    <StaticImage
                        src='../../images/logo-s.svg'
                        alt='logo first'
                        width={310}
                        layout='constrained'
                    />
                </div>
                <div className={aboutTm}>
                    <div className={aboutDescr}>Торговая марка «КД»</div>
                    <ol className={aboutOl}>
                        <li>Гарантия 12 месяцев</li>
                        <li>Оптимальный показатель цена/качество</li>
                        <li>Конструкция глушителя позволяет достичь уровня 74 db</li>
                        <li>
                            Качество подтверждается Сертификатом соответствия POCC RU MT25.B06325
                            выданным на основании протокола № 60—04/54—04 от 20.09.07
                            научно-исследовательским центром испытаниям и доводке автотехники (
                            ИЦ-НИЦИФМТ) Московская область г. Дмитров-7
                        </li>
                    </ol>
                </div>
                <div className={aboutTm_img}>
                    <StaticImage
                        src='../../images/logo-s-t.svg'
                        alt='logo first'
                        width={130}
                        layout='constrained'
                    />
                </div>
                <div className={aboutTm}>
                    <div className={aboutDescr}>Торговая марка «ТДГ»</div>
                    <ol className={aboutOl}>
                        <li>Гарантия 18 месяцев</li>
                        <li>
                            Внутренний узел глушителя покрыт защитным слоем, что продлевает срок
                            службы и позволяет увеличить гарантийный срок
                        </li>
                        <li>
                            Усложненная конструкция внутреннего узла и применение базальтового
                            наполнения обеспечивает уровень шума 70 db
                        </li>
                        <li>
                            Нанесение на корпус глушителя товарного знака, этикетка с отметкой ОТК и
                            датой производства, фирменная упаковка
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Aboutfull;
