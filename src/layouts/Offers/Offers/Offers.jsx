import React from 'react';
import { Container } from 'styles/Container';
import { Wrapper, OfferWrapper, OfferImageWrapper, OfferContentWrapper } from './Offers.styles';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Button } from 'components/Button';
import { isDesktopAndTablet } from 'utils/isDesktopAndTablet';
import parse from 'html-react-parser';
import { Heading } from 'components/Heading';

export const Offers = () => {
    const { oferts, contactcard } = useStaticQuery(query);
    const { totalCount, edges: ofertitems } = oferts;

    const isTotalEven = (totalCount + 1) % 2 == 0;

    return (
        <Wrapper isEven={isTotalEven}>
            {isDesktopAndTablet() ? (
                <>
                    {ofertitems?.map((ofert, index) => {
                        const { image, title, offersPageText, slug } = ofert.node;

                        const isEven = Boolean((index + 1) % 2 == 0);

                        return (
                            <OfferWrapper key={index} isEven={isEven}>
                                <OfferImageWrapper isEven={isEven}>
                                    <GatsbyImage
                                        image={image.gatsbyImageData}
                                        objectFit="cover"
                                        style={{ width: '100%', height: '100%' }}
                                        imgStyle={{ objectFit: 'cover' }}
                                        alt={title}
                                    />
                                </OfferImageWrapper>
                                <OfferContentWrapper isEven={isEven}>
                                    <Heading
                                        variant="offerspage"
                                        overlay
                                        overlayColor={isEven ? 'white' : 'gray'}
                                        overlayPosition={{
                                            top: '-1rem',
                                            left: '-2rem',
                                        }}
                                        overlaySize={{
                                            width: '35%',
                                            height: '125%',
                                        }}
                                    >
                                        <Link to={`/oferta/${slug}`}>{title}</Link>
                                    </Heading>
                                    <p>
                                        <Link to={`/oferta/${slug}`}>{parse(offersPageText.offersPageText)}</Link>
                                    </p>
                                    <Button
                                        variant="contained"
                                        isLink
                                        path={`/oferta/${slug}`}
                                        color={!isEven && 'white'}
                                        boxOverlay="bottom-left"
                                        boxOverlayColor={isEven ? 'gray' : 'white'}
                                    >
                                        Sprawdź ofertę
                                    </Button>
                                </OfferContentWrapper>
                            </OfferWrapper>
                        );
                    })}
                    <OfferWrapper isEven={isTotalEven}>
                        <OfferImageWrapper>
                            <GatsbyImage
                                image={contactcard.image.gatsbyImageData}
                                objectFit="cover"
                                style={{ width: '100%', height: '100%' }}
                                imgStyle={{ objectFit: 'cover' }}
                                alt="Contact image"
                            />
                        </OfferImageWrapper>
                        <OfferContentWrapper isEven={isTotalEven}>
                            <Heading
                                variant="offerspage"
                                overlay
                                overlayColor={isTotalEven ? 'white' : 'gray'}
                                overlayPosition={{
                                    top: '-1rem',
                                    left: '-2rem',
                                }}
                                overlaySize={{
                                    width: '35%',
                                    height: '125%',
                                }}
                            >
                                <Link to="/kontakt">{contactcard.title}</Link>
                            </Heading>
                            <p>
                                <Link to="/kontakt">{parse(contactcard.offersPageText.offersPageText)}</Link>
                            </p>
                            <Button
                                variant="contained"
                                isLink
                                path="/kontakt"
                                color={!isTotalEven && 'white'}
                                boxOverlay="bottom-left"
                                boxOverlayColor={isTotalEven ? 'gray' : 'white'}
                            >
                                Kontakt
                            </Button>
                        </OfferContentWrapper>
                    </OfferWrapper>
                </>
            ) : (
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
                                        <Link to={`/oferta/${slug}`}>{title}</Link>
                                    </h3>
                                    <p>
                                        <Link to={`/oferta/${slug}`}>{parse(offersPageText.offersPageText)}</Link>
                                    </p>
                                </OfferContentWrapper>
                                <Button variant="text" isLink path={`/oferta/${slug}`}>
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
                                    alt="Contact image"
                                />
                            </OfferImageWrapper>
                        </Link>
                        <OfferContentWrapper>
                            <h3>
                                <Link to="/kontakt">{contactcard.title}</Link>
                            </h3>
                            <p>
                                <Link to="/kontakt">{parse(contactcard.offersPageText.offersPageText)}</Link>
                            </p>
                        </OfferContentWrapper>
                        <Button variant="text" isLink path="/kontakt">
                            Kontakt
                        </Button>
                    </OfferWrapper>
                </Container>
            )}
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
