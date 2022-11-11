import React from 'react';
import { PropTypes } from 'prop-types';
import { Wrapper, ImageWrapper, ContentWrapper, Category, Date } from './BlogPostCard.styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Button } from 'components/Button';
import { isDesktop } from 'utils/isDesktop';

export const BlogPostCard = ({ homepage, blogpage, title, description, category, image, link, date, main }) => {
    return (
        <Wrapper main={main && homepage} blogpage={blogpage}>
            <ImageWrapper main={main && homepage} blogpage={blogpage}>
                <Link to={`/blog/${link}`}>
                    <GatsbyImage
                        image={image}
                        objectFit="cover"
                        style={{ width: '100%', height: '100%' }}
                        imgStyle={{ objectFit: 'cover' }}
                        alt={title}
                    />
                </Link>
            </ImageWrapper>
            <ContentWrapper main={main && homepage}>
                <Category main={main && homepage}>
                    <Link to={`/blog/${link}`}>{category}</Link>
                </Category>
                <h3>
                    <Link to={`/blog/${link}`}>{title}</Link>
                </h3>
                <p>
                    <Link to={`/blog/${link}`}>
                        {title}
                        {description}
                    </Link>
                </p>
                <Date main={main} datetime={date}>
                    <Link to={`/blog/${link}`}>{date}</Link>
                </Date>
                {main && homepage && isDesktop() && (
                    <Button variant="text" isLink path={link}>
                        Zobacz artykuł
                    </Button>
                )}
            </ContentWrapper>
        </Wrapper>
    );
};

BlogPostCard.propTypes = {
    homepage: PropTypes.bool,
    blogpage: PropTypes.bool,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    main: PropTypes.bool.isRequired,
};
