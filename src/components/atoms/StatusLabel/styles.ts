import styled from 'styled-components';
import { IStatusDotProps } from './interfaces/IStatusDotProps';

export const Container = styled.div`
  width: fit-content;
  height: fit-content;

  .status-label__container{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  }


  .status-label__text{
    display: block;

    word-wrap: break-word;
  }
`;

export const StatusDot = styled.span<IStatusDotProps>`
  min-width: 0.75rem;
  min-height: 0.75rem;

  display: block;

  border-radius: 50%;
  background-color: ${({ color }) => color};
`;
