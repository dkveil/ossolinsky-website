import React from 'react';
import { Wrapper, ContentWrapper, OfertsWrapper, OfertFeaturesList, ButtonsWrapper, StyledArrowIcon } from './Oferts.styles';
import { Container } from 'styles/Container';
import { Heading } from 'components/Heading';
import { SectionParagraph } from 'components/SectionParagraph';
import { Button } from 'components/Button/Button';
import CheckIcon from 'icons/check.svg';
import { OfertCard } from 'components/OfertCard/OfertCard';
import { useStaticQuery, graphql } from 'gatsby';
import { isDesktop } from 'utils/isDesktop';
import { isBrowser } from 'utils/isBrowser';
import ArrowSquare from 'icons/arrow-square.svg';
import { navItems } from 'helpers/navigationItems';

export const Oferts = () => {
    if (!isBrowser) {
        return null;
    }

    const { oferts, contactcard } = useStaticQuery(query);
    const [ofertCardPosition, setOfertCardPosition] = React.useState(0);

    const offertsLink = navItems.find((item) => item.name === 'Oferta');

    const handlePosition = (index) => {
        if (index - ofertCardPosition < 0) {
            return oferts.totalCount + 1 - Math.abs(ofertCardPosition - index);
        }
        return index - ofertCardPosition;
    };

    const handleClick = (type) => {
        if (type === 'increment') {
            setOfertCardPosition((prev) => (prev === oferts.totalCount ? 0 : prev + 1));
        }
        if (type === 'decrement') {
            setOfertCardPosition((prev) => (prev === 0 ? oferts.totalCount : prev - 1));
        }
    };

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
                                <strong>Najwyższa jakość!</strong>
                            </p>
                        </li>
                        <li>
                            <CheckIcon />
                            <p>
                                <strong>Bezkonkurencyjna cena!</strong>
                            </p>
                        </li>
                        <li>
                            <CheckIcon />
                            <p>
                                <strong>Gwarancja dobrej zabawy!</strong>
                            </p>
                        </li>
                    </OfertFeaturesList>
                    <Button variant="outlined" color="white" isLink path={offertsLink.path} boxOverlay="bottom-left">
                        O mnie
                    </Button>
                </ContentWrapper>
            </Container>
            {isDesktop() && (
                <ButtonsWrapper>
                    <StyledArrowIcon width="49px" onClick={() => handleClick('decrement')}>
                        <ArrowSquare />
                    </StyledArrowIcon>
                    <StyledArrowIcon width="49px" onClick={() => handleClick('increment')} right>
                        <ArrowSquare />
                    </StyledArrowIcon>
                </ButtonsWrapper>
            )}
            <OfertsWrapper>
                {oferts.edges.map((item, index) => {
                    const { title, shortdescription, image, slug } = item.node;

                    return (
                        <OfertCard
                            position={handlePosition(index)}
                            main={index - ofertCardPosition === 0 ? true : false}
                            key={title}
                            title={title}
                            content={shortdescription.shortdescription}
                            image={image.gatsbyImageData}
                            link={`/oferta/${slug}`}
                            lastChild={oferts.totalCount}
                        />
                    );
                })}
                <OfertCard
                    iscontact
                    position={handlePosition(oferts.totalCount)}
                    main={oferts.totalCount - ofertCardPosition === 0 ? true : false}
                    title={contactcard.title}
                    content={contactcard.shortdescription.shortdescription}
                    image={contactcard.image.gatsbyImageData}
                    link="/kontakt"
                    lastChild={oferts.totalCount}
                />
            </OfertsWrapper>
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
