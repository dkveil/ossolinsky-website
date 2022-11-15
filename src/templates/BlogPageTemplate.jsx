import React from 'react';
import { graphql, navigate } from 'gatsby';
import PageTitle from 'components/PageTitle';
import { Container } from 'styles/Container';
import { BlogPostCard } from 'components/BlogPostCard/BlogPostCard';
import { Wrapper, BlogPostsWrapper, ContentWrapper, EmptyState } from 'layouts/Blogpage/Blogpage.styles';
import { Pagination } from 'components/Pagination';

const BlogPage = (data) => {
    const { edges: blogposts } = data.data.allContentfulBlog;
    const { edges: categories } = data.data.allContentfulKategorieDlaBlogaIGalerii;
    const { currentPage, numPages } = data.pageContext;
    const currentCategory = data.pageContext.category || null;

    const setPage = (i) => {
        if (i + 1 === 1) {
            navigate('/blog');
            return;
        }

        navigate(`/blog/${i + 1}`);
    };

    const incrementPage = () => {
        if (currentPage < numPages) {
            navigate(`/blog/${currentPage + 1}`);
        }
    };

    const decrementPage = () => {
        if (currentPage === 2) {
            navigate('/blog');
            return;
        }

        if (currentPage > 1) {
            navigate(`/blog/${currentPage - 1}`);
        }
    };

    return (
        <>
            <PageTitle
                title="Blog"
                description="Zaciekawiony tym co oferuję? W tej sekcji znajdziesz relacje z imprez oraz przepisy na różnego rodzaju koktajle alkoholowe. Nie zabraknie tutaj również przepisów na syropy, nalewki etc. oraz poleceń firm wykonujących inne usługi na imprezach, które mile zapadną mi w pamięć. Zostaniesz na dłużej na blogu?"
                categories={categories}
                currentCategory={currentCategory === null ? 'Wszystko' : currentCategory}
                prefix="/blog"
            />
            <Wrapper>
                <Container>
                    <ContentWrapper>
                        <BlogPostsWrapper>
                            {blogposts.length > 0 ? (
                                blogposts.map((item, index) => {
                                    const post = item.node;

                                    return (
                                        <BlogPostCard
                                            blogpage
                                            key={post.title + index}
                                            title={post.title}
                                            description={post.shortdescription.shortdescription}
                                            category={post.category.name}
                                            image={post.image.gatsbyImageData}
                                            link={post.slug}
                                            date={post.createdAt}
                                        />
                                    );
                                })
                            ) : (
                                <EmptyState>
                                    <h2>{currentCategory === null ? 'Brak wpisów' : 'Brak wpisów z wybranej kategorii'}</h2>
                                    <h3>Już niebawem nowe artykuły</h3>
                                </EmptyState>
                            )}
                        </BlogPostsWrapper>
                        {numPages > 1 && (
                            <Pagination
                                active={currentPage}
                                pages={numPages}
                                numericPagination
                                setPage={setPage}
                                increment={incrementPage}
                                decrement={decrementPage}
                            />
                        )}
                    </ContentWrapper>
                </Container>
            </Wrapper>
        </>
    );
};

export const query = graphql`
    query blogListQuery($skip: Int!, $limit: Int!, $category: String) {
        allContentfulKategorieDlaBlogaIGalerii(sort: { fields: priority, order: ASC }) {
            edges {
                node {
                    name
                }
            }
        }
        allContentfulBlog(
            sort: { fields: createdAt, order: DESC }
            limit: $limit
            skip: $skip
            filter: { category: { name: { eq: $category } } }
        ) {
            edges {
                node {
                    title
                    category {
                        name
                    }
                    shortdescription {
                        shortdescription
                    }
                    slug
                    image {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;

export default BlogPage;
