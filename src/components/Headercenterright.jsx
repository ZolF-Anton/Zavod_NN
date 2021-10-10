import React from 'react';
import uaz from '../images/icons/auto/uaz.svg';
import gaz from '../images/icons/auto/gaz.svg';
import vaz from '../images/icons/auto/vaz.svg';
import { kalimagi, imgAuto } from './headercenter.module.scss';

const Headercenterright = () => {
    return (
        <>
            <div className={kalimagi}>
                <div className={imgAuto}>
                    <img src={uaz} alt='УАЗ' />
                </div>

                <div className={imgAuto}>
                    <img src={gaz} alt='ГАЗ' />
                </div>

                <div className={imgAuto}>
                    <img src={vaz} alt='ВАЗ' />
                </div>
            </div>
        </>
    );
};

export default Headercenterright;
