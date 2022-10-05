import React from 'react';
import { Wrapper, ContentWrapper, TestimonialsWrapper, Autograph } from './Testimonial.styles';
import { Container } from 'styles/Container';
import { Heading } from 'components/Heading';
import { TestimonialCard } from 'components/TestimonialCard';
import { useStaticQuery, graphql } from 'gatsby';
import { Pagination } from 'components/Pagination';
import { isDesktop } from 'utils/isDesktop';

export const Testimonial = () => {
    const data = useStaticQuery(query);
    const [activeTestimonial, setActiveTestimonial] = React.useState(1);
    const [touchStart, setTouchStart] = React.useState(null);

    const isDesktopChecker = isDesktop();

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDesktopChecker) {
                setActiveTestimonial((prev) => (prev === testimonialItems.length - 1 ? 0 : prev + 1));
            }
        }, 8000);

        return () => clearTimeout(timeout);
    }, [activeTestimonial, isDesktopChecker]);

    const setPage = (id) => setActiveTestimonial(id);

    const handleTestimontialPage = (type) => {
        if (type === 'increment') {
            setActiveTestimonial((prev) => (prev === testimonialItems.length - 1 ? 0 : prev + 1));
        }
        if (type === 'decrement') {
            setActiveTestimonial((prev) => (prev === 0 ? testimonialItems.length - 1 : prev - 1));
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

    const testimonialItems = [
        {
            image: data.testimonial1.childImageSharp.gatsbyImageData,
            authors: 'Dawid',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque necessitatibus magni facere?',
        },
        {
            image: data.testimonial2.childImageSharp.gatsbyImageData,
            authors: 'Krzysiek i Magda',
            content: 'Giga spoko wesele nam zrobił. Zabawa nie do zapomnienia! Jaze',
        },
        {
            image: data.testimonial3.childImageSharp.gatsbyImageData,
            authors: 'Szymon',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque necessitatibus magni facere?',
        },
    ];

    const handleIndex = (index) => {
        if (index === activeTestimonial) return { pos: 1 };
        if (index === (activeTestimonial - 1 < 0 ? testimonialItems.length - 1 : activeTestimonial - 1)) return { pos: 0 };
        if (index === (activeTestimonial + 1 === testimonialItems.length ? 0 : activeTestimonial + 1)) return { pos: 2 };
    };

    return (
        <Wrapper id="testimonial-section" onTouchStart={(e) => setTouchStart(e.touches[0].clientX)} onTouchEnd={handleSwipe}>
            <Container>
                <ContentWrapper>
                    <Heading
                        variant="h2"
                        color="black"
                        textAlign={isDesktop() ? 'center' : null}
                        overlay
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
                        margin={isDesktop() ? '0 0 8rem' : null}
                    >
                        Dziesiątki <b>zawodolonych</b> klientów
                    </Heading>
                    {isDesktop() && (
                        <TestimonialsWrapper>
                            {testimonialItems.map((testimonial, index) => {
                                if (handleIndex(index)) {
                                    return (
                                        <TestimonialCard
                                            key={index}
                                            position={handleIndex(index).pos}
                                            image={testimonial.image}
                                            authors={testimonial.authors}
                                            content={testimonial.content}
                                        />
                                    );
                                }
                            })}
                        </TestimonialsWrapper>
                    )}
                </ContentWrapper>
                {isDesktop() && <Autograph>Ossolinsky</Autograph>}
            </Container>
            {!isDesktop() && (
                <>
                    <TestimonialsWrapper>
                        {testimonialItems.map((testimonial, index) => {
                            if (handleIndex(index)) {
                                return (
                                    <TestimonialCard
                                        key={index}
                                        position={handleIndex(index).pos}
                                        image={testimonial.image}
                                        authors={testimonial.authors}
                                        content={testimonial.content}
                                    />
                                );
                            }
                        })}
                    </TestimonialsWrapper>
                    <Pagination
                        active={activeTestimonial}
                        pages={testimonialItems.length}
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
        testimonial1: file(relativePath: { eq: "homepage/08_testimotial.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        testimonial2: file(relativePath: { eq: "homepage/09_testimotial.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        testimonial3: file(relativePath: { eq: "homepage/10_testimotial.jpg" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
    }
`;
