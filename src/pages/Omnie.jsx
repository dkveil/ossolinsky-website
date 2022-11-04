import React from 'react';
import { Welcome, AboutBartending } from 'layouts/AboutMe';

const AboutMePage = () => (
    <>
        <Welcome />
        <AboutBartending />
    </>
);

export default AboutMePage;

export const Head = () => <title>About Me Page</title>;
