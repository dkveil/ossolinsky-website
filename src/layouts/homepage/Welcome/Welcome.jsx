import React from 'react';
import { Wrapper, ImageWrapper, ContentWrapper } from './Welcome.styles';
import { Container } from 'styles/Container';
import { useStaticQuery, graphql } from 'gatsby';
import { Heading } from 'components/Heading';
import { SectionParagraph } from 'components/SectionParagraph';
import { Button } from 'components/Button';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const Welcome = () => {
    const data = useStaticQuery(query);

    const welcomeimage = getImage(
        data.welcomeimage.childImageSharp.gatsbyImageData
    );

    return (
        <Wrapper id="welcome-section">
            <Container>
                <ContentWrapper>
                    <ImageWrapper>
                        <GatsbyImage
                            image={welcomeimage}
                            objectFit="cover"
                            style={{ width: '100%', height: '100%' }}
                            imgStyle={{ objectFit: 'cover' }}
                            alt="Welcome image"
                        />
                    </ImageWrapper>
                    <Heading
                        variant="h2"
                        color="black"
                        margin="5rem 0 4rem"
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
                        <br />i już wiesz jakiego barmana wybrać na swoją
                        imprezę!
                    </Heading>
                    <SectionParagraph margin="0 0 5rem">
                        Barmaństwem zajmuję się nie od dziś i pokażę Ci jakie
                        urozmaicenie wprowadza barman na różnego rodzaju
                        imprezach! Moją przygodę z barmaństwem zacząłem lata
                        temu, a hobbistyczne robienie cocktacili alkoholowych
                        dla rodziny i znajomych szybko przerodziło się w pasję.
                        Dzięki temu, przez co udało mi się przebrnąć, zrobię
                        wszystko co w mojej mocy, żeby każdy wyszedł z Twojej
                        imprezy zadowolony!
                    </SectionParagraph>
                    <Button
                        variant="outlined"
                        isLink
                        path="/"
                        boxOverlay="bottom-left"
                    >
                        o mnie
                    </Button>
                </ContentWrapper>
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
