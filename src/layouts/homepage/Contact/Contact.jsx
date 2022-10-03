import React from 'react';
import { Wrapper, ImageWrapper } from './Contact.styles';
import { Container } from 'styles/Container';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Heading } from 'components/Heading';
import { SectionParagraph } from 'components/SectionParagraph';
import { ContactForm } from 'components/ContactForm';

export const Contact = () => {
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
                <Heading
                    variant="h2"
                    color="black"
                    margin="0 0 2rem"
                    overlay
                    overlayColor="gray"
                    overlayPosition={{
                        top: '-1.3rem',
                        left: '-1rem',
                    }}
                    overlaySize={{
                        width: '16rem',
                        height: '5rem',
                    }}
                >
                    Pozwolisz mi <br />
                    sprawić, by Twoja impreza była <b>niezapomniana?</b>
                </Heading>
                <SectionParagraph margin="0 0 5rem">
                    Jeśli Twoja odpowiedź brzmi <b>TAK</b>, napisz do mnie!
                </SectionParagraph>
                <ContactForm />
            </Container>
        </Wrapper>
    );
};

const query = graphql`
    query {
        contactimage: file(relativePath: { eq: "homepage/14_contact.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
    }
`;
