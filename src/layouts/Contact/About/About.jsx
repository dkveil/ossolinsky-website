import React from 'react';
import { ImageWrapper, Wrapper, ContentWrapper, ContactDetails, SocialMediaDetails } from './About.styles';
import { Container } from 'styles/Container';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Heading } from 'components/Heading/Heading';
import { SectionParagraph } from 'components/SectionParagraph/SectionParagraph';
import { isDesktopAndTablet } from 'utils/isDesktopAndTablet';
import { socialmedia } from 'helpers/socialmedia';
import { StyledIcon } from 'components/StyledIcon';
import { PropTypes } from 'prop-types';

export const About = ({ welcomedescription }) => {
    const { embeddedimage, phonenumber, email, socialmediaitems } = useStaticQuery(query);
    const image = getImage(embeddedimage.childImageSharp.gatsbyImageData);

    return (
        <Wrapper>
            <ImageWrapper>
                <GatsbyImage
                    image={image}
                    objectFit="cover"
                    style={{ width: '100%', height: '100%' }}
                    imgStyle={{ objectFit: 'cover' }}
                    alt="about-bartending-image"
                />
            </ImageWrapper>
            {isDesktopAndTablet() ? (
                <ContentWrapper>
                    <Heading
                        variant="subpage h1"
                        color="black"
                        overlay
                        overlayColor="gray"
                        overlayPosition={{
                            top: '-1.4rem',
                            left: '-2rem',
                        }}
                        overlaySize={{
                            width: '17rem',
                            height: '7rem',
                        }}
                    >
                        Kontakt
                    </Heading>
                    <SectionParagraph>{welcomedescription}</SectionParagraph>
                    <ContactDetails>
                        <span>mail: {email ? email.content : null}</span>
                        <span>tel. {phonenumber ? phonenumber.content : null}</span>
                    </ContactDetails>
                    <SocialMediaDetails>
                        <span>ŚLEDŹ RÓWNIEŻ MOJE SOCIAL MEDIA</span>
                        <div>
                            {socialmediaitems?.edges.map((item) => {
                                const socialItem = item.node;
                                const Social = socialmedia.find((social) => social.id === socialItem.name);

                                return (
                                    <StyledIcon key={socialItem.name} width="24px" color={({ theme }) => theme.color.black}>
                                        <a href={socialItem.link} target="_blank" rel="noreferrer">
                                            {Social.icon}
                                        </a>
                                    </StyledIcon>
                                );
                            })}
                        </div>
                    </SocialMediaDetails>
                </ContentWrapper>
            ) : (
                <Container>
                    <ContentWrapper>
                        <Heading
                            variant="subpage h1"
                            color="black"
                            overlay
                            overlayColor="gray"
                            overlayPosition={{
                                top: '-1rem',
                                left: '-.8rem',
                            }}
                            overlaySize={{
                                width: '11rem',
                                height: '5rem',
                            }}
                        >
                            Kontakt
                        </Heading>
                        <SectionParagraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet faucibus justo. Nullam a faucibus
                            nisi, et suscipit augue. Vivamus orci sem, luctus in consectetur auctor, elementum ac mauris.
                        </SectionParagraph>
                        <ContactDetails>
                            <span>mail: {email ? email.content : null}</span>
                            <span>tel. {phonenumber ? phonenumber.content : null}</span>
                        </ContactDetails>
                        <SocialMediaDetails>
                            <span>ŚLEDŹ RÓWNIEŻ MOJE SOCIAL MEDIA</span>
                            <div>
                                {socialmediaitems?.edges.map((item) => {
                                    const socialItem = item.node;
                                    const Social = socialmedia.find((social) => social.id === socialItem.name);

                                    return (
                                        <StyledIcon key={socialItem.name} width="24px" color={({ theme }) => theme.color.black}>
                                            <a href={socialItem.link} target="_blank" rel="noreferrer">
                                                {Social.icon}
                                            </a>
                                        </StyledIcon>
                                    );
                                })}
                            </div>
                        </SocialMediaDetails>
                    </ContentWrapper>
                </Container>
            )}
        </Wrapper>
    );
};

const query = graphql`
    query {
        embeddedimage: file(relativePath: { eq: "homepage/15_contact.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        phonenumber: contentfulDaneKontaktowe(contactid: { eq: "Numer telefonu" }) {
            content
        }
        email: contentfulDaneKontaktowe(contactid: { eq: "Adres e-mail" }) {
            content
        }
        socialmediaitems: allContentfulSocialMedia(sort: { fields: priority, order: ASC }) {
            edges {
                node {
                    name
                    link
                    priority
                }
            }
        }
    }
`;

About.propTypes = {
    welcomedescription: PropTypes.string,
};
