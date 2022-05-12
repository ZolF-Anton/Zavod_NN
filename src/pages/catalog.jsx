import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import MainBlockMin from '../components/MainBlockMin';
import CatalogList from '../components/CatalogList/Cataloglist';

import Footer from '../components/Footer/Footer';
import Scroll2top from '../util/scroll2top';

const CatalogPage = () => {
    return (
        <>
            <Helmet title='Catalog Page' defer={false}>
                <title>Catalog Page</title>
            </Helmet>
            <Navbar />
            <main>
                <MainBlockMin />
                <CatalogList />
            </main>
            <Scroll2top />
            <Footer />
        </>
    );
};

export default CatalogPage;
