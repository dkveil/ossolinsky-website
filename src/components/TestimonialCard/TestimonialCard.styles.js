import styled from "styled-components"
import { Pagination } from "../Pagination"

export const testimonialCardHeight = '56rem'

export const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: ${testimonialCardHeight};
    width: 100%;
    background-color: ${({ theme }) => theme.color.gray};
    transform: ${({ position }) => `translateX(${position * 100 - 100}vw)`};
    opacity: ${({ position }) => position === 1 ? 1 : 0};
    visibility: ${({ position }) => position === 1 ? 'visible' : 'hidden'};
    transition: transform .4s ease, visibility .4s ease, opacity .4s ease;
`

export const ContentWrapper = styled.div`
    position: relative;
    padding-top: calc(6rem + 150px);

    blockquote, span {
        font-size: ${({ theme }) => theme.font.size.mobile.blockquote};
        line-height: 3.2rem;
        color: ${({ theme }) => theme.color.black};
        margin-bottom: 5rem;
    }
    span {
        font-weight: 600;
        text-transform: uppercase;
    }
`

export const ImageWrapper = styled.div`
    position: absolute;
    top: -150px;
    left: 0;
    width: 100%;
    height: 30rem;
    border: 2px solid ${({ theme }) => theme.color.white};

    &::after{
        content: '';
        position: absolute;
        height: calc(100% + 50px);
        top: 50%;
        right: -2.2rem;
        transform: translateY(-50%);
        width: calc(50vw + 2px);
        background-color: ${({ theme }) => theme.color.black};
        z-index: -1;
    }
`

export const StyledPagination = styled(Pagination)`
    position: absolute;
    bottom: 0;
    left: 20px;
`