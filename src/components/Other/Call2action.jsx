import React from 'react';
import { btnPrice } from './call2action.module.scss';

const Call2action = ({ active, setActive }) => {
    return (
        <section>
            <h3>Получить прайс-лист </h3>
            <p>Вы можете запросить прайс лист заполнив сооветствующую форму на сайте</p>
            <button className={btnPrice} onClick={setActive}>
                ПОЛУЧИТЬ ПРАЙС
            </button>
        </section>
    );
};

export default Call2action;
