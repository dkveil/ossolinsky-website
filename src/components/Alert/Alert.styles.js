import styled, { keyframes } from "styled-components";

const appear = keyframes`
    from {
        transform: translate(calc(-50% - 1rem),100%);
    }
    to{
        transform: translate(calc(-50% - 1rem),0);
    }
`

const backgroundcolor = {
    error: '#f8d7da',
    success: '#d4edda'
}

const textcolor = {
    error: '#721c24',
    success: '#155724'
}

const bordercolor = {
    error: '#f5c6cb',
    success: '#c3e6cb'
}

export const Wrapper = styled.div`
    position: fixed;
    display: grid;
    text-align: center;
    place-items: center;
    bottom: 0;
    left: 50%;
    transform: ${({ closeanimation }) => closeanimation ? 'translate(calc(-50% - 1rem), 200%)' : 'translate(calc(-50% - 1rem))'};
    width: calc(100% - 4rem);
    max-width: 400px;
    padding: 2rem 4rem;
    margin: 1rem;
    background-color: ${({ type }) => backgroundcolor[type]};
    box-shadow: 0 2px 4px rgba(0,0,0,0.4);
    z-index: ${({ theme }) => theme.zindex.alerts};
    border-radius: 1rem;
    border: ${({ type }) => `1px solid ${bordercolor[type]}`};
    color: ${({ type }) => textcolor[type]};
    font-size: 1.4rem;
    animation: ${appear} 1s ease;
    transition: transform 1s ease;

    svg{
        position: absolute;
        cursor: pointer;
        top: 50%;
        right: 1.2rem;
        transform: translateY(-50%) scale(.75);
        path{
            fill: ${({ type }) => textcolor[type]};
        }
    }
`