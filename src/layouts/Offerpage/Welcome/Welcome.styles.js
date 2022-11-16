import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: ${({ theme }) => theme.height.mobileHeader};
    background-color: ${({ theme }) => theme.color.white};

    ${({ theme }) => theme.mq.tablet}{
        position: relative;
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
        margin-left: 50%;
        width: 50%;
        padding-left: 4rem;
        align-items: flex-start;
        height: 100%;
        justify-content: center;

    }
    ${({ theme }) => theme.mq.desktop}{
        padding-left: 8rem;
        padding-bottom: 12rem;
    }
`

export const ImageWrapper = styled.div`
    height: 30rem;
    position: relative;

    ::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.2);
    }

    ${({ theme }) => theme.mq.tablet}{
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        position: absolute;
    }
`