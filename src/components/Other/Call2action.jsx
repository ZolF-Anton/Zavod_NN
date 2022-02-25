import React from 'react';
import { btnPrice } from './call2action.module.scss';
import { Link } from 'gatsby';

const Call2action = () => {
    return (
        <section>
            <h3>Получить прайс-лист </h3>
            <p>Вы можете запросить прайс лист заполнив сооветствующую форму на сайте</p>
            <button className={btnPrice}>
                <Link to='/price'>ПОЛУЧИТЬ ПРАЙС</Link>
            </button>
        </section>
    );
};

export default Call2action;
