import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyles';
import { theme } from 'styles/theme';

export const MainTemplate = ({ children }) => {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <main>{children}</main>
            </ThemeProvider>
        </React.Fragment>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};
