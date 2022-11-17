import React from 'react';
import { Wrapper, ImageWrapper, ContentWrapper, Content } from './MoreInformations.styles';
import { Container } from 'styles/Container';
import { PropTypes } from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { isDesktopAndTablet } from 'utils/isDesktopAndTablet';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export const MoreInformations = ({ moreInformations, image }) => {
    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <Content>{renderRichText(moreInformations)}</Content>
                    {isDesktopAndTablet() && (
                        <ImageWrapper>
                            <GatsbyImage
                                image={image}
                                objectFit="cover"
                                style={{ width: '100%', height: '100%' }}
                                imgStyle={{ objectFit: 'cover' }}
                                alt={''}
                            />
                        </ImageWrapper>
                    )}
                </ContentWrapper>
            </Container>
            {!isDesktopAndTablet() && (
                <ImageWrapper>
                    <GatsbyImage
                        image={image}
                        objectFit="cover"
                        style={{ width: '100%', height: '100%' }}
                        imgStyle={{ objectFit: 'cover' }}
                        alt={''}
                    />
                </ImageWrapper>
            )}
        </Wrapper>
    );
};

MoreInformations.propTypes = {
    moreInformations: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
};
