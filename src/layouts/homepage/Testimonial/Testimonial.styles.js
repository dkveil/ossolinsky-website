import styled from "styled-components"
import { testimonialCardHeight } from "components/TestimonialCard/TestimonialCard.styles"

export const Wrapper = styled.section`
    position: relative;
    padding: 7rem 0 0;
    background-color: ${({ theme }) => theme.color.white};

    ${({ theme }) => theme.mq.desktop}{
        background-color: ${({ theme }) => theme.color.gray};
        padding: 8rem 0 11rem;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const TestimonialsWrapper = styled.div`
    position: relative;
    height: calc(${testimonialCardHeight} + 20rem);
    overflow: hidden;

    ${({ theme }) => theme.mq.desktop}{
        display: flex;
        align-items: center;
        gap: 3rem;
        height: fit-content;
    }
`

export const Autograph = styled.span`
    font-family: ${({ theme }) => theme.font.authograph};
    font-size: 7rem;
    font-weight: bold;
    pointer-events: none;
    position: absolute;
    bottom: -11rem;
    right: 0;
    color: ${({ theme }) => theme.color.white};
`