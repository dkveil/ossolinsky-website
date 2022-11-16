import React from 'react';
import { Wrapper, ImageWrapper, ContentWrapper } from './MoreInformations.styles';
import { Container } from 'styles/Container';
import { SectionParagraph } from 'components/SectionParagraph';
import { PropTypes } from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export const MoreInformations = ({ moreInformations, image }) => {
    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <SectionParagraph>{moreInformations}</SectionParagraph>
                </ContentWrapper>
            </Container>
            <ImageWrapper>
                <GatsbyImage
                    image={image}
                    objectFit="cover"
                    style={{ width: '100%', height: '100%' }}
                    imgStyle={{ objectFit: 'cover' }}
                    alt={''}
                />
            </ImageWrapper>
        </Wrapper>
    );
};

MoreInformations.propTypes = {
    moreInformations: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
};
