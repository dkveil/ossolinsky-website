import styled from "styled-components";
import { overlay } from "utils/overlay";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.gray};

    ${({ theme }) => theme.mq.tablet}{
        padding: 12rem 0;
    }

    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        padding: 16rem 0;

        ::after{
            position: absolute;
            content: "";
            pointer-events: none;
            display: block;
            height: 30%;
            width: 50%;
            background: linear-gradient(to top right, transparent 50%, ${({ theme }) => theme.color.white} 0);
            top: 0;
            right: 0;
            z-index: 0;
        }

        ::before{
            position: absolute;
            content: "";
            pointer-events: none;
            display: block;
            height: 25%;
            width: 100%;
            background: linear-gradient(to bottom right, transparent 50%, ${({ theme }) => theme.color.white} 0);
            bottom: 0;
            right: 0;
            z-index: 0;
        }
    }
`

export const ContentWrapper = styled.div`
    padding: 12rem 0;
    width: 100%;

    ${({ theme }) => theme.mq.tablet}{
        padding: 0;
        display: flex;
        align-items: center;
        gap: 8rem;
        z-index: 1;
    }

    ${({ theme }) => theme.mq.desktop}{
        gap: 12rem;
    }
`

export const Content = styled.div`
    font-size: ${({ theme }) => theme.font.size.mobile.paragraph};
    line-height: 2.8rem;
    color: ${({ theme }) => theme.color.text};

    ul{
        margin: 1rem 0;
        list-style: none;
        li{
            position: relative;
            padding-left: 1.5rem;
            ::after{
                position: absolute;
                content: '\\2714';
                top: 50%;
                left: 0;
                transform: translate(-50%,-50%);
            }
        }
    }
    ${({ theme }) => theme.mq.tablet}{
        width: calc(55% - 8rem);
    }

    ${({ theme }) => theme.mq.desktop} {
        font-size: ${({ theme }) => theme.font.size.desktop.paragraph};
        line-height: 3.2rem;
        width: calc(55% - 12rem);
    }

`

export const ImageWrapper = styled.div`
    height: 30rem;
    position: relative;

    ${overlay(.2)}

    ${({ theme }) => theme.mq.tablet}{
        height: 45rem;
        width: 45%;
    }

    ${({ theme }) => theme.mq.desktop}{
        height: 60rem;
        width: 45%;

        &::before{
            content: '';
            display: block;
            position: absolute;
            background-color: ${({ theme }) => theme.color.black};
            height: 100%;
            width: 100%;
            bottom: -3rem;
            right: -3rem;
            z-index: 0;
        }
    }
`