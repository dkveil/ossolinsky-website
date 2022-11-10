import React from 'react';
import { Wrapper, ContentContainer, ImageWrapper, ContentWrapper, Autograph } from './Welcome.styles';
import { Container } from 'styles/Container';
import { useStaticQuery, graphql } from 'gatsby';
import { Heading } from 'components/Heading';
import { SectionParagraph } from 'components/SectionParagraph';
import { Button } from 'components/Button';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { isBrowser } from 'utils/isBrowser';
import { isDesktop } from 'utils/isDesktop';
import { useWindowDimensions } from 'hooks/useWindowDimensions.hook';
import media from 'utils/media';
import { navItems } from 'helpers/navigationItems';

export const Welcome = () => {
    if (!isBrowser) {
        return null;
    }

    const welcomeLink = navItems.find((item) => item.name === 'O mnie');

    const data = useStaticQuery(query);
    const { width: windowWidth } = useWindowDimensions();
    const welcomeimage = getImage(data.welcomeimage.childImageSharp.gatsbyImageData);

    const isTablet = windowWidth >= media.TABLET && windowWidth < media.DESKTOP;
    const isMobile = windowWidth < media.TABLET;

    return (
        <Wrapper id="welcome-section">
            <Container>
                <ContentContainer>
                    <ImageWrapper>
                        <GatsbyImage
                            image={welcomeimage}
                            objectFit="cover"
                            style={{ width: 'inherit', height: 'inherit' }}
                            imgStyle={{ objectFit: 'cover' }}
                            alt="Welcome image"
                        />
                    </ImageWrapper>
                    <ContentWrapper>
                        <Heading
                            variant="h2"
                            color="black"
                            margin={isMobile ? '5rem 0 4rem' : isTablet ? '0 0 4rem' : '5rem 0 4rem'}
                            overlay
                            overlayColor="white"
                            overlayPosition={{
                                top: '-.8rem',
                                left: '-1.1rem',
                            }}
                            overlaySize={{
                                width: '13rem',
                                height: '4.2rem',
                            }}
                        >
                            <b>Ossolinsky... </b>
                            <br />i już wiesz jakiego barmana wybrać na swoją imprezę!
                        </Heading>
                        <SectionParagraph margin="0 0 5rem">
                            Barmaństwem zajmuję się nie od dziś i pokażę Ci jakie urozmaicenie wprowadza barman na różnego rodzaju
                            imprezach! Moją przygodę z barmaństwem zacząłem lata temu, a hobbistyczne robienie cocktacili alkoholowych dla
                            rodziny i znajomych szybko przerodziło się w pasję. Dzięki temu, przez co udało mi się przebrnąć, zrobię
                            wszystko co w mojej mocy, żeby każdy wyszedł z Twojej imprezy zadowolony!
                        </SectionParagraph>
                        <Button variant="outlined" isLink path={welcomeLink.path} boxOverlay="bottom-left">
                            o mnie
                        </Button>
                        {isDesktop() && <Autograph>Mikołaj Ossoliński</Autograph>}
                    </ContentWrapper>
                </ContentContainer>
            </Container>
        </Wrapper>
    );
};

const query = graphql`
    query {
        welcomeimage: file(relativePath: { eq: "homepage/02_welcome.jpg" }) {
            childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
            }
        }
    }
`;
