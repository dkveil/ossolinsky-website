import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.gray};
    padding: 3rem 0 12rem;

    ${({ theme }) => theme.mq.tablet}{
        padding: 12rem 0;
    }

    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        display: flex;
        gap: 10rem;
        padding: 12rem 0;

        ::after{
            position: absolute;
            content: "";
            pointer-events: none;
            display: block;
            height: 70%;
            width: 38.2vw;
            background: linear-gradient(to top left, transparent 50%, ${({ theme }) => theme.color.white} 0);
            left: 0;
            top: 0;
            z-index: 0;
        }
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    ${({ theme }) => theme.mq.tablet}{
        flex-direction: row;
        align-items: center;
        gap: 5rem;
    }

    ${({ theme }) => theme.mq.desktop}{
        gap: unset;
    }
`

export const ContentWrapper = styled.div`

    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        padding-bottom: 1rem;
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: 42rem;

    ${({ theme }) => theme.mq.tablet}{
        min-width: 45%;
        margin: auto 0;
    }

    ${({ theme }) => theme.mq.desktop}{
        min-width: unset;
        position: relative;
        height: 62rem;
        width: 50rem;
        margin-right: 10rem;

        div{
            z-index: 2;
        }

        &::after{
            content: '';
            display: block;
            position: absolute;
            background-color: ${({ theme }) => theme.color.black};
            height: 100%;
            width: 100%;
            bottom: -3rem;
            left: -3rem;
            z-index: 1;
        }
    }
`

export const Autograph = styled.span`
    font-family: ${({ theme }) => theme.font.authograph};
    font-size: 3.2rem;
    pointer-events: none;
    position: absolute;
    bottom: 4rem;
    right: 0;
    color: ${({ theme }) => theme.color.black};
`