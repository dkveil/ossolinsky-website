import React from 'react';
import { Wrapper, ContentWrapper } from './Blog.styles';
import { Container } from 'styles/Container';
import { BlogPostCard } from 'components/BlogPostCard';
import { useStaticQuery, graphql } from 'gatsby';
import { isDesktop } from 'utils/isDesktop';
import { isBrowser } from 'utils/isBrowser';

export const Blog = () => {
    if (!isBrowser) {
        return null;
    }

    const { blogposts } = useStaticQuery(query);

    const sliceArrayIfIsDesktop = (array) => {
        if (isDesktop()) {
            return array.slice(0, 4);
        }
        return array;
    };

    return (
        <Wrapper id="section-blog">
            <Container>
                <ContentWrapper>
                    {sliceArrayIfIsDesktop(blogposts.edges).map((item, index) => {
                        const post = item.node;

                        return (
                            <BlogPostCard
                                homepage
                                main={index === 0 ? true : false}
                                key={post.title + index}
                                title={post.title}
                                description={post.shortdescription.shortdescription}
                                category={post.category.name}
                                image={post.image.gatsbyImageData}
                                link={`/${post.slug}`}
                                date={post.createdAt}
                            />
                        );
                    })}
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

const query = graphql`
    query {
        blogposts: allContentfulBlog(limit: 5) {
            edges {
                node {
                    title
                    category {
                        name
                    }
                    shortdescription {
                        shortdescription
                    }
                    image {
                        gatsbyImageData
                    }
                    createdAt(formatString: "DD.MM.YYYY")
                    slug
                }
            }
        }
    }
`;
