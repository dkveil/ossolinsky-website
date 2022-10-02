import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    font-family: ${({ theme }) => theme.font.family};
    display: inline-flex;
    font-size: 1.2rem;
    text-transform: uppercase;
    outline: none;
    border: none;

    ${({ isLink }) => {
        if (isLink) {
            return css`
                a {
                    padding: 12px 26px;
                    text-decoration: none;
                    color: inherit;
                }
            `

        } else {
            return css`
                padding: 12px 26px;
            `
        }
    }}

    ${({ variant, theme }) => {
        switch (variant) {
            case 'contained-outlined':
                return css`
                    font-weight: 600;
                    background-color: ${theme.color.black};
                    color: ${theme.color.white};
                    border: 1px solid ${theme.color.white};
                `
            default:
                return null;
        }
    }}
`