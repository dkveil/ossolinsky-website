import styled, { keyframes } from "styled-components";

const LoadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Wrapper = styled.div`
    position: fixed;
    display: grid;
    place-items: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.35);
    z-index: ${({ theme }) => theme.zindex.alerts};
`

export const LoadingRing = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    color: black;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: ${LoadingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }

    div:nth-child(1) {
        animation-delay: -0.45s;
    }
    div:nth-child(2) {
        animation-delay: -0.3s;
    }
    div:nth-child(3) {
        animation-delay: -0.15s;
    }
`