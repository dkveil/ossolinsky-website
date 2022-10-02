import React from 'react';
import { Hero, Welcome } from 'layouts/homepage';

const IndexPage = () => (
    <>
        <Hero />
        <Welcome />
    </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
