import React from 'react';
import { Wrapper, ContentWrapper, ImageWrapper } from './Welcome.styles';
import { Container } from 'styles/Container';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Heading } from 'components/Heading';
import { SectionParagraph } from 'components/SectionParagraph';
import { PropTypes } from 'prop-types';

export const Welcome = ({ title, description, image }) => {
    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <Heading
                        variant="subpage h1"
                        color="black"
                        margin="0 0 3rem"
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
                        mobileFontSize="3rem"
                    >
                        {title}
                    </Heading>
                    <SectionParagraph textAlign="center">{description}</SectionParagraph>
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

Welcome.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
};
