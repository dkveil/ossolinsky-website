import React from 'react';
import Logo from 'icons/logo.svg';
import { Link } from 'gatsby';
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
import { navItems, socialsItems } from '../NavCart/data';
import { StyledSocialIcon } from '../NavCart/NavCart.styles';

export const Header = () => {
    const theme = useTheme();

    const scrollY = useWindowScrollY();

    const [isActive, setIsActive] = React.useState(false);
    const [itemsColor, setItemsColor] = React.useState(theme.color.white);
    const [backgroundColor, setBackgroundColor] = React.useState('transparent');

    const toggleMenu = () => setIsActive((prev) => !prev);

    React.useEffect(() => {
        if (scrollY > 0.2 * window.innerHeight) {
            setBackgroundColor(theme.color.white);
            setItemsColor(theme.color.black);
        } else {
            setBackgroundColor('transparent');
            setItemsColor(theme.color.white);
        }
    }, [scrollY]);

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
                                    {socialsItems.map((item) => (
                                        <StyledSocialIcon key={item.name} color={itemsColor}>
                                            <a href={item.path} target="_blank" rel="noreferrer">
                                                {item.icon}
                                            </a>
                                        </StyledSocialIcon>
                                    ))}
                                </IconsWrapper>
                            </MenuWrapper>
                        ) : (
                            <Box />
                        )}
                    </ContentWrapper>
                </Container>
            </Wrapper>
            {isDesktop() ? null : <NavCart isActive={isActive} toggleMenu={toggleMenu} />}
        </>
    );
};
