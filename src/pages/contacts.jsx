import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Helmet } from 'react-helmet';

const ContactsPage = () => {
    return (
        <main>
            <Helmet title='Contacts Page' defer={false} />
            <title>Contacts Page</title>

            <Navbar />
            <h1>В состоянии разработки!</h1>
        </main>
    );
};

export default ContactsPage;
