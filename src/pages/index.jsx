import React from 'react';
import { Hero, Welcome, Oferts, Testimonial } from 'layouts/homepage';

const IndexPage = () => (
    <>
        <Hero />
        <Welcome />
        <Oferts />
        <Testimonial />
    </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
