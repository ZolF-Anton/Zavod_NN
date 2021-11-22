import * as React from 'react';

import Header from '../components/Header';
//import * as styles from './about.module.scss';
import { Helmet } from 'react-helmet';
import Call2action from '../components/Other/Call2action';
import Aboutfull from '../components/AboutFull/Aboutfull';
import PriceForm from '../components/Other/PriceForm';

const AboutPage = () => {
    return (
        <main>
            <Helmet title='About Page' defer={false} />
            <title>About Page</title>

            <Header />
            <Call2action />
            <Aboutfull />
            <PriceForm />
        </main>
    );
};

export default AboutPage;
