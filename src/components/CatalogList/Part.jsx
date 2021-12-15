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
} from './mat.module.css';

function Part(props) {
    const { Name, Vendor, id, Type, Images, SoldOut } = props;

    return (
        <>
            <div id={id} className={cn(card)}>
                <div>
                    {!Images[0].thumbnails.large.url ? (
                        <img
                            alt={Name}
                            src="https://via.placeholder.com/150x300.png?text=Poster+was+ninjaed+by+wild+Gremlins"
                        />
                    ) : (
                        <img alt={Name} src={Images[0].thumbnails.large.url} />
                    )}
                </div>
                <div
                    className={cn(card_content, {
                        [card_red]: Type === 'Premium',
                        [card_blue]: Type === 'Middle',
                        [card_green]: Type === 'Optima',
                        [card_disabled]: SoldOut === true,
                    })}
                >
                    {Vendor} <span>{Type}</span>
                    <p className={card_title}>
                        <span>{Name}</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Part;
