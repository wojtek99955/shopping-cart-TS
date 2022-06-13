import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');
        font-family: 'Roboto', sans-serif;
    }
`;
