import React from 'react';
import { PropTypes } from 'prop-types';

const FooterThemeContext = React.createContext({});

export const useFooterThemeContext = () => React.useContext(FooterThemeContext);

export const FooterThemeProvider = ({ children }) => {
    const [mobileBackgroundColor, setMobileBackgroundColor] = React.useState(null);
    const [desktopBackgroundColor, setDesktopBackgroundColor] = React.useState(null);

    return (
        <FooterThemeContext.Provider
            value={{ mobileBackgroundColor, desktopBackgroundColor, setMobileBackgroundColor, setDesktopBackgroundColor }}
        >
            {children}
        </FooterThemeContext.Provider>
    );
};

FooterThemeProvider.propTypes = {
    children: PropTypes.node,
};
