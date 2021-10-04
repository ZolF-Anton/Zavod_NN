import * as React from 'react';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';

// markup
const IndexPage = () => {
    return (
        <>
            <Helmet title="Zavod Home" defer={false}>
                <title>Home Page</title>
            </Helmet>
            <Header />
        </>
    );
};

export default IndexPage;
