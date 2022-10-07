import React from 'react';
import { Wrapper, ContactDetails, CopyrightDetails, IconsWrapper } from './Footer.styles';
import { StyledIcon } from 'components/StyledIcon';
import { Link } from 'gatsby';
import Logo from 'assets/icons/logo.svg';
import { isDesktop } from 'utils/isDesktop';
import FacebookIcon from 'icons/facebook.svg';
import TiktokIcon from 'icons/tiktok.svg';

export const Footer = () => {
    return (
        <Wrapper>
            <StyledIcon color={({ theme }) => theme.color.black} width={isDesktop() ? '120px' : '90px'}>
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
            {isDesktop() && (
                <IconsWrapper>
                    <StyledIcon width="24px" color={({ theme }) => theme.color.black}>
                        <Link to="">
                            <FacebookIcon />
                        </Link>
                    </StyledIcon>
                    <StyledIcon width="24px" color={({ theme }) => theme.color.black}>
                        <Link to="">
                            <TiktokIcon />
                        </Link>
                    </StyledIcon>
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
