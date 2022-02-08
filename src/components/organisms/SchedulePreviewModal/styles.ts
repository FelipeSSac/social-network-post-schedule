import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  gap: 1rem;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
