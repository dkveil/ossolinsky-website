import React from 'react';
import { FormInfo, About } from 'layouts/Contact';
import { isBrowser } from 'utils/isBrowser';

const ContactPage = () => {
    if (!isBrowser) {
        return null;
    }

    return (
        <>
            <About />
            <FormInfo />
        </>
    );
};

export default ContactPage;
