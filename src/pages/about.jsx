import * as React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
//import * as styles from './about.module.scss';
import { Helmet } from 'react-helmet';
import Call2action from '../components/Other/Call2action';
import PriceForm from '../components/Other/PriceForm';

const AboutPage = () => {
    const [moadalActive, setModalActive] = useState(false);
    return (
        <main>
            <Helmet title="About Page" defer={false} />
            <title>About Page</title>
            <Header />
            <Call2action active={moadalActive} setActive={setModalActive} />
            <PriceForm active={moadalActive} setActive={setModalActive} />
        </main>
    );
};

export default AboutPage;
