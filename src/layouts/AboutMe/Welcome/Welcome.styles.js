import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: ${({ theme }) => theme.height.mobileHeader};
    background-color: ${({ theme }) => theme.color.white};
    overflow: hidden;

    ${({ theme }) => theme.mq.tablet}{
        height: 700px;
    }

    ${({ theme }) => theme.mq.desktop}{
        position: relative;
        margin-top: ${({ theme }) => theme.height.desktopHeader};
        height: calc(100vh - ${({ theme }) => theme.height.desktopHeader});

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
    height: 45rem;
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
    position: relative;
    z-index: 2;
    padding: 10rem 0;

    ${({ theme }) => theme.mq.tablet}{
        height: unset;
        padding: 0;
    }
`