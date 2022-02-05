import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 35.25rem;

  .post-preview__empty-text {
    width: 90%;
    max-width: 380.52px;
    margin: 2.5rem auto 0;

    color: var( --tertiary-gray);
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }

  .post-preview__empty-img {
    width: 70%;
    max-width: 18.925rem;
    height: auto;
    aspect-ratio: 18.925 / 23.078125;
    margin: 2rem auto 0;

    display: block;
  }
`;
