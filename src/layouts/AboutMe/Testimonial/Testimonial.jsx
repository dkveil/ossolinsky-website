import React from 'react';
import { TestimonialContainer, TestimonialsWrapper, TestimonialWrapper, Wrapper, ContentContainer } from './Testimonial.styles';
import { Container } from '../../../styles/Container';
import { Pagination } from 'components/Pagination/Pagination';
import ArrowLeft from 'assets/icons/arrow-left.svg';
import ArrowRight from 'assets/icons/arrow-right.svg';
import { isDesktop } from 'utils/isDesktop';

export const Testimonial = () => {
    const [activeTestimonial, setActiveTestimonial] = React.useState(0);
    const isDesktopChecker = isDesktop();

    const handleClick = (type) => {
        if (type === 'increment') {
            setActiveTestimonial((prev) => (prev === items.length - 1 ? 0 : prev + 1));
        }
        if (type === 'decrement') {
            setActiveTestimonial((prev) => (prev === 0 ? items.length - 1 : prev - 1));
        }
    };

    const items = [
        {
            blockquoute: 'Lorem ipsum dolor ',
            author: 'User1',
        },
        { blockquoute: 'Lorem ipsum dolor ', author: 'User2' },
        { blockquoute: 'Lorem ipsum dolor ', author: 'User3' },
    ];

    const handleIndex = (index) => {
        if (index === activeTestimonial) return { pos: 1 };
        if (index === (activeTestimonial - 1 < 0 ? items.length - 1 : activeTestimonial - 1)) return { pos: 0 };
        if (index === (activeTestimonial + 1 === items.length ? 0 : activeTestimonial + 1)) return { pos: 2 };
    };

    React.useEffect(() => {
        if (isDesktopChecker) {
            console.log('ss');
        }
    }, [activeTestimonial]);

    return (
        <Wrapper>
            <Container>
                <ContentContainer>
                    <TestimonialContainer>
                        <ArrowLeft style={{ cursor: 'pointer' }} onClick={() => handleClick('decrement')} />
                        <TestimonialsWrapper>
                            {items.map((testimonial, index) => {
                                if (handleIndex(index)) {
                                    return (
                                        <TestimonialWrapper key={index} position={handleIndex(index).pos}>
                                            <blockquote>“{testimonial.blockquoute}”</blockquote>
                                            <span>{testimonial.author}</span>
                                        </TestimonialWrapper>
                                    );
                                }
                            })}
                        </TestimonialsWrapper>
                        <ArrowRight style={{ cursor: 'pointer' }} onClick={() => handleClick('increment')} />
                    </TestimonialContainer>
                    <Pagination active={activeTestimonial} pages={items.length} setPage={setActiveTestimonial} arrowButtons={false} />
                </ContentContainer>
            </Container>
        </Wrapper>
    );
};
