import React from 'react';
import { Welcome, MoreInformations, Drinks, Contact } from '../layouts/Offerpage';
import { isBrowser } from 'utils/isBrowser';
import { SEO } from 'components/SEO/SEO';
import { useFooterThemeContext } from 'context/footerThemeContext';
import { useTheme } from 'styled-components';

const OfferPage = (data) => {
    if (!isBrowser) {
        return null;
    }

    const { setMobileBackgroundColor, setDesktopBackgroundColor } = useFooterThemeContext();
    const theme = useTheme();

    React.useEffect(() => {
        setMobileBackgroundColor(theme.color.gray);
        setDesktopBackgroundColor(theme.color.gray);
    }, []);

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

export const Head = (data) => {
    const { title, description, imageurl, slug } = data.pageContext;

    return (
        <SEO
            title={title + ' - Zachwyć swoich gości profesjonalną usługą barmańską! - Ossolinsky.pl'}
            description={description}
            image={imageurl}
            slug={`/oferta/${slug}`}
        />
    );
};

export default OfferPage;
