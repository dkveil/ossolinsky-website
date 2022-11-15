import styled from "styled-components";
import { overlay } from 'utils/overlay'

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.9);
    z-index: ${({ theme }) => theme.zindex.gallerydisplayer};
    padding: 1rem 0;
    pointer-events: fill;

    :after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: rgba(56, 62, 82, 0);
        background-image: linear-gradient(180deg, rgba(56, 62, 82, 0) 0%, rgba(0, 0, 0, 0.8) 90%);
    }
`

export const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin: auto;

    ${({ theme }) => theme.mq.desktop}{
        width: 90%;
        padding: 4rem 0 2rem;
    }
`

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    user-select: none;
    display: grid;
    place-items: center;

    ${({ theme }) => theme.mq.desktop}{
        display: block;
        height: calc(100% - 18rem);
    }
`

export const ImageDisplayer = styled.figure`
    position: relative;
    width: auto;
    height: 100%;
    max-width: 90%;
    margin: 0 auto;
    opacity: ${({ hideImage }) => hideImage ? 0 : 1};
    transition: opacity .15s ease;

    ${({ theme }) => theme.mq.tablet}{
        height: 80%;
    }

    ${({ theme }) => theme.mq.desktop}{
        height: 100%;
    }

    figcaption {
        display: none;
        color: white;
        width: fit-content;
        margin: auto;
        text-align: center;
        margin-top: .4rem;

        ${({ theme }) => theme.mq.desktop}{
            display: block;
        }

        h3{
            font-weight: 400;
            text-transform: uppercase;
        }
    }

`

export const ImagesList = styled.div`
    margin-top: 6rem;
    height: 9rem;
    width: 100%;
    overflow: hidden;
`

export const ImagesListWrapper = styled.div`
    height: 100%;
    display: flex;
    width: fit-content;
    transform: ${({ position }) => `translateX(-${position * 19.5}rem)`};
    gap: 1.5rem;
    margin: 0 auto;
    transition: transform .15s ease;
`

export const IconWrapper = styled.div`
    position: absolute;
    padding: 1.5rem;
    background-color: rgba(0,0,0,0.6);
    top: ${({ top }) => top && top};
    bottom: ${({ bottom }) => bottom && bottom};
    right: ${({ right }) => right && right};
    left: ${({ left }) => left && left};
    transform: ${({ transform }) => transform && transform};
    cursor: pointer;
    z-index: 999;

    ${({ theme }) => theme.mq.desktop}{

        background-color: transparent;

        :hover{
            background-color: rgba(0,0,0,0.2);
        }
    }

`

export const SingleImageWrapper = styled.div`
    height: 100%;
    width: 18rem;
    background: white;
    cursor: pointer;
    position: relative;

    ${({ active }) => !active && overlay(.6)}
`