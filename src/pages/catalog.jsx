import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import MainBlockMin from '../components/MainBlockMin';
import CatalogList from '../components/CatalogList/Cataloglist';

import Footer from '../components/Footer/Footer';

const CatalogPage = () => {
    return (
        <main>
            <Helmet title="Catalog Page" defer={false} />
            <title>Catalog Page</title>
            <Navbar />
            <MainBlockMin />
            <CatalogList />
            <Footer />
        </main>
    );
};

export default CatalogPage;
