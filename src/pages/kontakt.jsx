import React from 'react';
import { FormInfo, About } from 'layouts/Contact';
import { isBrowser } from 'utils/isBrowser';
import { SEO } from 'components/SEO/SEO';

const welcomedescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet faucibus justo. Nullam a faucibus nisi, et suscipit augue. Vivamus orci sem, luctus in consectetur auctor, elementum ac mauris.';

const ContactPage = () => {
    if (!isBrowser) {
        return null;
    }

    return (
        <>
            <About welcomedescription={welcomedescription} />
            <FormInfo />
        </>
    );
};

export const Head = () => <SEO title="Kontakt - Ossolinsky.pl" description={welcomedescription} slug="/kontakt" />;

export default ContactPage;
