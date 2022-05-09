import React from 'react';
import { useState } from 'react';
import Logo from '../../images/logo-s-t.svg';
import LogoT from '../../images/logo-s.svg';
//import { ReactComponent as LogoT } from '../../images/logo-s.svg';
import cn from 'classnames';
import Part_modal from './Part_modal';
import {
    card_content,
    card_red,
    card_blue,
    card_green,
    card_disabled,
    card,
    card_title,
    card_img,
    card_article,
    card_copyArt,
    card_logo__img,
    hidden,
} from './mat.module.scss';

// [0].attributes.image.data.attributes.formats.medium.url;

function Part(props) {
    const { name, vendor, id, type, image, soldOut, partNumber, filteredByAssembler } = props;
    const [imgShow, setImgShow] = useState(true);
    const [hide, setHide] = useState(true);
    const [animation, setAnimation] = useState(0);
    //const imgShort = 'image.data.attributes.formats.medium';
    const strapiUrl = 'https://strapi.ostkost.ru';

    const zoomImage = (e) => {
        setImgShow((imgShow) => !imgShow);
    };

    const copy2Clipboard = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(e.target.innerText);
        toggleHide();
    };
    const toggleHide = () => {
        setHide(false);
        setAnimation(1);
        setTimeout(() => {
            setHide(true);
            setAnimation(0);
        }, 900);
    };

    return (
        <>
            <div id={id} className={cn(card)}>
                <div>
                    {!image?.data?.attributes ? (
                        <img
                            className={card_img}
                            alt={name}
                            src='https://via.placeholder.com/325x217.png?text=Картинка+попала+под+санкции+Gremlins'
                        />
                    ) : (
                        <img
                            onClick={zoomImage}
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
                    <div>
                        <img
                            className={cn({
                                [card_logo__img]: type === 'premium',
                                [hidden]: type !== 'premium',
                            })}
                            src={Logo}
                            alt='Logo'
                            onClick={() => filteredByAssembler(type)}
                        />
                        <img
                            className={cn({
                                [card_logo__img]: type === 'middle',
                                [hidden]: type !== 'middle',
                            })}
                            src={LogoT}
                            alt='LogoT'
                            onClick={() => filteredByAssembler(type)}
                        />
                        {/* {vendor} <span>{type}</span> */}
                    </div>
                    <p className={card_title}>
                        <span>{name}</span>
                    </p>
                    <div className={cn(card_article)}>
                        <div
                            className={cn(
                                card_copyArt,
                                { [hidden]: hide },
                                {
                                    [card_red]: type === 'premium',
                                    [card_blue]: type === 'middle',
                                    [card_green]: type === 'optima',
                                }
                            )}
                            animation={animation}
                        >
                            Скопировано!
                        </div>
                        Артикул: <span onClick={copy2Clipboard}>{partNumber}</span>
                    </div>
                </div>
            </div>
            <Part_modal
                image={image}
                strapiUrl={strapiUrl}
                imgShow={imgShow}
                setImgShow={setImgShow}
            />
        </>
    );
}

export default Part;
