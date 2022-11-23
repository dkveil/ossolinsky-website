import React from 'react';
import { Hero, Welcome, Oferts, Testimonial, Blog, Contact, Video } from 'layouts/homepage';
import { isDesktop } from 'utils/isDesktop';
import { SEO } from 'components/SEO';

const IndexPage = () => (
    <>
        <Hero />
        <Welcome />
        <Oferts />
        {typeof window !== 'undefined' && isDesktop() ? <Video /> : null}
        <Testimonial />
        <Blog />
        <Contact />
    </>
);

export default IndexPage;

export const Head = () => <SEO title="Ossolinsky - Strona główna" description="" />;
