import styled from "styled-components";
import { overlay } from 'utils/overlay';

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 45rem;
    background-color: yellow;
    overflow: hidden;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;

    ${overlay(0.2)}

    video {
        height: auto;
        width: 100%;
    }
`