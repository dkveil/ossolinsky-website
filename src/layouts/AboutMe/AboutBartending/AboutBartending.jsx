import React from 'react';
import { Wrapper, ContentWrapper, ImageWrapper } from './AboutBartending.styles';
import { Container } from 'styles/Container';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Heading } from 'components/Heading';
import { SectionParagraph } from 'components/SectionParagraph';
import { Button } from 'components/Button';

export const AboutBartending = () => {
    const data = useStaticQuery(query);

    return (
        <Wrapper>
            <Container>
                <ImageWrapper>
                    <GatsbyImage
                        image={data.contactimage.childImageSharp.gatsbyImageData}
                        objectFit="cover"
                        style={{ width: '100%', height: '100%' }}
                        imgStyle={{ objectFit: 'cover' }}
                        alt="contact-image"
                    />
                </ImageWrapper>
                <ContentWrapper>
                    <Heading
                        variant="h2"
                        color="black"
                        margin="0 0 3rem"
                        overlay
                        overlayColor="white"
                        overlayPosition={{
                            top: '-.6rem',
                            left: '-1rem',
                        }}
                        overlaySize={{
                            width: '9.2rem',
                            height: '4rem',
                        }}
                    >
                        Swoją <br />
                        przygodę z barmaństwem...
                    </Heading>
                    <SectionParagraph margin="0 0 6rem">
                        zacząłem lata temu, kiedy robiłem cocktaile alkoholowe hobbistycznie zachwycając rodzinę i znajomych. Nabierałem
                        doświadczenia sprawiając, że każdy drink był coraz to lepszy. Wraz z ukończeniem pełnoletności, natychmiast udałem,
                        się do Krakowskiej Szkoły Barmańskiej, gdzie po ukończeniu kursu uzyskałem kwalifikacje Barmana. Zauważyłem, że to
                        początkowe hobby, może stać się moim sposobem na zarobek i tak się stało. Niemal od 3 lat pracuję jako barman,
                        zaczynając na krótki czas w krakowskim pubie, natomiast niedługo później moje ścieżki powędrowały na wesela i
                        różnego rodzaju imprezy okolicznościowe.
                    </SectionParagraph>
                    <Button variant="outlined" isLink path="/kontakt" boxOverlay="bottom-left">
                        Kontakt
                    </Button>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

const query = graphql`
    query {
        contactimage: file(relativePath: { eq: "homepage/15_contact.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
    }
`;
