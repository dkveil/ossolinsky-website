import React from 'react';
import { Wrapper, ContentWrapper, OfertsWrapper, OfertFeaturesList } from './Oferts.styles';
import { Container } from 'styles/Container';
import { Heading } from 'components/Heading';
import { SectionParagraph } from 'components/SectionParagraph';
import { Button } from 'components/Button/Button';
import CheckIcon from 'icons/check.svg';
import { OfertCard } from 'components/OfertCard/OfertCard';
import { useStaticQuery, graphql } from 'gatsby';

export const Oferts = () => {
    const { oferts, contactcard } = useStaticQuery(query);

    return (
        <Wrapper id="oferts-section">
            <Container>
                <ContentWrapper>
                    <Heading
                        variant="h2"
                        color="black"
                        margin="0 0 4rem"
                        overlay
                        overlayColor="gray"
                        overlayPosition={{
                            top: '-1.1rem',
                            left: '-1rem',
                        }}
                        overlaySize={{
                            width: '18rem',
                            height: '5rem',
                        }}
                    >
                        Jaką Imprezę <br />
                        chcesz <b>osłodzić?</b>
                    </Heading>
                    <SectionParagraph margin="0 0 4rem">
                        Sprawię, aby Twoja impreza była niezapomniana, a goście byli zachwyceni. Specjalizuję się głównie w barmaństwie na
                        weselach, 18stkach lub imprezach firmowych! Jeśli Twoja okoliczność nie znajduje się na mojej liście, nic
                        straconego! <b>Napisz do mnie!</b>
                    </SectionParagraph>
                    <OfertFeaturesList>
                        <li>
                            <CheckIcon />
                            <p>
                                <strong>Gwaranuję dobrą zabawę!</strong>
                            </p>
                        </li>
                        <li>
                            <CheckIcon />
                            <p>
                                <strong>Gwaranuję dobrą zabawę!</strong>
                            </p>
                        </li>
                        <li>
                            <CheckIcon />
                            <p>
                                <strong>Gwaranuję dobrą zabawę!</strong>
                            </p>
                        </li>
                    </OfertFeaturesList>
                    <Button variant="outlined" color="white" isLink path="/" boxOverlay="bottom-left">
                        O mnie
                    </Button>
                </ContentWrapper>
            </Container>
            <OfertsWrapper>
                {oferts.edges.map((item) => {
                    const { title, shortdescription, image, slug } = item.node;

                    return (
                        <OfertCard
                            key={title}
                            title={title}
                            content={shortdescription.shortdescription}
                            image={image.gatsbyImageData}
                            link={`/${slug}`}
                        />
                    );
                })}
                <OfertCard
                    iscontact
                    title={contactcard.title}
                    content={contactcard.content}
                    image={contactcard.image.gatsbyImageData}
                    link="/kontakt"
                />
            </OfertsWrapper>
        </Wrapper>
    );
};

const query = graphql`
    query {
        oferts: allContentfulOferty(filter: { iscontact: { eq: false } }, sort: { fields: priority, order: ASC }) {
            edges {
                node {
                    title
                    shortdescription {
                        shortdescription
                    }
                    image {
                        gatsbyImageData
                    }
                    slug
                }
            }
        }
        contactcard: contentfulOferty(iscontact: { eq: true }) {
            title
            shortdescription {
                shortdescription
            }
            image {
                gatsbyImageData
            }
        }
    }
`;
