import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import { Header } from 'components/Header/';
import { Footer } from 'components/Footer';
import { CookieNotice } from 'components/CookieNotice/CookieNotice';
import Cookies from 'universal-cookie';
import { FooterThemeProvider } from 'context/footerThemeContext';

export const MainTemplate = ({ children }) => {
    const [cookieNoticeIsOpen, setCookieNoticeIsOpen] = React.useState(false);
    const cookies = new Cookies();

    React.useEffect(() => {
        if (!cookies.get('registered')) {
            setCookieNoticeIsOpen(true);
        }
    }, []);

    return (
        <>
            <FooterThemeProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Header />
                    <main id="main">{children}</main>
                    {cookieNoticeIsOpen ? <CookieNotice closeCookieNotice={() => setCookieNoticeIsOpen(false)} /> : null}
                    <Footer />
                </ThemeProvider>
            </FooterThemeProvider>
        </>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};
