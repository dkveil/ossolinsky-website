import React from 'react';
import { PropTypes } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

export const SEO = ({ title, description, slug, image }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                }
            }
            favicon: file(name: { eq: "favicon" }) {
                publicURL
            }
            img: file(name: { eq: "black_logo" }) {
                publicURL
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
            <meta name="og:description" content={description || data.site.siteMetadata.description} />
            <meta name="og:image" content={`${data.site.siteMetadata.siteUrl}${image || data.img.publicURL}`} />
            <meta name="og:type" content="website" />
            <meta name="og:url" content={`${data.site.siteMetadata.siteUrl}/${slug ? slug : ''}`} />
            <meta name="og:site_name" content={title} />
        </>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
    image: PropTypes.string,
};
