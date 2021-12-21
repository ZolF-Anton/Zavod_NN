import * as React from 'react';

import Header from '../components/Header';
//import * as styles from './about.module.scss';
import { Helmet } from 'react-helmet';
import Call2action from '../components/Other/Call2action';
import Aboutfull from '../components/AboutFull/Aboutfull';
import PriceForm from '../components/Other/PriceForm';
import Auto from '../components/Autos/Auto';
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';

const AboutPage = () => {
    return (
        <>
            <Helmet title="Catalog Page" defer={false}>
                <title>About Page</title>
            </Helmet>

            <main>
                <Header />
                <Call2action />
                <Aboutfull />
                <Slider />
                <PriceForm />
                <Auto />
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;
