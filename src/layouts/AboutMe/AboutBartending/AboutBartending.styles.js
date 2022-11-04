import styled from "styled-components"

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.gray};
    padding: 3rem 0 12rem;
    height: 100vh;
    overflow: hidden;

    ${({ theme }) => theme.mq.tablet}{
        padding: 12rem 0;
    }

`

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;

    ${({ theme }) => theme.mq.tablet}{
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
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
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 50rem;
    margin-bottom: 8rem;
    overflow: hidden;
    z-index: 2;

    ${({ theme }) => theme.mq.tablet}{
        max-width: 45%;
        min-width: 45%;
        height: unset;
        max-height: 55rem;
    }

    ${({ theme }) => theme.mq.desktop}{
        max-width: 50rem;
        max-height: 62rem;
    }
`

export const ContentWrapper = styled.div`

`