import React from 'react';
import {
    main_block_min,
    main_block_min__title,
    main_block_min__subtitle,
} from './mainblockmin.module.scss';

const MainBlockMin = () => {
    return (
        <section className={main_block_min}>
            <h1 className={main_block_min__title}>Завод автомобильных глушителей «КД» и «ТДГ» </h1>
            <p className={main_block_min__subtitle}>Работаем с 343 года нашей эры</p>
            <p className={main_block_min__subtitle}>ставили глушаки ещё римским легионерам!</p>
        </section>
    );
};

export default MainBlockMin;
