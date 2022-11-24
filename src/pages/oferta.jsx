import React from 'react';
import { Offers, Welcome, AboutMe } from '../layouts/Offers';
import { isBrowser } from 'utils/isBrowser';
import { SEO } from 'components/SEO/SEO';

const welcomedescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante urna, eleifend ut nulla sagittis, sagittis dictum est. Proin facilisis sem suscipit sapien eleifend, laoreet pulvinar nunc finibus. Sed luctus metus ex, quis porttitor lectus eleifend id. Sed malesuada imperdiet metus ultricies auctor. Curabitur faucibus odio in risus finibus elementum. Vivamus fringilla commodo ligula nec.';

const OffersPage = () => {
    if (!isBrowser) {
        return null;
    }

    return (
        <>
            <Welcome welcomedescription={welcomedescription} />
            <AboutMe />
            <Offers />
        </>
    );
};

export const Head = () => (
    <SEO
        title="Oferta - Zachwyć swoich gości profesjonalną usługą barmańską! - Ossolinsky.pl"
        description={welcomedescription}
        slug="/oferta"
    />
);

export default OffersPage;
