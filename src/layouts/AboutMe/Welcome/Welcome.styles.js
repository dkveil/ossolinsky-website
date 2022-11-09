import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: ${({ theme }) => theme.height.mobileHeader};
    background-color: ${({ theme }) => theme.color.white};

    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        margin-top: ${({ theme }) => theme.height.desktopHeader};

        ::after{
            position: absolute;
            content: "";
            pointer-events: none;
            display: block;
            height: 33%;
            width: 100%;
            background: linear-gradient(to bottom left, transparent 50%, ${({ theme }) => theme.color.gray} 0);
            left: 0;
            bottom: 0;
            z-index: 0;
        }
    }
`

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;

    h1{
        display: none;
    }

    ${({ theme }) => theme.mq.tablet}{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12rem 0;
        gap: 5rem;
    }

    ${({ theme }) => theme.mq.desktop}{
        gap: 8rem;
    }

    ${({ theme }) => theme.mq.bigdesktop}{
        gap: 12rem;
    }
`

export const ImageWrapper = styled.div`
    max-height: 70rem;
    display: flex;
    justify-content: center;
    align-items:center;

    ${({ theme }) => theme.mq.tablet}{
        max-width: 45%;
        min-width: 45%;
    }

    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        max-height: unset;
        height: 62rem;
        min-width: 50rem;

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

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 50rem;
    position: relative;
    z-index: 2;

    ${({ theme }) => theme.mq.tablet}{
        height: unset;
    }
`