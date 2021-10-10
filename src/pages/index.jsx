import * as React from 'react';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer/Footer';

// markup
const IndexPage = () => {
    return (
        <>
            <main>
                <Helmet title='Zavod Home' defer={false}>
                    <title>Home Page</title>
                </Helmet>
                <Header />
            </main>
            <Footer />
        </>
    );
};

export default IndexPage;
