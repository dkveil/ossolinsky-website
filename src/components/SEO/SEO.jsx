import React from 'react';
import { PropTypes } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

export const SEO = ({ title, description, slug }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                }
            }
        }
    `);

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description || data.site.siteMetadata.description} />
            <link rel="canonical" href={`${data.site.siteMetadata.siteUrl}${slug ? slug : ''}`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@iam_timsmith" />
        </>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
};
