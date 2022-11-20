import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    height: 39rem;

`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    hr {
        border: none;
        border-top: 1px solid ${({ theme }) => theme.color.black};
        margin-bottom: 2rem;
    }
`

export const SocialsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h5{
        font-size: 2.4rem;
        line-height: 3rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.color.black};
    }
    div{
        display: flex;
        gap: 2rem;
    }

`