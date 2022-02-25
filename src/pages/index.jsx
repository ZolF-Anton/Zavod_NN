import * as React from 'react';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import Aboutmin from '../components/AboutMin/Aboutmin';
import Footer from '../components/Footer/Footer';
import CatalogListMin from '../components/CatalogList/Cataloglistmin';

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
            <Footer />
        </>
    );
};

export default IndexPage;
