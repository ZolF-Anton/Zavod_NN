import * as React from 'react';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import Aboutmin from '../components/AboutMin/Aboutmin';
import Footer from '../components/Footer/Footer';
import CatalogListMin from '../components/CatalogList/Cataloglistmin';
import Scroll2top from '../util/scroll2top';

// markup
const IndexPage = () => {
    return (
        <>
            <Helmet title='Zavod Home' defer={false}>
                <title>Home Page</title>
            </Helmet>
            <main>
                <Header />
                <CatalogListMin />
                <Aboutmin />
            </main>
            <Scroll2top />
            <Footer />
        </>
    );
};

export default IndexPage;
