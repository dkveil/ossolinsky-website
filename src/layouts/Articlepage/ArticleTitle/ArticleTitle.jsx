import React from 'react';
import { Wrapper, ImageWrapper, IntroWrapper, ContentWrapper, StyledArrowLeftIcon, StyledShareIcon } from './ArticleTitle.styles';
import { Container } from 'styles/Container';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PropTypes } from 'prop-types';
import ArrowLeftIcon from 'assets/icons/thinLeftArrow.svg';
import { Link } from 'gatsby';
import { formatDate } from 'utils/formatDate';

export const ArticleTitle = ({ title, date, image, category }) => {
    return (
        <Wrapper>
            <ImageWrapper>
                <GatsbyImage
                    image={image}
                    objectFit="cover"
                    style={{ width: '100%', height: '100%' }}
                    imgStyle={{ objectFit: 'cover' }}
                    alt={''}
                />
            </ImageWrapper>
            <Container>
                <IntroWrapper>
                    <ContentWrapper>
                        <h6>
                            <Link to="/blog">
                                <StyledArrowLeftIcon />
                                Blog
                            </Link>
                        </h6>
                        <div>
                            <h1>{title}</h1>
                            <span>{category}</span>
                            <span>{formatDate(date)}</span>
                        </div>
                        <span>
                            <StyledShareIcon />
                            UDOSTĘPNIJ
                        </span>
                    </ContentWrapper>
                </IntroWrapper>
            </Container>
        </Wrapper>
    );
};

ArticleTitle.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
};
