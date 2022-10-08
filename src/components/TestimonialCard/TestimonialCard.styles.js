import styled from "styled-components"
import { overlay } from 'utils/overlay';

export const testimonialCardHeight = '56rem'

export const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: ${testimonialCardHeight};
    width: 100%;
    background-color: ${({ theme }) => theme.color.gray};
    transform: ${({ position }) => `translateX(${position * 100 - 100}vw)`};
    transition: transform .4s ease, visibility .4s ease, opacity .4s ease;
    z-index: ${({ position, theme }) => position === 1 ? theme.zindex.visiblecontent : theme.zindex.hiddencontent};

    ${({ theme }) => theme.mq.desktop}{
        position: static;
        transform: translate(0 ,0);
        z-index: 1;
        overflow: hidden;
        height: 44rem;
        background: yellow;


        &:nth-child(2){

            height: 50rem;
        }
    }
`

export const ContentWrapper = styled.div`
    position: relative;
    padding-top: calc(6rem + 175px);
    opacity: ${({ isActive }) => isActive ? 1 : 0};
    visibility: ${({ isActive }) => isActive ? 'visible' : 'hidden'};
    color: ${({ theme }) => theme.color.text};

    ${({ theme }) => theme.mq.desktop}{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 8rem 6rem;
        visibility: visible;
        opacity: 1;
        color: ${({ theme }) => theme.color.white};
    }

    blockquote {
        font-size: ${({ theme }) => theme.font.size.mobile.blockquote};
        line-height: 3.2rem;
        margin-bottom: 3rem;
        ${({ theme }) => theme.mq.desktop}{
            font-size: ${({ theme }) => theme.font.size.desktop.blockquote};
            text-shadow: 0 1px 2px ${({ theme }) => theme.color.black};
        }
    }
    span {
        font-size: ${({ theme }) => theme.font.size.mobile.testimetionalsParagraph};
        font-weight: 600;
        text-transform: uppercase;
        ${({ theme }) => theme.mq.desktop}{
            text-shadow: 0 1px 2px ${({ theme }) => theme.color.black};
        }
    }


`

export const ImageWrapper = styled.div`
    position: absolute;
    top: -175px;
    left: 0;
    width: 100%;
    height: 35rem;
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

    ${({ theme }) => theme.mq.desktop}{
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        &::after{
            all: unset;
        }
        ${overlay(.25)}

    }
`