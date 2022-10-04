import React from 'react';
import { PropTypes } from 'prop-types';
import { Wrapper, ImageWrapper } from './BlogPostCard.styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export const BlogPostCard = ({
    homepage,
    title,
    description,
    // category,
    image,
    link,
    date,
    main,
}) => {
    if (homepage) {
        return (
            <Wrapper>
                <ImageWrapper main={main}>
                    <Link to={link}>
                        <GatsbyImage image={image} objectFit="cover" style={{ width: '100%', height: '100%' }} imgStyle={{ objectFit: 'cover' }} alt={title} />
                    </Link>
                </ImageWrapper>
                <h3>
                    <Link to={link}>{title}</Link>
                </h3>
                <p>
                    <Link to={link}>
                        {title}
                        {description}
                    </Link>
                </p>
                <span>
                    <Link to={link}>{date}</Link>
                </span>
            </Wrapper>
        );
    }

    return null;
};

BlogPostCard.propTypes = {
    homepage: PropTypes.bool,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // category: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    main: PropTypes.bool.isRequired,
};
