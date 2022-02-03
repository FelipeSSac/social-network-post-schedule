import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --primary-beige: #FAFAFA;
  }

  html {
    font-size: 16px;
  }

  body, button, input, textarea {
    font-family: 'Poppins', sans-serif;
  }
`;
