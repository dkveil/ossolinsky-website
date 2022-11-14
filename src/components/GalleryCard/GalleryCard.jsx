import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PropTypes } from 'prop-types';
import { Wrapper, ImageWrapper, ImageHover, StyledSearchIcon } from './GalleryCard.styles';

export const GalleryCard = ({ title, image, date, index }) => {
    return (
        <Wrapper>
            <ImageHover>
                <StyledSearchIcon />
                <h4>{title}</h4>
                <time>{date}</time>
            </ImageHover>
            <ImageWrapper>
                <GatsbyImage
                    image={image}
                    objectFit="cover"
                    style={{ width: '100%', height: '100%' }}
                    imgStyle={{ objectFit: 'cover' }}
                    alt={`${title} + ${index}`}
                />
            </ImageWrapper>
        </Wrapper>
    );
};

GalleryCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
    index: PropTypes.number,
};
