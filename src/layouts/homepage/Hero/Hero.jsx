import React from 'react';
import {
    Wrapper,
    ContentWrapper,
    VideoWrapper,
    HeroParagraph,
    StyledArrowIcon,
} from './Hero.styles';
import { Heading } from 'components/Heading';
import { Container } from 'styles/Container';
import { Button } from 'components/Button';
import HeroVideo from 'videos/homepage/01_hero.mp4';
import { useWindowDimensions } from 'hooks/useWindowDimensions.hook';
import media from 'utils/media';
import { useTheme } from 'styled-components';

export const Hero = () => {
    const { width: windowWidth } = useWindowDimensions();
    const theme = useTheme();

    const handleClick = () => {
        const headerHeight = theme.height.mobileHeader.match(/\d+/)[0];

        window.scrollTo({
            top:
                document.getElementById('welcome-section').offsetTop -
                Number(headerHeight),
            behavior: 'smooth',
        });
    };

    const h1Content = () => {
        if (windowWidth > media.TABLET) {
            return (
                <>
                    <b>Zachwyć</b>
                    <br />
                    swoich gości <b>profesjonalną</b> <br />
                    usługą barmańską!
                </>
            );
        }

        return (
            <>
                <b>Zachwyć</b>
                <br />
                swoich gości <b>profesjonalną</b> <br />
                usługą <br />
                barmańską!
            </>
        );
    };

    return (
        <Wrapper id="hero">
            <Container>
                <ContentWrapper>
                    <Heading variant="h1" margin="1rem 0" color="white">
                        {h1Content()}
                    </Heading>
                    <HeroParagraph>
                        Każdy drink jaki wykonam dla Ciebie i Twoich gości,
                        będzie niezapomnianym wrażeniem smakowym!
                    </HeroParagraph>
                    <Button variant="contained-outlined" isLink path="/">
                        Sprawdź ofertę
                    </Button>
                    <StyledArrowIcon onClick={handleClick} />
                </ContentWrapper>
            </Container>
            <VideoWrapper>
                <video
                    src={HeroVideo}
                    autoPlay={true}
                    loop={true}
                    muted
                ></video>
            </VideoWrapper>
        </Wrapper>
    );
};
