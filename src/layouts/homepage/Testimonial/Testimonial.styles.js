import styled from "styled-components"
import { testimonialCardHeight } from "../../../components/TestimonialCard/TestimonialCard.styles"

export const Wrapper = styled.section`
    position: relative;
    padding: 7rem 0 0;
    background-color: ${({ theme }) => theme.color.white};
`

export const TestimonialsWrapper = styled.div`
    position: relative;
    height: calc(${testimonialCardHeight} + 20rem);
    overflow: hidden;
`