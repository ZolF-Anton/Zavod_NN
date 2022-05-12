import * as React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/Navbar';
import MainBlockMin from '../components/MainBlockMin';
import PriceForm from '../components/Other/PriceForm';
import Auto from '../components/Autos/Auto';
import AutoPopular from '../components/Autos/AutoPopular';
import Footer from '../components/Footer/Footer';
import Scroll2top from '../util/scroll2top';

const PricePage = () => {
    return (
        <>
            <Helmet title='Price Page' defer={false}>
                <title>About Page</title>
            </Helmet>
            <Navbar />
            <main>
                <MainBlockMin />
                <Auto />
                <PriceForm />
                <AutoPopular />
            </main>
            <Scroll2top />
            <Footer />
        </>
    );
};

export default PricePage;
