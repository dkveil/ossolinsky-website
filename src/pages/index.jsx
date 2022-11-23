import React from 'react';
import { Hero, Welcome, Oferts, Testimonial, Blog, Contact, Video } from 'layouts/homepage';
import { isDesktop } from 'utils/isDesktop';

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

export const Head = () => <title>Ossolinsky - Zachwyć swoich gości profesjonalną usługą barmańską!</title>;
