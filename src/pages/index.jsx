import React from 'react';
import { Hero, AboutMe } from 'layouts/homepage';

const IndexPage = () => (
    <>
        <Hero />
        <AboutMe />
    </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
