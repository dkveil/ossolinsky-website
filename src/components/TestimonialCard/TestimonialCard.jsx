import React from 'react';
import { PropTypes } from 'prop-types';
import { ImageWrapper, Wrapper, ContentWrapper } from './TestimonialCard.styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Container } from 'styles/Container';
import { isDesktop } from 'utils/isDesktop';

export const TestimonialCard = ({ image, authors, content, position }) => {
    return (
        <Wrapper position={position}>
            {!isDesktop() && (
                <Container>
                    <ContentWrapper isActive={position === 1 ? true : false}>
                        <blockquote>“{content}“</blockquote>
                        <span>{authors}</span>
                        <ImageWrapper>
                            <GatsbyImage
                                image={image}
                                objectFit="cover"
                                style={{ width: '100%', height: '100%' }}
                                imgStyle={{ objectFit: 'cover' }}
                                alt={`${content} - ${authors}`}
                            />
                        </ImageWrapper>
                    </ContentWrapper>
                </Container>
            )}
            {isDesktop() && (
                <ContentWrapper>
                    <blockquote>“{content}“</blockquote>
                    <span>{authors}</span>
                    <ImageWrapper>
                        <GatsbyImage
                            image={image}
                            objectFit="cover"
                            style={{ width: '100%', height: '100%' }}
                            imgStyle={{ objectFit: 'cover' }}
                            alt={`${content} - ${authors}`}
                        />
                    </ImageWrapper>
                </ContentWrapper>
            )}
        </Wrapper>
    );
};

TestimonialCard.propTypes = {
    image: PropTypes.object.isRequired,
    authors: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
};
