import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 0.9rem;

  .user-box__image{
    width: 2.8125rem;
    height: 2.8125rem;

    border-radius: 50%;
    object-fit: cover;
  }

  .user-box__name{
    max-width: 8rem;

    overflow: hidden;

    text-overflow: ellipsis;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 500;
    color: #000;
  }
`;
