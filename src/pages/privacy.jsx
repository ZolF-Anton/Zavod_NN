import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import PrivacyX from '../components/Privacy/PrivacyX';

const Privacy = () => {
    return (
        <main>
            <Helmet title='Catalog Page' defer={false} />
            <title>Privacy Page</title>
            <Navbar />
            <PrivacyX />
        </main>
    );
};

export default Privacy;
