import React from 'react';
import {
    Hero,
    Welcome,
    Oferts,
    Testimonial,
    Blog,
    Contact,
} from 'layouts/homepage';

const IndexPage = () => (
    <>
        <Hero />
        <Welcome />
        <Oferts />
        <Testimonial />
        <Blog />
        <Contact />
    </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
