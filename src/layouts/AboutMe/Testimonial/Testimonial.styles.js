import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    padding: 12rem 0;
    position: relative;

    ::after{
        position: absolute;
        content: "";
        pointer-events: none;
        display: block;
        height: 33%;
        width: 100%;
        background: linear-gradient(to top left, transparent 50%, ${({ theme }) => theme.color.gray} 0);
        left: 0;
        top: 0;
        z-index: 0;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10rem;
`

export const TestimonialContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    width: 100%;
`

export const TestimonialsWrapper = styled.div`
    position: relative;
    flex-grow: 1;
    min-height: 20rem;
    overflow: hidden;
`

export const TestimonialWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    transform: ${({ position }) => `translateX(${position * 100 - 100}%)`};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-align: center;
    min-height: 100%;
    opacity: ${({ position }) => position === 1 ? 1 : 0};
    visibility: ${({ position }) => position === 1 ? 'visible' : 'hidden'};
    z-index: ${({ position, theme }) => position === 1 ? theme.zindex.visiblecontent : theme.zindex.hiddencontent};
    transition: transform .4s ease, visibility .4s ease, opacity .4s ease;

    blockquote {
        width: 65%;
        font-size: 3.2rem;
        line-height: 4rem;
        color: ${({ theme }) => theme.color.black};
        margin-bottom: 4rem;
    }

    span{
        font-size: 1.6rem;
        font-weight: 600;
        text-transform: uppercase;
    }

`