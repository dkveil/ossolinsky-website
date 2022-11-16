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

    ${({ theme }) => theme.mq.tablet}{
        padding: 0;
        display: flex;
        align-items: center;
        gap: 8rem;
        z-index: 1;

        p{
            width: calc(100% - 45%)
        }
    }

    ${({ theme }) => theme.mq.desktop}{

        gap: 12rem;
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