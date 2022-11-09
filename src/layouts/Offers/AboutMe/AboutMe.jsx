import React from 'react';
import { Wrapper, ContentWrapper, ContentContainer, ImageWrapper } from './AboutMe.styles';
import { Container } from 'styles/Container';
import { SectionParagraph } from 'components/SectionParagraph';
import { Heading } from 'components/Heading';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { isDesktopAndTablet } from 'utils/isDesktopAndTablet';
import parse from 'html-react-parser';

export const AboutMe = () => {
    const { embeddedimage } = useStaticQuery(query);

    return (
        <Wrapper>
            <Container>
                <ContentContainer>
                    {isDesktopAndTablet() && (
                        <ImageWrapper>
                            <GatsbyImage
                                image={embeddedimage.childImageSharp.gatsbyImageData}
                                objectFit="cover"
                                style={{ width: '100%', height: '100%' }}
                                imgStyle={{ objectFit: 'cover' }}
                                alt="Contact image"
                            />
                        </ImageWrapper>
                    )}
                    <ContentWrapper>
                        <Heading
                            variant="h2"
                            color="black"
                            margin="0 0 2rem"
                            overlay
                            overlayColor={isDesktopAndTablet() ? 'white' : 'gray'}
                            overlayPosition={
                                isDesktopAndTablet()
                                    ? {
                                          top: '-.6rem',
                                          left: '-2rem',
                                      }
                                    : {
                                          top: '-.2rem',
                                          left: '-1rem',
                                      }
                            }
                            overlaySize={
                                isDesktopAndTablet()
                                    ? {
                                          width: '21rem',
                                          height: '5.5rem',
                                      }
                                    : {
                                          width: '10rem',
                                          height: '4rem',
                                      }
                            }
                        >
                            {isDesktopAndTablet() ? 'Co mnie wyróżnia?' : parse('Co mnie <br />wyróżnia?')}
                        </Heading>
                        <SectionParagraph margin="0 0 5rem">
                            Jestem młodym barmanem z zapałem do pracy oraz nauki tego co daje mi realną frajdę. Nabyłem niemałe
                            doświadczenie od starszych barmanów, jednak w tym zawodzie nie liczy się tylko klasyczne podążanie za utartymi
                            drogami. Trzeba iść wraz z trendami wśród koktajli, sposobu ich wykonania i jakości pracy.
                        </SectionParagraph>
                        <Heading
                            variant="h2"
                            color="black"
                            margin="0 0 2rem"
                            overlay
                            overlayColor={isDesktopAndTablet() ? 'white' : 'gray'}
                            overlayPosition={
                                isDesktopAndTablet()
                                    ? {
                                          top: '-.6rem',
                                          left: '-1rem',
                                      }
                                    : {
                                          top: '-.2rem',
                                          left: '-1rem',
                                      }
                            }
                            overlaySize={
                                isDesktopAndTablet()
                                    ? {
                                          width: '18rem',
                                          height: '5.5rem',
                                      }
                                    : {
                                          width: '12rem',
                                          height: '4rem',
                                      }
                            }
                        >
                            Dlaczego ja?
                        </Heading>
                        <SectionParagraph>
                            Moją pracę cechuje profesjonalizm, rzetelność, świeże podejście i miłość do tego co robię. Coś co już jest
                            dobre, nie o znacza, że nie może być lepsze, dlatego starannie wykonuję swoją pracę i stale zarażam gości dobrym
                            humorem i uśmiechem.
                        </SectionParagraph>
                    </ContentWrapper>
                </ContentContainer>
            </Container>
        </Wrapper>
    );
};

const query = graphql`
    query {
        embeddedimage: file(relativePath: { eq: "homepage/02_welcome.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
    }
`;
