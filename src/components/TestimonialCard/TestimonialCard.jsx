import React from 'react';
import { PropTypes } from 'prop-types';
import {
    ImageWrapper,
    Wrapper,
    ContentWrapper,
} from './TestimonialCard.styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container } from 'styles/Container';

export const TestimonialCard = ({ image, authors, content, position }) => {
    return (
        <Wrapper position={position}>
            <Container>
                <ContentWrapper>
                    <ImageWrapper>
                        <GatsbyImage
                            image={image}
                            objectFit="cover"
                            style={{ width: '100%', height: '100%' }}
                            imgStyle={{ objectFit: 'cover' }}
                            alt={`${content} - ${authors}`}
                        />
                    </ImageWrapper>
                    <blockquote>“{content}“</blockquote>
                    <span>{authors}</span>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

TestimonialCard.propTypes = {
    image: PropTypes.object.isRequired,
    authors: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
};
