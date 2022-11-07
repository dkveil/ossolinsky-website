import React from 'react';
import { Wrapper, ImageWrapper, ContentWrapper, ContentContainer } from './Welcome.styles';
import { Container } from 'styles/Container';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Heading } from 'components/Heading';
import { SectionParagraph } from 'components/SectionParagraph';
import { isDesktopAndTablet } from 'utils/isDesktopAndTablet';
import { Button } from 'components/Button';
import { isDesktop } from 'utils/isDesktop';
import parse from 'html-react-parser';

//TODO: Add resolvers

export const Welcome = () => {
    const { embeddedwelcomeimage, welcomecontent, dynamicwelcomeimage } = useStaticQuery(query);

    const welcomeimage = getImage(
        dynamicwelcomeimage?.image.gatsbyImageData && dynamicwelcomeimage?.useThis
            ? dynamicwelcomeimage?.image.gatsbyImageData
            : embeddedwelcomeimage.childImageSharp.gatsbyImageData
    );

    const embeddedText = `Nazywam się Mikołaj Ossoliński. Mam 21 lat i studiuje na krakowskiej uczelni. Zawsze chciałem otworzyć własną
                            działalność, żeby być niezależnym. Każdy mówił: „znajdź sobie pracę do której będziesz lubił chodzić, wtedy nie
                            spędzisz ani minuty w pracy”. Skoro znajdujesz się na tej stronie udało mi się tego dokonać.`;

    return (
        <Wrapper>
            {!isDesktopAndTablet() && (
                <ImageWrapper>
                    <GatsbyImage
                        image={welcomeimage}
                        objectFit="cover"
                        style={{ width: 'inherit', height: 'inherit' }}
                        imgStyle={{ objectFit: 'cover', width: 'inherit', height: 'inherit' }}
                        alt="Welcome image"
                    />
                </ImageWrapper>
            )}
            <Container>
                <ContentContainer>
                    {isDesktopAndTablet() && (
                        <ImageWrapper>
                            <GatsbyImage
                                image={welcomeimage}
                                objectFit="cover"
                                style={{ width: '100%', height: '100%' }}
                                imgStyle={{ objectFit: 'cover' }}
                                alt="Welcome image"
                            />
                        </ImageWrapper>
                    )}
                    <ContentWrapper>
                        <Heading
                            variant="h2"
                            color="black"
                            margin="0 0 3rem"
                            overlay
                            overlayColor="gray"
                            overlayPosition={
                                isDesktop()
                                    ? {
                                          top: '-.8rem',
                                          left: '-2rem',
                                      }
                                    : {
                                          top: '-.6rem',
                                          left: '-1rem',
                                      }
                            }
                            overlaySize={
                                isDesktop()
                                    ? {
                                          width: '21rem',
                                          height: '6rem',
                                      }
                                    : {
                                          width: '11rem',
                                          height: '4rem',
                                      }
                            }
                        >
                            Poznajmy się
                        </Heading>
                        <SectionParagraph margin="0 0 6rem">
                            {welcomecontent?.content?.content && welcomecontent?.toUseThis
                                ? parse(welcomecontent.content.content)
                                : embeddedText}
                        </SectionParagraph>
                        <Button variant="text" onClickHandler={() => console.log('test')}>
                            Czytaj dalej
                        </Button>
                    </ContentWrapper>
                </ContentContainer>
            </Container>
        </Wrapper>
    );
};

const query = graphql`
    query {
        embeddedwelcomeimage: file(relativePath: { eq: "homepage/02_welcome.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
    }
    welcomecontent: contentfulOMnieTresciNaPodstronie(contentfulid: { eq: "Poznaj mnie - treść" }) {
        content {
            content
        }
        toUseThis
    }
`;
