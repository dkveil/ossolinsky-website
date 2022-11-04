import React from 'react';
import { Wrapper, ImageWrapper, ContentWrapper } from './Welcome.styles';
import { Container } from 'styles/Container';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Heading } from 'components/Heading';
import { SectionParagraph } from 'components/SectionParagraph';

export const Welcome = () => {
    const data = useStaticQuery(query);

    return (
        <Wrapper>
            <ImageWrapper>
                <GatsbyImage
                    image={data.contactimage.childImageSharp.gatsbyImageData}
                    objectFit="cover"
                    style={{ width: '100%', height: '100%' }}
                    imgStyle={{ objectFit: 'cover' }}
                    alt="contact-image"
                />
            </ImageWrapper>
            <Container>
                <ContentWrapper>
                    <Heading
                        variant="h2"
                        color="black"
                        margin="0 0 3rem"
                        overlay
                        overlayColor="gray"
                        overlayPosition={{
                            top: '-.6rem',
                            left: '-1rem',
                        }}
                        overlaySize={{
                            width: '11rem',
                            height: '4rem',
                        }}
                    >
                        Poznajmy się
                    </Heading>
                    <SectionParagraph>
                        Nazywam się Mikołaj Ossoliński. Mam 21 lat i studiuje na krakowskiej uczelni. Zawsze chciałem otworzyć własną
                        działalność, żeby być niezależnym. Każdy mówił: „znajdź sobie pracę do której będziesz lubił chodzić, wtedy nie
                        spędzisz ani minuty w pracy”. Skoro znajdujesz się na tej stronie udało mi się tego dokonać.
                    </SectionParagraph>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

const query = graphql`
    query {
        contactimage: file(relativePath: { eq: "homepage/02_welcome.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
    }
`;
