import React from 'react';
import { TestimonialContainer, TestimonialsWrapper, TestimonialWrapper, Wrapper, ContentContainer } from './Testimonial.styles';
import { Container } from '../../../styles/Container';
import { Pagination } from 'components/Pagination/Pagination';
import ArrowLeft from 'assets/icons/arrow-left.svg';
import ArrowRight from 'assets/icons/arrow-right.svg';
import { isDesktop } from 'utils/isDesktop';
import { graphql, useStaticQuery } from 'gatsby';

export const Testimonial = () => {
    const [activeTestimonial, setActiveTestimonial] = React.useState(0);
    const isDesktopChecker = isDesktop();
    const { testimonialitems } = useStaticQuery(query);

    const handleClick = (type) => {
        if (type === 'increment') {
            setActiveTestimonial((prev) => (prev === testimonialitems.totalCount - 1 ? 0 : prev + 1));
        }
        if (type === 'decrement') {
            setActiveTestimonial((prev) => (prev === 0 ? testimonialitems.totalCount - 1 : prev - 1));
        }
    };

    const handleIndex = (index) => {
        if (index === activeTestimonial) return { pos: 1 };
        if (index === (activeTestimonial - 1 < 0 ? testimonialitems.totalCount - 1 : activeTestimonial - 1)) return { pos: 0 };
        if (index === (activeTestimonial + 1 === testimonialitems.totalCount ? 0 : activeTestimonial + 1)) return { pos: 2 };
    };

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            if (isDesktopChecker) {
                setActiveTestimonial((prev) => (prev === testimonialitems.totalCount - 1 ? 0 : prev + 1));
            }
        }, 8000);

        return () => clearTimeout(timeout);
    }, [activeTestimonial]);

    if (testimonialitems.totalCount < 3) {
        return null;
    }

    return (
        <Wrapper>
            <Container>
                <ContentContainer>
                    <TestimonialContainer>
                        <ArrowLeft style={{ cursor: 'pointer' }} onClick={() => handleClick('decrement')} />
                        <TestimonialsWrapper>
                            {testimonialitems.edges.map((testimonial, index) => {
                                if (handleIndex(index)) {
                                    return (
                                        <TestimonialWrapper key={index} position={handleIndex(index).pos}>
                                            <blockquote>“{testimonial.node.blockquote.blockquote}”</blockquote>
                                            <span>{testimonial.node.author}</span>
                                        </TestimonialWrapper>
                                    );
                                }
                            })}
                        </TestimonialsWrapper>
                        <ArrowRight style={{ cursor: 'pointer' }} onClick={() => handleClick('increment')} />
                    </TestimonialContainer>
                    <Pagination
                        active={activeTestimonial}
                        pages={testimonialitems.totalCount}
                        setPage={setActiveTestimonial}
                        arrowButtons={false}
                    />
                </ContentContainer>
            </Container>
        </Wrapper>
    );
};

const query = graphql`
    query {
        testimonialitems: allContentfulOpinie {
            totalCount
            edges {
                node {
                    blockquote {
                        blockquote
                    }
                    author
                }
            }
        }
    }
`;
