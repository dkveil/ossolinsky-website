import React from 'react';
import { Wrapper, ContactDetails, CopyrightDetails } from './Footer.styles';
import { StyledIcon } from 'components/StyledIcon';
import { Link } from 'gatsby';
import Logo from 'assets/icons/logo.svg';

export const Footer = () => {
    return (
        <Wrapper>
            <StyledIcon color={({ theme }) => theme.color.black} width="90px">
                <Link to="/">
                    <Logo />
                </Link>
            </StyledIcon>
            <ContactDetails>
                <b>Kraków/Małopolska</b>
                <br />
                (123)456-7890
                <br />
                kontakt@ossolinsky.pl
            </ContactDetails>
            <CopyrightDetails>
                @2022 Ossolinsky
                <br />
                made by Damian Kądziela
            </CopyrightDetails>
        </Wrapper>
    );
};
