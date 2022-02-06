import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 35.25rem;
  padding: 2.5rem 0 0;

  .post_preview__posts-container{
    width: 100%;
    height: 100%;
    padding: 0 0.5rem 0.5rem 0;

    overflow: auto;

    display: flex;
    gap: 0.5rem;

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
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

  .post-preview__empty-text {
    width: 90%;
    max-width: 380.52px;
    margin: 0 auto;

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
