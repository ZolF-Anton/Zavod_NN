import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import PrivacyX from '../components/Privacy/PrivacyX';
import Scroll2top from '../util/scroll2top';

const Privacy = () => {
    return (
        <main>
            <Helmet title='Catalog Page' defer={false} />
            <title>Privacy Page</title>
            <Navbar />
            <PrivacyX />
            <Scroll2top />
        </main>
    );
};

export default Privacy;
