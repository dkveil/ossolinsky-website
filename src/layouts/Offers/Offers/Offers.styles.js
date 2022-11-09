import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 3rem 0;
    background-color: ${({ theme }) => theme.color.gray};
`

export const OfferWrapper = styled.div`
    padding-bottom: 5rem;
`

export const OfferImageWrapper = styled.div`
    height: 25rem;
    margin-bottom: 3rem;
`

export const OfferContentWrapper = styled.div`
    a{
        color: inherit;
        text-decoration: none;
    }
    h3{
        text-transform: uppercase;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.color.black};
        margin-bottom: 2rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 2.8rem;
        color: ${({ theme }) => theme.color.text};
        margin-bottom: 6rem;
    }
`