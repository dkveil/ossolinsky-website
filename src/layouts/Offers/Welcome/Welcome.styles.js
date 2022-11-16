import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: ${({ theme }) => theme.height.mobileHeader};
    position: relative;

    ${({ theme }) => theme.mq.tablet}{
        height: 600px;
    }
    ${({ theme }) => theme.mq.desktop}{
        margin-top: ${({ theme }) => theme.height.desktopHeader};
        min-height: 800px;
        height: calc(100vh - ${({ theme }) => theme.height.desktopHeader});
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8rem 0 6rem;

    ${({ theme }) => theme.mq.tablet}{
        width: 50%;
        padding-right: 4rem;
        align-items: flex-start;
        height: 100%;
        justify-content: center;

    }
    ${({ theme }) => theme.mq.desktop}{
        padding-right: 8rem;
        padding-bottom: 12rem;
    }
`

export const ImageWrapper = styled.div`
    height: 30rem;

    ${({ theme }) => theme.mq.tablet}{
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        position: absolute;
    }
`