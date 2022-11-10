import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: ${({ theme }) => theme.height.mobileHeader};
    background-color: ${({ theme }) => theme.color.white};

    ${({ theme }) => theme.mq.tablet}{
        display: flex;
        align-items: center;
        height: 700px;
    }

    ${({ theme }) => theme.mq.desktop}{
        margin-top: ${({ theme }) => theme.height.desktopHeader};
        height: calc(100vh - ${({ theme }) => theme.height.desktopHeader});
    }
`

export const ImageWrapper = styled.div`
    height: 45rem;
    display: flex;
    justify-content: center;
    align-items:center;

    ${({ theme }) => theme.mq.tablet}{
        height: 100%;
        max-height: unset;
        width: 42%;
    }
`

export const ContentWrapper = styled.div`
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    ${({ theme }) => theme.mq.tablet}{
        width: 58%;
        padding: 0 4rem 0 4rem;
    }

    ${({ theme }) => theme.mq.desktop}{
        gap: 4rem;
        width: calc(80vw / 100 * 58);
        justify-content: center;
        padding-right: 0;
        padding-left: 12rem;
        max-width: calc(1240px / 100 * 58)
    }
`

export const ContactDetails = styled.address`
    display: flex;
    flex-direction: column;
    font-style: normal;
    color: ${({ theme }) => theme.color.black};
    font-weight: 700;
    font-size: 1.4rem;
    gap: 1.5rem;

    ${({ theme }) => theme.mq.desktop}{
        font-size: 1.6rem;
    }
`

export const SocialMediaDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    span{
        font-weight: 700;
        font-size: 1.4rem;

        ${({ theme }) => theme.mq.desktop}{
            font-size: 1.6rem;
        }
    }
    div{
        display: flex;
        gap: 2rem;
    }
`