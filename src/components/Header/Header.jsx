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
} from './Header.styles';
import { useTheme } from 'styled-components';
import { NavCart } from '../NavCart';
import { useWindowScrollY } from 'hooks/useWindowScrollY.hook';

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
                bgcolor={
                    isActive && backgroundColor !== theme.color.white
                        ? 'transparent'
                        : backgroundColor
                }
                id="main-header"
            >
                <Container>
                    <ContentWrapper>
                        <StyledBurger
                            color={isActive ? theme.color.black : itemsColor}
                            isActive={isActive}
                            onClick={toggleMenu}
                        >
                            <div />
                        </StyledBurger>
                        <StyledLogoIcon
                            width="9rem"
                            color={isActive ? theme.color.black : itemsColor}
                            isActive={isActive}
                        >
                            <Link to="/">
                                <Logo />
                            </Link>
                        </StyledLogoIcon>
                        <Box />
                    </ContentWrapper>
                </Container>
            </Wrapper>
            <NavCart isActive={isActive} toggleMenu={toggleMenu} />
        </>
    );
};
