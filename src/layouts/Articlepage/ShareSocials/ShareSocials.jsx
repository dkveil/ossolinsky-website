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
import { useLocation } from '@reach/router';
import { PropTypes } from 'prop-types';
import {
    FacebookMessengerShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    TwitterShareButton,
} from 'react-share';

export const ShareSocials = ({ media }) => {
    const location = useLocation();
    const theme = useTheme();

    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <hr />
                    <SocialsWrapper>
                        <h5>Podoba Ci się artykuł? Udostępnij znajomym!</h5>
                        <div>
                            <FacebookShareButton url={location.href}>
                                <StyledIcon height="24px" width="24px" color={theme.color.black}>
                                    <FacebookIcon />
                                </StyledIcon>
                            </FacebookShareButton>
                            <LinkedinShareButton url={location.href}>
                                <StyledIcon height="24px" width="24px" color={theme.color.black}>
                                    <LinkedinIcon />
                                </StyledIcon>
                            </LinkedinShareButton>
                            <FacebookMessengerShareButton url={location.href}>
                                <StyledIcon height="24px" width="24px" color={theme.color.black}>
                                    <MessengerIcon />
                                </StyledIcon>
                            </FacebookMessengerShareButton>
                            <TwitterShareButton url={location.href}>
                                <StyledIcon height="24px" width="24px" color={theme.color.black}>
                                    <TwitterIcon />
                                </StyledIcon>
                            </TwitterShareButton>
                            <PinterestShareButton url={location.href} media={media}>
                                <StyledIcon height="24px" width="24px" color={theme.color.black}>
                                    <PinterestIcon />
                                </StyledIcon>
                            </PinterestShareButton>
                            <StyledIcon
                                height="24px"
                                width="24px"
                                color={theme.color.black}
                                onClick={() => navigator.clipboard.writeText(location.pathname)}
                            >
                                <CopyLinkIcon />
                            </StyledIcon>
                        </div>
                    </SocialsWrapper>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

ShareSocials.propTypes = {
    media: PropTypes.string.isRequired,
};
