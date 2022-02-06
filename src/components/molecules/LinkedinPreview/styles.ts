import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  flex: none;
  max-width: 23rem;
  height: fit-content;
  padding: 0.875rem 0 0;

  border: 1px solid var(--secondary-gray);
  border-radius: 0.2rem;
  background-color: #fff;

  .linkedin-preview__header{
    width: 92%;
    height: fit-content;
    margin: 0 auto;

    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .linkedin-preview__header__icon-container{
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #2E92EF;
    border-radius: 50%;
  }

  .linkedin-preview__header__icon{
    width: 60%;
    height: auto;
  }

  .linkedin-preview__header__name,
  .linkedin-preview__text{
    font-size: 0.875rem;
    font-weight: 500;
    word-wrap: break-word;
  }

  .linkedin-preview__header__name{
    color: #000;
  }

  .linkedin-preview__header__date{
    color: var(--tertiary-gray);
    font-size: 0.75rem;
    font-weight: 400;
  }

  .linkedin-preview__text{
    width: 90%;
    margin: 1rem auto 0;

    display: block;

    color: var(--primary-dark);
    white-space: pre-line;
  }

  .linkedin-preview__image{
    width: calc(100% + 2px);
    height: auto;
    max-height: 23rem;
    margin: 1rem 0 0;

    position: relative;
    left: -1px;

    display: block;

    object-fit: cover;
  }

  .linkedin-preview__comments{
    width: 90%;
    height: fit-content;
    margin: 0.5rem auto 0;

    display: block;

    color: var(--tertiary-gray);
    font-size: 0.75rem;
    font-weight: 400;
  }

  .linkedin-preview__action-container{
    width: 100%;
    margin: 0.5rem 0 0;
    padding: 0.5rem 0.875rem;

    display: flex;
    gap: 0.875rem;
    align-items: center;

    border-top: 1px solid var(--secondary-gray);
  }

  .linkedin-preview__like{
    width: 1rem;
    height: 1rem;
  }

  .linkedin-preview__comment{
    width: 1rem;
    height: 1rem;
  }

  .linkedin-preview__share{
    width: 1.1225rem;
    height: 1rem;
  }
`;
