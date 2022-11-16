import React from 'react';
import { Wrapper, ContactDetails, CopyrightDetails, IconsWrapper } from './Footer.styles';
import { StyledIcon } from 'components/StyledIcon';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Logo from 'assets/icons/logo.svg';
import { isDesktop } from 'utils/isDesktop';
import { socialmedia } from 'helpers/socialmedia';
import { isBrowser } from 'utils/isBrowser';
import { useLocation } from '@reach/router';
import { useTheme } from 'styled-components';
import { pathsWhereFooterIsWhiteMobile, pathsWhereFooterIsWhiteDesktop } from 'helpers/pathsWhereFooterIsWhite';
import { pathsWhereFooterIsGrayMobile, pathsWhereFooterIsGrayDesktop } from 'helpers/pathsWhereFooterIsGray';

export const Footer = () => {
    if (!isBrowser) {
        return null;
    }

    const theme = useTheme();
    const location = useLocation();
    const [mobileBackgroundColor, setMobileBackgroundColor] = React.useState(theme.color.white);
    const [desktopBackgroundColor, setDesktopBackgroundColor] = React.useState(theme.color.white);

    const { socialmediaitems, phonenumber, email } = useStaticQuery(query);

    React.useEffect(() => {
        if (
            pathsWhereFooterIsWhiteDesktop.find((path) =>
                path === '' || path === '/' ? path === location.pathname : location.pathname.includes(path)
            )
        ) {
            setDesktopBackgroundColor(theme.color.white);
        }
        if (
            pathsWhereFooterIsWhiteMobile.find((path) =>
                path === '' || path === '/' ? path === location.pathname : location.pathname.includes(path)
            )
        ) {
            setMobileBackgroundColor(theme.color.white);
        }
        if (
            pathsWhereFooterIsGrayDesktop.find((path) =>
                path === '' || path === '/' ? path === location.pathname : location.pathname.includes(path)
            )
        ) {
            setDesktopBackgroundColor(theme.color.gray);
        }
        if (
            pathsWhereFooterIsGrayMobile.find((path) =>
                path === '' || path === '/' ? path === location.pathname : location.pathname.includes(path)
            )
        ) {
            setMobileBackgroundColor(theme.color.gray);
        }
    }, [location.pathname]);

    return (
        <Wrapper mobileBackgroundColor={mobileBackgroundColor} desktopBackgroundColor={desktopBackgroundColor}>
            <StyledIcon color={({ theme }) => theme.color.black} width={isDesktop() ? '120px' : '90px'}>
                <Link to="/">
                    <Logo />
                </Link>
            </StyledIcon>
            <ContactDetails>
                <b>Kraków/Małopolska</b>
                <br />
                {phonenumber ? phonenumber.content : null}
                <br />
                {email ? email.content : null}
            </ContactDetails>
            {isDesktop() && (
                <IconsWrapper>
                    {socialmediaitems?.edges.map((item) => {
                        const socialItem = item.node;
                        const Social = socialmedia.find((social) => social.id === socialItem.name);

                        return (
                            <StyledIcon key={socialItem.name} width="24px" color={({ theme }) => theme.color.black}>
                                <a href={socialItem.link} target="_blank" rel="noreferrer">
                                    {Social.icon}
                                </a>
                            </StyledIcon>
                        );
                    })}
                </IconsWrapper>
            )}
            <CopyrightDetails>
                @2022 Ossolinsky
                <br />
                made by Damian Kądziela
            </CopyrightDetails>
        </Wrapper>
    );
};

const query = graphql`
    query {
        socialmediaitems: allContentfulSocialMedia(sort: { fields: priority, order: ASC }) {
            edges {
                node {
                    name
                    link
                    priority
                }
            }
        }
        phonenumber: contentfulDaneKontaktowe(contactid: { eq: "Numer telefonu" }) {
            content
        }
        email: contentfulDaneKontaktowe(contactid: { eq: "Adres e-mail" }) {
            content
        }
    }
`;
