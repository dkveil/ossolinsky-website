import React from 'react';
import { Wrapper, ContentWrapper, ImageWrapper } from './Welcome.styles';
import { Container } from 'styles/Container';
import { Heading } from 'components/Heading';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { SectionParagraph } from 'components/SectionParagraph';

export const Welcome = () => {
    const { embeddedwelcomeimage } = useStaticQuery(query);

    const welcomeimage = getImage(embeddedwelcomeimage.childImageSharp.gatsbyImageData);

    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <Heading
                        variant="subpage h1"
                        color="black"
                        margin="0 0 3rem"
                        overlay
                        overlayColor="gray"
                        overlayPosition={{
                            top: '-.2rem',
                            left: '-1rem',
                        }}
                        overlaySize={{
                            width: '10rem',
                            height: '4rem',
                        }}
                    >
                        Moja oferta
                    </Heading>
                    <SectionParagraph textAlign="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ante urna, eleifend ut nulla sagittis, sagittis dictum
                        est. Proin facilisis sem suscipit sapien eleifend, laoreet pulvinar nunc finibus. Sed luctus metus ex, quis
                        porttitor lectus eleifend id. Sed malesuada imperdiet metus ultricies auctor. Curabitur faucibus odio in risus
                        finibus elementum. Vivamus fringilla commodo ligula nec.
                    </SectionParagraph>
                </ContentWrapper>
            </Container>
            <ImageWrapper>
                <GatsbyImage
                    image={welcomeimage}
                    objectFit="cover"
                    style={{ width: '100%', height: '100%' }}
                    imgStyle={{ objectFit: 'cover' }}
                    alt="Welcome image"
                />
            </ImageWrapper>
        </Wrapper>
    );
};

const query = graphql`
    query {
        embeddedwelcomeimage: file(relativePath: { eq: "offers/01_offers.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
    }
`;
