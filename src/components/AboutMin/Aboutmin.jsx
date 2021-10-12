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
                layout="fullWidth"
                // You can optionally force an aspect ratio for the generated image
                aspectRatio={3 / 1}
                // This is a presentational image, so the alt should be an empty string
                alt=""
                // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                src="../../images/suppressor.png"
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
                        Основными видами деятельности является выработка тепловой энергии на
                        собственных котельных, передача и распределение тепловой энергии.
                    </p>
                    <p>
                        Предприятие создано для наиболее полного удовлетворения потребностей
                        населения, организаций в услугах по получению тепловой энергии и горячего
                        водоснабжения.
                    </p>
                    <p>
                        Компания осуществляет свою деятельность в соответствии с законодательством,
                        действующим на территории Российской Федерации, актами органов местного
                        самоуправления и Уставом общества.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Aboutmin;
