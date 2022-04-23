import React from 'react';
// import { useState } from 'react';
import cn from 'classnames';
import {
    card_content,
    card_red,
    card_blue,
    card_green,
    card_disabled,
    card,
    card_title,
    card_img,
} from './mat.module.css';

// [0].attributes.image.data.attributes.formats.medium.url;

function Part(props) {
    const { name, vendor, id, type, image, soldOut, partNumber } = props;
    const imgShort = 'image.data.attributes.formats.medium';
    const strapiUrl = 'https://strapi.ostkost.ru';

    return (
        <>
            <div id={id} className={cn(card)}>
                <div>
                    {!image?.data?.attributes ? (
                        <img
                            className={card_img}
                            alt={name}
                            src='https://via.placeholder.com/300x300.png?text=Картинка+попала+под+санкции+Gremlins'
                        />
                    ) : (
                        <img
                            className={card_img}
                            alt={name}
                            src={strapiUrl + image.data.attributes.formats.small.url}
                        />
                    )}
                </div>
                <div
                    className={cn(card_content, {
                        [card_red]: type === 'premium',
                        [card_blue]: type === 'middle',
                        [card_green]: type === 'optima',
                        [card_disabled]: soldOut === true,
                    })}
                >
                    {vendor} <span>{type}</span> {partNumber}
                    <p className={card_title}>
                        <span>{name}</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Part;
