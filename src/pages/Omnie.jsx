import React from 'react';
import { Welcome, AboutBartending, Testimonial } from 'layouts/AboutMe';
import { isDesktop } from 'utils/isDesktop';

const AboutMePage = () => (
    <>
        <Welcome />
        <AboutBartending />
        {isDesktop() && <Testimonial />}
    </>
);

export default AboutMePage;

export const Head = () => <title>About Me Page</title>;
