import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1.34375rem 0 1.625rem;

  position: relative;

  border-radius: 0.2rem;
  border: 1px dashed var(--secondary-gray);

  .image-upload__close{
    position: absolute;
    top: 0.5rem;
    right: 1rem;

    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  .image-upload__cloud,
  .image-upload__text,
  .image-upload__button{
    display: block;
  }

  .image-upload__cloud{
    width: 2.8225rem;
    height: 1.875625rem;
    margin: 0 auto;

  }

  .image-upload__text{
    width: fit-content;
    max-width: 80%;
    margin: 1.28rem auto 0;

    display: block;

    color: var(--tertiary-gray);
    font-size: 1rem;
    word-wrap: break-word;
  }

  .image-upload__button{
    height: 2rem;
    margin: 1.875rem auto 0;
  }

  .image-upload__input{
    display: none;
  }
`;
