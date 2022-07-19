import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;

        margin: 0;
        padding: 0;
    }

    :focus {
        outline: none;
    }

    body {
        background: ${({ theme }) => theme["gray-900"]};
        color: ${({ theme }) => theme["gray-100"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
`;
