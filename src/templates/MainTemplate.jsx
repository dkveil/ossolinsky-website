import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';
import { Header } from 'components/Header/';
import { Footer } from 'components/Footer';

export const MainTemplate = ({ children }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <main id="main">{children}</main>
                <Footer />
            </ThemeProvider>
        </>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};
