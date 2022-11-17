import React from 'react';
import { Welcome, MoreInformations, Drinks, Contact } from '../layouts/Offerpage';
import { isBrowser } from 'utils/isBrowser';

const OfferPage = (data) => {
    if (!isBrowser) {
        return null;
    }

    const { title, description, image, moreInformations, secondimage, aboutdrinks, drinks, phonenumber, email } = data.pageContext;

    return (
        <>
            <Welcome title={title} description={description} image={image} />
            <MoreInformations moreInformations={moreInformations} image={secondimage} />
            <Drinks about={aboutdrinks} drinks={drinks} />
            <Contact phonenumber={phonenumber} email={email} />
        </>
    );
};

export default OfferPage;
