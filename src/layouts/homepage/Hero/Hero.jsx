import React from 'react';
import {
    Wrapper,
    ContentWrapper,
    VideoWrapper,
    HeroHeading,
    HeroParagraph,
    StyledArrowIcon,
} from './Hero.styles';
import { Container } from 'styles/Container';
import { Button } from 'components/Button';
import HeroVideo from 'videos/homepage/01_hero.mp4';
import { useWindowDimensions } from 'hooks/useWindowDimensions.hook';
import media from 'utils/media';

export const Hero = () => {
    const { width: windowWidth } = useWindowDimensions();

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
                    <HeroHeading>{h1Content()}</HeroHeading>
                    <HeroParagraph>
                        Każdy drink jaki wykonam dla Ciebie i Twoich gości,
                        będzie niezapomnianym wrażeniem smakowym!
                    </HeroParagraph>
                    <Button variant="contained-outlined" isLink path="/">
                        Sprawdź ofertę
                    </Button>
                    <StyledArrowIcon />
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
