import React from 'react';
import { Wrapper, ContentWrapper, TestimonialsWrapper, Autograph } from './Testimonial.styles';
import { Container } from 'styles/Container';
import { Heading } from 'components/Heading';
import { TestimonialCard } from 'components/TestimonialCard';
import { useStaticQuery, graphql } from 'gatsby';
import { Pagination } from 'components/Pagination';
import { isDesktopAndTablet } from 'utils/isDesktopAndTablet';
import { isBrowser } from 'utils/isBrowser';
import { isDesktop } from 'utils/isDesktop';

export const Testimonial = () => {
    if (!isBrowser) {
        return null;
    }

    const { testimonialitems, leftsidetestimontial, midsidetestimontial, rightsidetestimontial } = useStaticQuery(query);
    const [activeTestimonial, setActiveTestimonial] = React.useState(1);
    const [touchStart, setTouchStart] = React.useState(null);
    const desktopTestimonialItems = [leftsidetestimontial, midsidetestimontial, rightsidetestimontial];

    const isDesktopAndTabletChecker = isDesktopAndTablet();

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDesktopAndTabletChecker) {
                setActiveTestimonial((prev) => (prev === testimonialitems.totalCount - 1 ? 0 : prev + 1));
            }
        }, 8000);

        return () => clearTimeout(timeout);
    }, [activeTestimonial, isDesktopAndTabletChecker]);

    const setPage = (id) => setActiveTestimonial(id);

    const handleTestimontialPage = (type) => {
        if (type === 'increment') {
            setActiveTestimonial((prev) => (prev === testimonialitems.totalCount - 1 ? 0 : prev + 1));
        }
        if (type === 'decrement') {
            setActiveTestimonial((prev) => (prev === 0 ? testimonialitems.totalCount - 1 : prev - 1));
        }
    };

    const handleSwipe = (e) => {
        if (touchStart - e.changedTouches[0].clientX > 50) {
            handleTestimontialPage('increment');
        }
        if (touchStart - e.changedTouches[0].clientX < -50) {
            handleTestimontialPage('decrement');
        }
        setTouchStart(null);
    };

    const handleIndex = (index) => {
        if (index === activeTestimonial) return { pos: 1 };
        if (index === (activeTestimonial - 1 < 0 ? testimonialitems.totalCount - 1 : activeTestimonial - 1)) return { pos: 0 };
        if (index === (activeTestimonial + 1 === testimonialitems.totalCount ? 0 : activeTestimonial + 1)) return { pos: 2 };
    };

    return (
        <Wrapper id="testimonial-section" onTouchStart={(e) => setTouchStart(e.touches[0].clientX)} onTouchEnd={handleSwipe}>
            <Container>
                <ContentWrapper>
                    <Heading
                        variant="h2"
                        color="black"
                        textAlign={isDesktopAndTablet() ? 'center' : null}
                        overlay
                        smallHeading
                        overlayColor={isDesktop() ? 'white' : 'gray'}
                        overlayPosition={
                            isDesktop()
                                ? {
                                      top: '-3rem',
                                      left: '13.2rem',
                                  }
                                : {
                                      top: '-1.1rem',
                                      left: '-1rem',
                                  }
                        }
                        overlaySize={
                            isDesktop()
                                ? {
                                      width: '22rem',
                                      height: '10rem',
                                  }
                                : {
                                      width: '18rem',
                                      height: '5rem',
                                  }
                        }
                        margin={isDesktopAndTablet() ? '0 0 8rem' : null}
                    >
                        Dziesiątki <b>zawodolonych</b> klientów
                    </Heading>
                    {isDesktopAndTablet() && (
                        <TestimonialsWrapper>
                            {desktopTestimonialItems.map((testimonial, index) => {
                                if (handleIndex(index)) {
                                    return (
                                        <TestimonialCard
                                            key={index}
                                            position={handleIndex(index).pos}
                                            image={testimonial.image.gatsbyImageData}
                                            authors={testimonial.author}
                                            content={testimonial.blockquote.blockquote}
                                        />
                                    );
                                }
                            })}
                        </TestimonialsWrapper>
                    )}
                </ContentWrapper>
                {isDesktop() && <Autograph>Ossolinsky</Autograph>}
            </Container>
            {!isDesktopAndTablet() && (
                <>
                    <TestimonialsWrapper>
                        {testimonialitems.edges.map((testimonial, index) => {
                            if (handleIndex(index)) {
                                return (
                                    <TestimonialCard
                                        key={index}
                                        position={handleIndex(index).pos}
                                        image={testimonial.node.image.gatsbyImageData}
                                        authors={testimonial.node.author}
                                        content={testimonial.node.blockquote.blockquote}
                                    />
                                );
                            }
                        })}
                    </TestimonialsWrapper>
                    <Pagination
                        active={activeTestimonial}
                        pages={testimonialitems.totalCount}
                        setPage={setPage}
                        increment={() => handleTestimontialPage('increment')}
                        decrement={() => handleTestimontialPage('decrement')}
                        styles={{
                            position: 'absolute',
                            bottom: '8rem',
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }}
                    />
                </>
            )}
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
                    image {
                        gatsbyImageData
                    }
                }
            }
        }
        leftsidetestimontial: contentfulOpinie(position: { eq: "Lewa strona" }) {
            blockquote {
                blockquote
            }
            image {
                gatsbyImageData
            }
            author
        }
        midsidetestimontial: contentfulOpinie(position: { eq: "Środek" }) {
            blockquote {
                blockquote
            }
            image {
                gatsbyImageData
            }
            author
        }
        rightsidetestimontial: contentfulOpinie(position: { eq: "Prawa strona" }) {
            blockquote {
                blockquote
            }
            image {
                gatsbyImageData
            }
            author
        }
    }
`;
