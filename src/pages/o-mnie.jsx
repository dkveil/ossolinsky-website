import React from 'react';
import { Welcome, AboutBartending, Testimonial } from 'layouts/AboutMe';
import { isDesktop } from 'utils/isDesktop';
import { isBrowser } from 'utils/isBrowser';
import { SEO } from 'components/SEO';
import { useFooterThemeContext } from 'context/footerThemeContext';
import { useTheme } from 'styled-components';

const AboutMePage = () => {
    if (!isBrowser) {
        return null;
    }

    const { setMobileBackgroundColor, setDesktopBackgroundColor } = useFooterThemeContext();
    const theme = useTheme();

    React.useEffect(() => {
        setMobileBackgroundColor(theme.color.white);
        setDesktopBackgroundColor(theme.color.white);
    }, []);

    return (
        <>
            <Welcome />
            <AboutBartending />
            {isDesktop() && <Testimonial />}
        </>
    );
};

export default AboutMePage;

export const Head = () => (
    <SEO
        title="O mnie - Usługi barmańskie na każdą okoliczność! - Ossolinsky.pl"
        description="Nazywam się Mikołaj Ossoliński. Mam 21 lat i studiuje na krakowskiej uczelni. Zawsze chciałem otworzyć własną działalność, żeby być niezależnym. Każdy mówił: „znajdź sobie pracę do której będziesz lubił chodzić, wtedy nie spędzisz ani minuty w pracy”. Skoro znajdujesz się na tej stronie udało mi się tego dokonać."
        slug="/omnie"
    />
);
