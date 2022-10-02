import React from 'react';
import {
    Wrapper,
    ContentWrapper,
    Title,
    Paragraph,
    ImageWrapper,
} from './OfertCard.styles';
import { PropTypes } from 'prop-types';
import { Button } from '../Button/Button';
import { GatsbyImage } from 'gatsby-plugin-image';

export const OfertCard = ({ title, content, image, iscontact, link }) => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Title>{title}</Title>
                <div>
                    <Paragraph>{content}</Paragraph>
                    <Button
                        variant="full-outlined"
                        width="100%"
                        isLink
                        path={link}
                    >
                        {iscontact ? 'Kontakt' : 'Oferta'}
                    </Button>
                </div>
            </ContentWrapper>
            <ImageWrapper>
                <GatsbyImage
                    image={image}
                    objectFit="cover"
                    style={{ width: '100%', height: '100%' }}
                    imgStyle={{ objectFit: 'cover' }}
                    alt={title}
                />
            </ImageWrapper>
        </Wrapper>
    );
};

OfertCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    iscontact: PropTypes.bool.isRequired,
    link: PropTypes.string.isRequired,
};

OfertCard.defaultProps = {
    iscontact: false,
};
