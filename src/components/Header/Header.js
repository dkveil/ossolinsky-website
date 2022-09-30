import React from "react";
import Logo from 'assets/icons/gimp.svg'
import { StyledIcon } from "components/StyledIcon";
import { Link } from "gatsby";
import { Container } from "../../styles/Container";
import { Wrapper, ContentWrapper, Box, StyledBurger } from "./Header.styles";
import { useTheme } from "styled-components";

export const Header = () => {

    const theme = useTheme()

    const [isActive, setIsActive] = React.useState(false)
    const [itemsColor, setItemsColor] = React.useState(theme.color.white)
    const [backgroundColor, setBackgroundColor] = React.useState('gray')

    return (
        <Wrapper bgcolor={backgroundColor}>
            <Container>
                <ContentWrapper>
                    <StyledBurger color={isActive ? theme.color.black : itemsColor} isActive={isActive} onClick={() => setIsActive(prev => !prev)}>
                        <div />
                    </StyledBurger>
                    <StyledIcon width='9rem' color={itemsColor}>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </StyledIcon>
                    <Box />
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
}
