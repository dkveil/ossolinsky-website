import React from 'react';
import { Hero, Welcome, Oferts } from 'layouts/homepage';

const IndexPage = () => (
    <>
        <Hero />
        <Welcome />
        <Oferts />
    </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
