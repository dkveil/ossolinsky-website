import React from 'react';
import { Hero, Welcome, Oferts, Testimonial, Blog } from 'layouts/homepage';

const IndexPage = () => (
    <>
        <Hero />
        <Welcome />
        <Oferts />
        <Testimonial />
        <Blog />
    </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
