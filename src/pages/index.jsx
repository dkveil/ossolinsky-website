import React from 'react';
import { Hero, Welcome, Oferts, Testimonial, Blog, Contact, Video } from 'layouts/homepage';
import { isDesktop } from 'utils/isDesktop';
import { SEO } from 'components/SEO';
import { useFooterThemeContext } from 'context/footerThemeContext';
import { useTheme } from 'styled-components';

const IndexPage = () => {
    const { setMobileBackgroundColor, setDesktopBackgroundColor } = useFooterThemeContext();
    const theme = useTheme();

    React.useEffect(() => {
        setMobileBackgroundColor(theme.color.white);
        setDesktopBackgroundColor(theme.color.gray);
    }, []);

    return (
        <>
            <Hero />
            <Welcome />
            <Oferts />
            {typeof window !== 'undefined' && isDesktop() ? <Video /> : null}
            <Testimonial />
            <Blog />
            <Contact />
        </>
    );
};

export default IndexPage;

export const Head = () => (
    <SEO
        title="Zachwyć swoich gości profesjonalną usługą barmańską! - Ossolinsky.pl"
        description="Każdy drink jaki wykonam dla Ciebie i Twoich gości, będzie niezapomnianym wrażeniem smakowym! Barmaństwem zajmuję się nie od dziś i pokażę Ci jakie urozmaicenie wprowadza barman na różnego rodzaju imprezach! Moją przygodę za barem zacząłem lata temu, a hobbistyczne robienie cocktacili alkoholowych dla rodziny i znajomych szybko przerodziło się w pasję. Dzięki temu, przez co udało mi się przebrnąć, zrobię wszystko co w mojej mocy, żeby każdy wyszedł z Twojej imprezy zadowolony!"
    />
);
