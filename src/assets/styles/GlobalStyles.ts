import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --primary-blue: #2F80ED;
    --primary-orange: #F2994A;
    --primary-beige: #FAFAFA;
    --primary-gray: #E0E0E0;
    --secondary-gray: #949494;
    --tertiary-gray: #828282;
    --primary-dark: #333333;
  }

  html {
    overflow-y: auto;
    overflow-x: hidden;

    font-size: 16px;

    &::-webkit-scrollbar {
      width: 8px;
      border-radius: 0.2rem;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--secondary-gray);

      &:hover {
        background-color: var(--primary-dark);
      }
    }

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

    color: var(--primary-dark);

    &::placeholder {
      color: var(--tertiary-gray);
    }
  }

  textarea {
    &::-webkit-scrollbar {
      width: 8px;
      border-radius: 0.2rem;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--secondary-gray);

      &:hover {
        background-color: var(--primary-dark);
      }
    }
  }
`;
