import styled from "styled-components";
import { overlay } from 'utils/overlay';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    height: 45rem;
    width: 100%;
    padding: 5rem 0;

    a{
        color: inherit;
        text-decoration: none;
    }

    ${overlay(0.2)}

    ${({ theme }) => theme.mq.desktop}{
        position: absolute;
        top: 50%;
        transform: translate( ${({ position }) => `calc(${position} * 29rem)`},-50%);
        transition: transform .4s ease;
        width: ${({ main }) => main ? '31.32rem' : '29rem'};
        height: ${({ main }) => main ? '48.6rem' : '45rem'};
        z-index: ${({ main, position, lastChild }) => main ? 3 : position === lastChild ? 1 : 2};
        padding: 4rem 0;
        border: ${({ main, theme }) => main ? `2px solid ${theme.color.white}` : `1px solid ${theme.color.white}`};
        box-shadow: ${({ main }) => main && ' 6px 6px 10px 2px rgba(0,0,0,0.4)'};
    }
    `

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 28rem;
    height: 100%;
    margin: 0 auto;
    z-index: 2;
    div{
        display: flex;
        flex-direction: column;
    }

    ${({ theme }) => theme.mq.desktop}{
        width: 23rem;
    }
`

export const Title = styled.h3`
    text-align: center;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.mobile.ofertHeading};
    line-height: 3.2rem;
    text-shadow: 0 2px 2px ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};

    ${({ theme }) => theme.mq.desktop}{
        font-size: ${({ theme }) => theme.font.size.desktop.ofertHeading};
    }
`

export const Paragraph = styled.p`
    font-size: ${({ theme }) => theme.font.size.mobile.ofertParagraph};
    line-height: 1.8rem;
    color: ${({ theme }) => theme.color.white};
    margin-bottom: 4rem;

    ${({ theme }) => theme.mq.desktop}{
        font-size: ${({ theme }) => theme.font.size.desktop.ofertParagraph};
        margin-bottom: 2.5rem;
        line-height: 1.6rem;
    }
`
export const ImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`