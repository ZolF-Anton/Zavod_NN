import React from 'react';
import cn from 'classnames';
import { card_img, card_bigPicture, hidden, part_modal__close } from './mat.module.scss';

const Part_modal = (props) => {
    const { image, strapiUrl, imgShow, setImgShow } = props;

    return (
        <div
            onClick={() => setImgShow(true)}
            className={cn(card_bigPicture, { [hidden]: imgShow })}
        >
            <div className={part_modal__close}>
                <span></span>
                <span></span>
            </div>
            {!image?.data?.attributes ? (
                <img
                    className={card_img}
                    src='https://via.placeholder.com/325x217.png?text=Картинка+попала+под+санкции+Gremlins'
                />
            ) : (
                <img
                    className={card_img}
                    src={strapiUrl + image.data.attributes.formats.large.url}
                />
            )}
        </div>
    );
};

export default Part_modal;
