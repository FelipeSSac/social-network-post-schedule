import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  max-width: 671px;
  height: fit-content;

  border: 1px solid var(--primary-gray);
  border-radius: 0.25rem;
  background-color: #fff;

  .card__header{
    width: 100%;
    height: fit-content;
    padding: 0.3125rem 0.8125rem 0.25rem;

    border-bottom: 1px solid var(--primary-gray);
  }

  .card__header__title{
    color: var(--primary-dark);
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .card__content{
    width: 100%;
    height: fit-content;
    padding: 1rem 1.25rem 1.1875rem;
  }
`;
