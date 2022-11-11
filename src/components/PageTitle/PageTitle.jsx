import React from 'react';
import { PropTypes } from 'prop-types';
import { Wrapper, ContentWrapper, CategoriesList, CategoryItem } from './PageTitle.styles';
import { Heading } from 'components/Heading';
import { SectionParagraph } from 'components/SectionParagraph';
import { Container } from 'styles/Container';
import { Link } from 'gatsby';
import slugify from 'slugify';

const PageTitle = ({ title, description, categories, currentCategory }) => {
    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <Heading variant="subpage h1" color="black" margin="0 0 2rem" textAlign="">
                        {title}
                    </Heading>
                    <SectionParagraph textAlign="center" margin="0 0 6rem">
                        {description}
                    </SectionParagraph>
                    <CategoriesList>
                        <CategoryItem active={currentCategory === null}>
                            <Link to="/blog">Wszystko</Link>
                        </CategoryItem>
                        {categories?.map((category) => {
                            const { name } = category.node;

                            return (
                                <CategoryItem key={name} active={currentCategory === name}>
                                    <Link to={`/blog/${slugify(name).toLowerCase()}`}>{name}</Link>
                                </CategoryItem>
                            );
                        })}
                    </CategoriesList>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

export default PageTitle;

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    currentCategory: PropTypes.string.isRequired,
};
