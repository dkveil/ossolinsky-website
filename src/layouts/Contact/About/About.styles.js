import styled from "styled-components";

export const Wrapper = styled.section`
    margin-top: ${({ theme }) => theme.height.mobileHeader};
    background-color: ${({ theme }) => theme.color.white};

    ${({ theme }) => theme.mq.desktop}{
        margin-top: ${({ theme }) => theme.height.desktopHeader};

    }
`

export const ImageWrapper = styled.div`
    max-height: 45rem;
    display: flex;
    justify-content: center;
    align-items:center;
`

export const ContentWrapper = styled.div`
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const ContactDetails = styled.address`
    display: flex;
    flex-direction: column;
    font-style: normal;
    color: ${({ theme }) => theme.color.black};
    font-weight: 700;
    font-size: 1.4rem;
    gap: 1.5rem;
`

export const SocialMediaDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    span{
        font-weight: 700;
        font-size: 1.4rem;
    }
    div{
        display: flex;
        gap: 2rem;
    }
`