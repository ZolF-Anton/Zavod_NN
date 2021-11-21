import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { textBlock, title, textChank } from './Aboutmin.module.scss';

function Aboutmin() {
    return (
        <div style={{ display: 'grid' }}>
            {/* You can use a GatsbyImage component if the image is dynamic */}
            <StaticImage
                style={{
                    gridArea: '1/1/4/6',
                    // You can set a maximum height for the image, if you wish.
                    // maxHeight: 600,
                }}
                layout='fullWidth'
                // You can optionally force an aspect ratio for the generated image
                aspectRatio={3 / 1}
                // This is a presentational image, so the alt should be an empty string
                alt=''
                // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                src='../../images/suppressor.png'
                formats={['auto', 'webp', 'avif']}
            />
            <div
                style={{
                    // By using the same grid area for both, they are stacked on top of each other
                    gridArea: '2/2/3/4',
                    position: 'relative',
                    // This centers the other elements inside the hero component
                    placeItems: 'center',
                    display: 'grid',
                }}
            >
                {/* Any content here will be centered in the component */}

                <section className={textBlock}>
                    <h1 className={title}>О компании</h1>
                    <p className={textChank}>
                        Основным видом деятельности нашего завода является производство систем
                        выхлопа отработавших газов. За 13 лет работы мы освоили все основные
                        автокомпоненты для автомобилей отечественного производства (ВАЗ-ГАЗ-УАЗ).
                        Благодаря постоянному мониторингу потребностей рынка и расширению
                        номенклатуры в прайсе представлено более 150 позиций. Наши глушители
                        представлены по всей Центральной России, на Кавказе, Урале и в странах СНГ.
                        Регулярная доставка собственным автотранспортом до вашего склада позволяет
                        обеспечить клиентов полным ассортиментом изделий.
                    </p>
                    <p className={textChank}>Продукция выпускается в трех вариантах:</p>
                    <p className={textChank}>КД - идеальное соотношение цены и качество.</p>
                    <p className={textChank}>ТДГ - премиальный глушитель с бачком ГОСТ.</p>
                    <p className={textChank}>
                        Optima - упрощенная внутренняя система для обеспечения лучшей цены.
                    </p>
                    <p className={textChank}>
                        Мы нацелены на долгосрочное и взаимовыгодное сотрудничество с нашими
                        клиентами!
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Aboutmin;
