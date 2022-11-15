import styled from "styled-components";
import { overlay } from 'utils/overlay'
import SearchIcon from 'assets/icons/search.svg'

export const ImageHover = styled.figcaption`
    display: flex;
    flex-direction: column;
    color: white;
    padding: 1.5rem;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: rgba(0, 0, 0, .6);
    transition: opacity .2s ease;

    h4{
        font-size: 1.8rem;
        margin-bottom: .6rem;
        text-transform: uppercase;
        font-weight: 400;

    }

    time{
        font-size: 1.2rem;
    }
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    transition: transform .2s ease;
`

export const Wrapper = styled.figure`
    position: relative;
    width: 100%;
    height: 26rem;
    cursor: pointer;
    overflow: hidden;

    ${overlay(0.2)}

    ${({ theme }) => theme.mq.tablet}{
        width: calc(50% - 1rem);
    }
    ${({ theme }) => theme.mq.desktop}{
        width: calc(33% - .5rem - 3px);
    }
    ${({ theme }) => theme.mq.bigdesktop}{
        width: calc(33% - .5rem - 2px);
    }
    ${({ theme }) => theme.mq.large}{
        width: calc(33% - .5rem - 1px);
    }

    :hover{
        ${ImageHover}{
            opacity: 1;
        }
        ${ImageWrapper}{
            transform: scale(1.1);
        }
    }
`

export const StyledSearchIcon = styled(SearchIcon)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`
