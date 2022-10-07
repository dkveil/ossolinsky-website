import React from 'react';
import { Wrapper, ContentWrapper } from './Blog.styles';
import { Container } from 'styles/Container';
import { BlogPostCard } from 'components/BlogPostCard';
import { useStaticQuery, graphql } from 'gatsby';
import { isDesktop } from 'utils/isDesktop';

export const Blog = () => {
    const data = useStaticQuery(query);

    const blogPostItems = [
        {
            title: 'Koktail taki, że Cię wywali z butów',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            category: 'category',
            image: data.blogpost1.childImageSharp.gatsbyImageData,
            link: '/',
            date: '22.08.2022',
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            category: 'category',
            image: data.blogpost2.childImageSharp.gatsbyImageData,
            link: '/',
            date: '22.08.2022',
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            category: 'category',
            image: data.blogpost3.childImageSharp.gatsbyImageData,
            link: '/',
            date: '22.08.2022',
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            category: 'category',
            image: data.blogpost4.childImageSharp.gatsbyImageData,
            link: '/',
            date: '22.08.2022',
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            category: 'category',
            image: data.blogpost4.childImageSharp.gatsbyImageData,
            link: '/',
            date: '22.08.2022',
        },
    ];

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
                    {sliceArrayIfIsDesktop(blogPostItems).map((post, index) => (
                        <BlogPostCard
                            homepage
                            main={index === 0 ? true : false}
                            key={post.title + index}
                            title={post.title}
                            description={post.description}
                            category={post.category}
                            image={post.image}
                            link={post.link}
                            date={post.date}
                        />
                    ))}
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

const query = graphql`
    query {
        blogpost1: file(relativePath: { eq: "homepage/11_blog.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        blogpost2: file(relativePath: { eq: "homepage/12_blog.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        blogpost3: file(relativePath: { eq: "homepage/13_blog.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        blogpost4: file(relativePath: { eq: "homepage/14_blog.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
    }
`;
