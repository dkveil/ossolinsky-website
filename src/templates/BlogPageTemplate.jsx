import React from 'react';
import { graphql } from 'gatsby';
import PageTitle from 'components/PageTitle';

const BlogPage = (data) => {
    const { edges: blogposts } = data.data.allContentfulBlog;
    const { edges: categories } = data.data.allContentfulKategorieDlaBlogaIGalerii;
    const { currentPage, numPages } = data.pageContext;
    const currentCategory = data.pageContext.category || null;

    return (
        <>
            <PageTitle
                title="Blog"
                description="Zaciekawiony tym co oferuję? W tej sekcji znajdziesz relacje z imprez oraz przepisy na różnego rodzaju koktajle alkoholowe. Nie zabraknie tutaj również przepisów na syropy, nalewki etc. oraz poleceń firm wykonujących inne usługi na imprezach, które mile zapadną mi w pamięć. Zostaniesz na dłużej na blogu?"
                categories={categories}
                currentCategory={currentCategory}
            />
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
