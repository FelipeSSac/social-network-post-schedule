import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  position: relative;

  .post-text__picker-button{
    width: 1.2rem;
    height: 1.2rem;

    position: absolute;
    top: 0.8rem;
    right: 1rem;

    border: 0;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }

  .post-text__picker-button__image{
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  .post-text__textarea{
    width: 100%;
    height: 9.125rem;
    padding: 0.5rem 2.2rem 0.5rem 0.8rem;

    border: 1px solid var(--secondary-gray);
    border-radius: 0.2rem;
    outline: 0;
    resize: none;

    font-size: 0.875rem;
  }
`;
