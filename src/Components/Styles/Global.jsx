import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    /* width: 100vw; */
    font-family: 'Montserrat', sans-serif;
    scrollbar-width: none;
      &::-webkit-scrollbar{
          display: none;
      }
    scroll-behavior: smooth !important;
    scroll-snap-type: y mandatory;
}
html {
      box-sizing: border-box;
      /* text-align: center; */
      background-color: ${(props) => props.theme?.bg_clr};
      color: ${(props) => props.theme?.fnt_clr};
    }
    *, *::before, *::after {
      box-sizing: inherit;
      font-family: 'Montserrat', sans-serif;
    }
    body, h1, h2, h3, h4, h5, h6, p, ol, ul, div, main, nav, section, header, footer {
      margin: 0;
      padding: 0;
      font-weight: normal;
    }
    ol, ul {
      list-style: none;
    }
    /* img {
      max-width: 100%;
      height: auto;
    } */
    a, a:visited, a:hover {
      text-decoration: none;
      /* font-family: 'Roboto', sans-serif; */
      font-family: 'Montserrat', sans-serif;

    }
    input, &::placeholder, a, textarea {
        color: ${(props) => props.theme?.bg_clr};
        /* font-family: 'Roboto', sans-serif; */
        font-family: 'Montserrat', sans-serif;

    }
    input, textarea {
        background-color: ${(props) => props.theme?.fnt_clr};
        font-family: 'Montserrat', sans-serif;
        /* font-family: 'Roboto', sans-serif; */
    }
    .App{
      height: 100vh;
    }
    button{
      font-family: 'Montserrat', sans-serif;
    }
`;