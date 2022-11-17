import React from 'react';
import { Offers, Welcome, AboutMe } from '../layouts/Offers';
import { isBrowser } from 'utils/isBrowser';

const OffersPage = () => {
    if (!isBrowser) {
        return null;
    }

    return (
        <>
            <Welcome />
            <AboutMe />
            <Offers />
        </>
    );
};

export default OffersPage;
