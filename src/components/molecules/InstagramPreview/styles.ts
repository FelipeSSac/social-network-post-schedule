import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  flex: none;
  max-width: 23rem;
  height: fit-content;
  padding: 0.875rem 0 1rem;

  border: 1px solid var(--secondary-gray);
  border-radius: 0.2rem;
  background-color: #fff;

  .instagram-preview__header{
    width: 92%;
    height: fit-content;
    margin: 0 auto;

    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .instagram-preview__header__icon-container{
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(187.5deg, #EF2EA2 5.81%, #E0A22B 109.34%);
    border-radius: 50%;
  }

  .instagram-preview__header__icon{
    width: 65%;
    height: auto;
  }


  .instagram-preview__header__name,
  .instagram-preview__text{
    font-size: 0.875rem;
    font-weight: 500;
    word-wrap: break-word;
  }

  .instagram-preview__header__name{
    color: #000;
  }

  .instagram-preview__image{
    width: calc(100% + 2px);
    height: auto;
    max-height: 23rem;
    margin: 1.75rem 0 0;

    position: relative;
    left: -1px;

    display: block;

    object-fit: cover;
  }

  .instagram-preview__text{
    width: 90%;
    margin: 0.75rem auto 0;

    display: block;

    color: var(--primary-dark);
    white-space: pre-line;
  }

  .instagram-preview__actions{
    width: 100%;
    height: fit-content;
    padding: 0.5rem 1rem;

    display: flex;
    gap: 1.125rem;
  }

  .instagram-preview__like{
    width: 1.375rem;
    height: 1.3125rem;
  }

  .instagram-preview__comment{
    width: 1.375rem;
    height: 1.3125rem;
  }

  .instagram-preview__share{
    width: 1.375rem;
    height: 1.5rem;
    margin-left: auto;
  }
`;
