import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  max-width: 54.5rem;
  height: fit-content;
  padding: 3.5625rem 0 3.875rem;

  background-color: var(--primary-beige);
  border: 1px solid var(--primary-gray);
  border-radius: 0.25rem;

  .success-schedule-modal__img{
    width: 100%;
    max-width: 12.3125rem;
    height: auto;
    aspect-ratio: 197 / 192;
    margin: 0 auto;

    display: block;
  }

  .success-schedule-modal__title{
    width: fit-content;
    height: fit-content;
    margin: 0 auto;

    display: block;

    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .success-schedule-modal__button{
    margin: 1.3125rem auto 0;
    display: block;
  }
`;
