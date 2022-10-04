import React from 'react';
import { Wrapper, ContentWrapper, VideoWrapper, HeroParagraph, StyledArrowIcon } from './Hero.styles';
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

    const containerRef = React.useRef(null);
    const videoRef = React.useRef(null);
    const [blackPartHeading, setBlackPartHeading] = React.useState('100%');

    React.useLayoutEffect(() => {
        const handleHeadingBlackPart = () => {
            if (windowWidth > media.DESKTOP) {
                const margin = (window.innerWidth - containerRef.current.clientWidth) / 2;
                setBlackPartHeading(`${window.innerWidth - margin - videoRef.current.clientWidth - 7}px`);
            }
        };

        handleHeadingBlackPart();

        window.addEventListener('resize', handleHeadingBlackPart);
        return () => window.removeEventListener('resize', handleHeadingBlackPart);
    }, []);

    const handleClick = () => {
        const headerHeight = theme.height.mobileHeader.match(/\d+/)[0];
        window.scrollTo({
            top: document.getElementById('welcome-section').offsetTop - Number(headerHeight),
            behavior: 'smooth',
        });
    };

    const heroHeadingContent = () => {
        if (windowWidth > media.DESKTOP) {
            return (
                <>
                    <b>Zachwyć</b> swoich gości <br />
                    <b>profesjonalną </b> usługą barmańską!
                    <span></span>
                </>
            );
        }
        if (windowWidth > media.TABLET) {
            return (
                <>
                    <b>Zachwyć</b> <br />
                    swoich gości <b>profesjonalną </b>
                    <br /> usługą barmańską!
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
                <ContentWrapper ref={containerRef}>
                    <Heading variant="h1" margin="0 0 2rem" color="white" blackPartHeading={blackPartHeading}>
                        {heroHeadingContent()}
                    </Heading>
                    <HeroParagraph>
                        Każdy drink jaki wykonam dla Ciebie i Twoich gości, będzie niezapomnianym wrażeniem smakowym!
                    </HeroParagraph>
                    <Button
                        variant={windowWidth > media.DESKTOP ? 'contained' : 'contained-outlined'}
                        isLink
                        path="/"
                        boxOverlay={windowWidth > media.DESKTOP ? 'bottom-left' : null}
                        boxOverlayColor="white"
                    >
                        Sprawdź ofertę
                    </Button>
                    <StyledArrowIcon onClick={handleClick} />
                </ContentWrapper>
            </Container>
            <VideoWrapper ref={videoRef}>
                <video src={HeroVideo} autoPlay={true} loop={true} muted></video>
            </VideoWrapper>
        </Wrapper>
    );
};
