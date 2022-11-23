import React from 'react';
import { Welcome, AboutBartending, Testimonial } from 'layouts/AboutMe';
import { isDesktop } from 'utils/isDesktop';
import { isBrowser } from 'utils/isBrowser';
import { SEO } from 'components/SEO';

const AboutMePage = () => {
    if (!isBrowser) {
        return null;
    }

    return (
        <>
            <Welcome />
            <AboutBartending />
            {isDesktop() && <Testimonial />}
        </>
    );
};

export default AboutMePage;

export const Head = () => <SEO title="Ossolinsky - Strona główna" description="" slug="/omnie" />;
