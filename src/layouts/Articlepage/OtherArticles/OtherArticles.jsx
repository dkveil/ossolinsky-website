import React from 'react';
import { ContentWrapper, Wrapper, ArticlesWrapper } from './OtherArticles.styles';
import { Container } from 'styles/Container';
import { PropTypes } from 'prop-types';
import { BlogPostCard } from 'components/BlogPostCard';

export const OtherArticles = ({ articles }) => {
    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <h4>Sprawdź również inne artykuły</h4>
                    <ArticlesWrapper>
                        {articles.map((item) => {
                            const article = item.node;

                            return (
                                <BlogPostCard
                                    blogpage
                                    key={article.title}
                                    title={article.title}
                                    category={article.category.name}
                                    image={article.image.gatsbyImageData}
                                    link={article.slug}
                                    date={article.createdAt}
                                />
                            );
                        })}
                    </ArticlesWrapper>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

OtherArticles.propTypes = {
    articles: PropTypes.array.isRequired,
};
