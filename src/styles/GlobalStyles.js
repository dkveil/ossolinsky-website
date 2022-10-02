import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }
    body,h1,h2,h3,h4,h5,h6,a,ul,button,p,span,form,input,textarea {
        font-family: ${({ theme }) => theme.font.family};
    }

`