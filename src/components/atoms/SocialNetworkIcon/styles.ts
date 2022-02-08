import styled from 'styled-components';

export const Container = styled.div<{ color: string }>`
  width: 2.0625rem;
  height: 2.0625rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: ${({ color }) => color};

  .social-network-icon__icon{
    width: 60%;
    height: auto;
    max-height: 60%;

    .svg-fill{
      fill: #fff;
    }
  }
`;
