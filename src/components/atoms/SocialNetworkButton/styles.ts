import styled from 'styled-components';

export const Container = styled.button`
  width: 2.0625rem;
  height: 2.0625rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1px solid var(--secondary-gray);
  outlined: 0;
  background: #fff;
  cursor: pointer;
  transition:
    filter .2s ease,
    background .2s ease,
    border .2s ease;

  .social-network-button__icon{
    height: 60%;
    width: auto;
    max-width: 60%;

    .svg-fill{
      fill: #333333;
      transition: fill .2s ease;
    }
  }

  &:not(:disabled):hover{
    background: #FFF3E0;
    border: 1px solid #EF9F2E;

    .svg-fill{
      fill: #EF9F2E;
    }
  }

  &:not(:disabled):active{
    background: linear-gradient(135deg, #EF9F2E 25%, #E02B4B 105.56%);
    border: 1px solid #EF9F2E;

    .svg-fill{
      fill: #FFF;
    }
  }

  &:disabled {
    background: #DDDDDD;
    filter: opacity(0.7);
    cursor: not-allowed;

    .social-network-button__icon{
      .svg-fill{
        fill: #989898;
      }
    }
  }
`;
