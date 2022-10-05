import React from 'react';
import { Hero, Welcome, Oferts, Testimonial, Blog, Contact, Video } from 'layouts/homepage';
import { isDesktop } from 'utils/isDesktop';

const IndexPage = () => (
    <>
        <Hero />
        <Welcome />
        <Oferts />
        {isDesktop() && <Video />}
        <Testimonial />
        <Blog />
        <Contact />
    </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
