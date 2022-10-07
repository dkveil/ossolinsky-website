import styled from "styled-components";

export const Wrapper = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 6rem 0 8rem;
    background-color: ${({ theme }) => theme.color.white};

    ${({ theme }) => theme.mq.desktop}{
        background-color: ${({ theme }) => theme.color.gray};
        padding: 6rem 0;
    }
`

export const ContactDetails = styled.address`
    font-style: normal;
    text-align: center;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.black};
    margin: 2rem 0 3rem;

    ${({ theme }) => theme.mq.desktop}{
        margin: 2rem 0 ;
    }
`

export const CopyrightDetails = styled.small`
    text-align: center;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.text};
`

export const IconsWrapper = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
`