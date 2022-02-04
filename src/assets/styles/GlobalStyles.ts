import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --primary-beige: #FAFAFA;
    --primary-gray: #E0E0E0;
    --primary-dark: #333333;
    --primary-blue: #2F80ED;
    --primary-orange: #F2994A;
  }

  html {
    font-size: 16px;

    @media (max-width: 1234px) {
      font-size: 82.5%;
    }

    @media (max-width: 1024px) {
      font-size: 75%;
    }

    @media (max-width: 840px) {
      font-size: 70%;
    }

    @media (max-width: 680px) {
      font-size: 65%;
    }

    @media (max-width: 565px) {
      font-size: 60%;
    }

    @media (max-width: 405px) {
      font-size: 55%;
    }
  }

  body, button, input, textarea {
    font-family: 'Poppins', sans-serif;
  }
`;
