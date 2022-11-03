import React from 'react';
import { Wrapper, ImageWrapper, ContentWrapper } from './Contact.styles';
import { Container } from 'styles/Container';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Heading } from 'components/Heading';
import { SectionParagraph } from 'components/SectionParagraph';
import { ContactForm } from 'components/ContactForm';
import { isDesktop } from 'utils/isDesktop';
import { isBrowser } from 'utils/isBrowser';

export const Contact = () => {
    if (!isBrowser) {
        return null
    }

    const data = useStaticQuery(query);

    return (
        <Wrapper id="contact-section">
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
                        margin="0 0 2rem"
                        smallHeading
                        overlay
                        overlayColor={isDesktop() ? 'white' : 'gray'}
                        overlayPosition={
                            isDesktop()
                                ? {
                                      top: '-1.2rem',
                                      left: '-3rem',
                                  }
                                : {
                                      top: '-1.3rem',
                                      left: '-1rem',
                                  }
                        }
                        overlaySize={
                            isDesktop()
                                ? {
                                      width: '24rem',
                                      height: '6rem',
                                  }
                                : {
                                      width: '16rem',
                                      height: '5rem',
                                  }
                        }
                    >
                        Pozwolisz mi <br />
                        sprawić, by Twoja impreza była <b>niezapomniana?</b>
                    </Heading>
                    <SectionParagraph margin={isDesktop() ? '0 0 2.5rem' : '0 0 5rem'}>
                        Jeśli Twoja odpowiedź brzmi <b>TAK</b>, napisz do mnie!
                    </SectionParagraph>
                    <ContactForm />
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
