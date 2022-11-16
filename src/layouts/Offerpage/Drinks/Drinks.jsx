import React from 'react';
import { PropTypes } from 'prop-types';
import { Wrapper, ContentWrapper, DrinksWrapper, DrinkWrapper, ImageWrapper } from './Drinks.styles';
import { Container } from 'styles/Container';
import { Heading } from 'components/Heading';
import { SectionParagraph } from 'components/SectionParagraph';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Drinks = ({ about, drinks }) => {
    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <Heading
                        variant="h2"
                        color="black"
                        margin="0 0 2rem"
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
                        Co serwuję?
                    </Heading>
                    <SectionParagraph>{about}</SectionParagraph>
                </ContentWrapper>
            </Container>
            <DrinksWrapper>
                {drinks.map((drink) => (
                    <DrinkWrapper key={drink.name}>
                        <h4>{drink.name}</h4>
                        <p>{drink.description.description}</p>

                        <ImageWrapper>
                            <GatsbyImage
                                image={drink.image.gatsbyImageData}
                                objectFit="cover"
                                style={{ width: '100%', height: '100%' }}
                                imgStyle={{ objectFit: 'cover' }}
                                alt={drink.name}
                            />
                        </ImageWrapper>
                    </DrinkWrapper>
                ))}
            </DrinksWrapper>
        </Wrapper>
    );
};

Drinks.propTypes = {
    about: PropTypes.string.isRequired,
    drinks: PropTypes.array.isRequired,
};
