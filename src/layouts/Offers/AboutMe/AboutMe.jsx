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
                            {isDesktopAndTablet() ? 'Co mnie wyr????nia?' : parse('Co mnie <br />wyr????nia?')}
                        </Heading>
                        <SectionParagraph margin="0 0 5rem">
                            Jestem m??odym barmanem z zapa??em do pracy oraz nauki tego co daje mi realn?? frajd??. Naby??em niema??e
                            do??wiadczenie od starszych barman??w, jednak w tym zawodzie nie liczy si?? tylko klasyczne pod????anie za utartymi
                            drogami. Trzeba i???? wraz z trendami w??r??d koktajli, sposobu ich wykonania i jako??ci pracy.
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
                            Moj?? prac?? cechuje profesjonalizm, rzetelno????, ??wie??e podej??cie i mi??o???? do tego co robi??. Co?? co ju?? jest
                            dobre, nie o znacza, ??e nie mo??e by?? lepsze, dlatego starannie wykonuj?? swoj?? prac?? i stale zara??am go??ci dobrym
                            humorem i u??miechem.
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
