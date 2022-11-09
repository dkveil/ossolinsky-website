import React from 'react';
import { Container } from 'styles/Container';
import { Wrapper, OfferWrapper, OfferImageWrapper, OfferContentWrapper } from './Offers.styles';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Button } from 'components/Button';

export const Offers = () => {
    const { oferts, contactcard } = useStaticQuery(query);
    const { totalCount, edges: ofertitems } = oferts;
    console.log(ofertitems);
    console.log(contactcard);

    return (
        <Wrapper>
            <Container>
                {ofertitems?.map((ofert, index) => {
                    const { image, title, offersPageText, slug } = ofert.node;

                    return (
                        <OfferWrapper key={index}>
                            <Link to={`/${slug}`}>
                                <OfferImageWrapper>
                                    <GatsbyImage
                                        image={image.gatsbyImageData}
                                        objectFit="cover"
                                        style={{ width: '100%', height: '100%' }}
                                        imgStyle={{ objectFit: 'cover' }}
                                        alt={title}
                                    />
                                </OfferImageWrapper>
                            </Link>
                            <OfferContentWrapper>
                                <h3>
                                    <Link to={`/${slug}`}>{title}</Link>
                                </h3>
                                <p>
                                    <Link to={`/${slug}`}>{offersPageText.offersPageText}</Link>
                                </p>
                            </OfferContentWrapper>
                            <Button variant="text" isLink path={`/${slug}`}>
                                Sprawdź ofertę
                            </Button>
                        </OfferWrapper>
                    );
                })}
                <OfferWrapper>
                    <Link to="/kontakt">
                        <OfferImageWrapper>
                            <GatsbyImage
                                image={contactcard.image.gatsbyImageData}
                                objectFit="cover"
                                style={{ width: '100%', height: '100%' }}
                                imgStyle={{ objectFit: 'cover' }}
                                alt="Welcome image"
                            />
                        </OfferImageWrapper>
                    </Link>
                    <OfferContentWrapper>
                        <h3>
                            <Link to="/kontakt">{contactcard.title}</Link>
                        </h3>
                        <p>
                            <Link to="/kontakt">{contactcard.offersPageText.offersPageText}</Link>
                        </p>
                    </OfferContentWrapper>
                    <Button variant="text" isLink path="/kontakt">
                        Kontakt
                    </Button>
                </OfferWrapper>
            </Container>
        </Wrapper>
    );
};

const query = graphql`
    query {
        oferts: allContentfulOferty(filter: { iscontact: { eq: false } }, sort: { fields: priority, order: ASC }) {
            totalCount
            edges {
                node {
                    title
                    image {
                        gatsbyImageData
                    }
                    slug
                    offersPageText {
                        offersPageText
                    }
                }
            }
        }
        contactcard: contentfulOferty(iscontact: { eq: true }) {
            title
            offersPageText {
                offersPageText
            }
            image {
                gatsbyImageData
            }
        }
    }
`;
