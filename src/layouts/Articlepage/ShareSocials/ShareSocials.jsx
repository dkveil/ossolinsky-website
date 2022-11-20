import React from 'react';
import { Wrapper, ContentWrapper, SocialsWrapper } from './ShareSocials.styles';
import { Container } from 'styles/Container';
import FacebookIcon from 'assets/icons/facebook.svg';
import LinkedinIcon from 'assets/icons/linkedin.svg';
import MessengerIcon from 'assets/icons/messenger.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import PinterestIcon from 'assets/icons/pinterest.svg';
import GooglePlusIcon from 'assets/icons/google.svg';
import CopyLinkIcon from 'assets/icons/share.svg';
import { StyledIcon } from 'components/StyledIcon';
import { useTheme } from 'styled-components';

const socialshareitems = [
    {
        title: 'facebook',
        icon: <FacebookIcon />,
    },
    {
        title: 'linkedin',
        icon: <LinkedinIcon />,
    },
    {
        title: 'messenger',
        icon: <MessengerIcon />,
    },
    {
        title: 'twitter',
        icon: <TwitterIcon />,
    },
    {
        title: 'google plus',
        icon: <GooglePlusIcon />,
    },
    {
        title: 'pinterest',
        icon: <PinterestIcon />,
    },
    {
        title: 'copy link',
        icon: <CopyLinkIcon />,
    },
];

export const ShareSocials = () => {
    const theme = useTheme();

    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <hr />
                    <SocialsWrapper>
                        <h5>Podoba Ci się artykuł? Udostępnij znajomym!</h5>
                        <div>
                            {socialshareitems.map((social) => (
                                <StyledIcon key={social.title} height="24px" width="24px" color={theme.color.black}>
                                    {social.icon}
                                </StyledIcon>
                            ))}
                        </div>
                    </SocialsWrapper>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};
