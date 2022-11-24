import styled, { keyframes } from "styled-components";

const appear = keyframes`
    from {
        transform: translateY(100%);
    }
    to{
        transform: translateY(0);
    }
`

export const Wrapper = styled.div`
    padding: 2rem;
    max-width: 400px;
    width: 100%;
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.text};
    border-top: 1px solid ${({ theme }) => theme.color.black};
    z-index: ${({ theme }) => theme.zindex.cookiesinfo};
    font-size: 1.2rem;
    line-height: 2.4rem;
    animation: ${appear} 1s ease;
    transform: ${({ hide }) => hide ? 'translateY(100%)' : 'translateY(0)'};
    transition: transform 1s ease;

    div{
        display: flex;
        gap: 1rem;
    }

    p{
        margin-bottom: 2rem;
    }

    @media (min-width: 401px) {
        border: solid ${({ theme }) => theme.color.black};
        border-width: 1px 0 1px 1px;
    }
`