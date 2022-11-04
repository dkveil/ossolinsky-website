import React from 'react';
import Logo from 'icons/logo.svg';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Container } from '../../styles/Container';
import {
    Wrapper,
    ContentWrapper,
    Box,
    StyledBurger,
    StyledLogoIcon,
    MenuWrapper,
    NavWrapper,
    IconsWrapper,
    StyledListItem,
} from './Header.styles';
import { useTheme } from 'styled-components';
import { NavCart } from '../NavCart';
import { useWindowScrollY } from 'hooks/useWindowScrollY.hook';
import { isDesktop } from 'utils/isDesktop';
import { StyledSocialIcon } from '../NavCart/NavCart.styles';
import { socialmedia } from 'helpers/socialmedia';
import { navItems } from 'helpers/navigationItems';
import { isBrowser } from 'utils/isBrowser';
import { useLocation } from '@reach/router';

export const Header = () => {
    if (!isBrowser) {
        return null;
    }

    const theme = useTheme();

    const scrollY = useWindowScrollY();
    const { socials } = useStaticQuery(query);
    const location = useLocation();

    const [isActive, setIsActive] = React.useState(false);
    const [itemsColor, setItemsColor] = React.useState(location.pathname === '/' ? theme.color.white : theme.color.black);
    const [backgroundColor, setBackgroundColor] = React.useState('transparent');

    const toggleMenu = () => setIsActive((prev) => !prev);

    React.useEffect(() => {
        if (scrollY > 0.1 * window.innerHeight) {
            setBackgroundColor(theme.color.white);
            setItemsColor(theme.color.black);
        } else {
            setBackgroundColor('transparent');
            if (location.pathname === '/') {
                setItemsColor(theme.color.white);
            } else {
                setItemsColor(theme.color.black);
            }
        }
    }, [scrollY, location.pathname]);

    return (
        <>
            <Wrapper
                isActive={isActive}
                bgcolor={isActive && backgroundColor !== theme.color.white ? 'transparent' : backgroundColor}
                id="main-header"
            >
                <Container>
                    <ContentWrapper>
                        {isDesktop() ? null : (
                            <StyledBurger color={isActive ? theme.color.black : itemsColor} isActive={isActive} onClick={toggleMenu}>
                                <div />
                            </StyledBurger>
                        )}
                        <StyledLogoIcon width="9rem" color={isDesktop() ? theme.color.black : isActive ? theme.color.black : itemsColor}>
                            <Link to="/">
                                <Logo />
                            </Link>
                        </StyledLogoIcon>
                        {isDesktop() ? (
                            <MenuWrapper>
                                <NavWrapper>
                                    <ul>
                                        {navItems.map((item) => (
                                            <StyledListItem key={item.name} color={itemsColor}>
                                                <Link to={item.path}>{item.name}</Link>
                                            </StyledListItem>
                                        ))}
                                    </ul>
                                </NavWrapper>
                                <IconsWrapper>
                                    {socials?.edges.map((item) => {
                                        const socialItem = item.node;
                                        const Social = socialmedia.find((social) => social.id === socialItem.name);

                                        return (
                                            <StyledSocialIcon key={socialItem.name} color={itemsColor} width="24px">
                                                <a href={socialItem.link} target="_blank" rel="noreferrer">
                                                    {Social.icon}
                                                </a>
                                            </StyledSocialIcon>
                                        );
                                    })}
                                </IconsWrapper>
                            </MenuWrapper>
                        ) : (
                            <Box />
                        )}
                    </ContentWrapper>
                </Container>
            </Wrapper>
            {!isDesktop() && <NavCart isActive={isActive} toggleMenu={toggleMenu} />}
        </>
    );
};

const query = graphql`
    query {
        socials: allContentfulSocialMedia(sort: { fields: priority, order: ASC }) {
            edges {
                node {
                    name
                    link
                    priority
                }
            }
        }
    }
`;
