import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    display: inline-block;
    width: fit-content;
    position: relative;
    outline: none;
    border: none;
    background-color: transparent;

    span{
        font-family: ${({ theme }) => theme.font.family};
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        text-transform: uppercase;
        min-width: 16rem;
        width: ${({ width }) => width ? width : 'fit-content'};
        font-weight: 600;
        z-index: 2;

        ${({ isLink }) => {
        if (isLink) {
            return css`
                a {
                    padding: 12px 26px;
                    text-decoration: none;
                    color: inherit;
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                }
            `
        } else {
            return css`
                padding: 12px 26px;
            `
        }
    }}

        ${({ variant, theme, color }) => {

        switch (variant) {
            case 'contained':
                return css`
                    background-color: ${theme.color.black};
                    color: ${theme.color.white};
                    border: 1px solid ${theme.color.black};
                    transition: color .2s ease, background-color .2s ease;
                    :hover{
                        color: ${theme.color.black};
                        background-color: ${theme.color.white};
                        transition: color .2s .2s ease, background-color .2s .2s ease;
                    }

                `
            case 'contained-outlined':
                return css`
                    background-color: ${theme.color.black};
                    color: ${theme.color.white};
                    border: 1px solid ${theme.color.white};
                    transition: color .2s ease, background-color .2s ease;
                    :hover{
                        color: ${theme.color.black};
                        background-color: ${theme.color.white};
                    }
                `
            case 'outlined':
                return css`
                    border: 1px solid ${theme.color.black};
                    color: ${theme.color.black};
                    background-color: ${color === "white" ? theme.color.white : theme.color.gray};
                    transition: color .2s ease, background-color .2s ease;
                    :hover{
                        color: ${theme.color.white};
                        background-color: ${theme.color.black};
                        transition: color .2s .2s ease, background-color .2s .2s ease;
                    }
                `
            case 'full-outlined':
                return css`
                    background-color: transparent;
                    border: 1px solid ${theme.color.white};
                    text-shadow: 0 0 2px ${theme.color.black};
                    color: ${theme.color.white};
                    transition: color .2s ease, background-color .2s ease;
                    :hover{
                        color: ${theme.color.black};
                        background-color: ${theme.color.white};
                        text-shadow: none;
                    }
                `
            case 'full-contained':
                return css`
                    background-color: ${theme.color.black};
                    color: ${theme.color.white};
                `
            default:
                return null;
        }
    }}}

        ${({ boxOverlay, boxOverlayColor, isLink, theme }) => {
        if (boxOverlay) {
            const boxOverlayStyles = () => (
                css`
                    &:hover::after{
                        transform: translate(0, 0);
                        transition: transform .2s  ease;

                    }

                    &::after{
                        content: '';
                        position: absolute;
                        pointer-events: none;
                        top: 0;
                        left: 0;
                        background-color: ${boxOverlayColor === "white" ? theme.color.white : theme.color.black};
                        width: 100%;
                        height: 100%;
                        z-index: 0;
                        border: 1px solid ${theme.color.black};
                        transition: transform .2s .2s ease;

                        ${() => {
                        switch (boxOverlay) {
                            case 'bottom-left':
                                return css`
                                        transform: translate(-1rem, 1rem);
                                    `
                            case 'bottom-right':
                                return css`
                                    transform: translate(1rem, -1rem);
                                `
                        }
                    }}
                    }
                `
            )

            if (isLink) {
                return css`
                    position: relative;
                    ${boxOverlayStyles}

                `
            }
        }
    }}


`