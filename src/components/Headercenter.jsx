import React from 'react';
import { title, subtitle } from './headercenter.module.scss';
const Headercenter = () => {
    return (
        <>
            <h1 className={title}>Завод автомобильных глушителей «КД»&nbsp;и&nbsp;«ТДГ»</h1>
            <h5 className={subtitle}>
                Работаем с 343 года нашей эры <br /> ставили глушаки ещё римским легионерам!
            </h5>
        </>
    );
};

export default Headercenter;
