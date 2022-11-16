import React from 'react';
import { Wrapper, ContentWrapper, VideoWrapper, HeroParagraph, StyledArrowIcon, StyledDesktopIcon } from './Hero.styles';
import { Heading } from 'components/Heading';
import { Container } from 'styles/Container';
import { Button } from 'components/Button';
import HeroVideo from 'videos/homepage/01_hero.mp4';
import { useWindowDimensions } from 'hooks/useWindowDimensions.hook';
import media from 'utils/media';
import { useTheme } from 'styled-components';
import { isDesktop } from 'utils/isDesktop';
import { isBrowser } from 'utils/isBrowser';

export const Hero = () => {
    if (!isBrowser) {
        return null;
    }

    const { width: windowWidth } = useWindowDimensions();
    const theme = useTheme();
    const containerRef = React.useRef(null);
    const videoRef = React.useRef(null);
    const [blackPartHeading, setBlackPartHeading] = React.useState('100%');

    const isDesktopChecker = isDesktop();

    React.useLayoutEffect(() => {
        const handleHeadingBlackPart = () => {
            if (isDesktopChecker) {
                const margin = (window.innerWidth - containerRef.current.clientWidth) / 2;
                setBlackPartHeading(`${window.innerWidth - margin - videoRef.current.clientWidth - 7}px`);
            }
        };

        handleHeadingBlackPart();

        window.addEventListener('resize', handleHeadingBlackPart);
        return () => window.removeEventListener('resize', handleHeadingBlackPart);
    }, [isDesktopChecker]);

    const handleClick = () => {
        const headerHeight = theme.height.mobileHeader.match(/\d+/)[0];
        window.scrollTo({
            top: document.getElementById('welcome-section').offsetTop - Number(headerHeight),
            behavior: 'smooth',
        });
    };

    const heroHeadingContent = () => {
        if (windowWidth >= media.DESKTOP) {
            return (
                <>
                    <b>Zachwyć</b> swoich gości <br />
                    <b>profesjonalną </b> usługą barmańską!
                </>
            );
        }
        if (windowWidth >= media.TABLET) {
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
                        path="/oferta"
                        boxOverlay={windowWidth > media.DESKTOP ? 'bottom-left' : null}
                        boxOverlayColor="white"
                    >
                        Sprawdź ofertę
                    </Button>
                    {isDesktop() ? <StyledDesktopIcon onClick={handleClick} /> : <StyledArrowIcon onClick={handleClick} />}
                </ContentWrapper>
            </Container>
            <VideoWrapper ref={videoRef} id="hero-video">
                <video src={HeroVideo} autoPlay={true} loop={true} muted></video>
            </VideoWrapper>
        </Wrapper>
    );
};
