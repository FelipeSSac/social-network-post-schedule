import styled from 'styled-components';

import { IStyledProps } from './interfaces/IStyledProps';

export const Container = styled.button<IStyledProps>`
  width: 100%;
  max-width: 11.5rem;
  height: 2.8125rem;

  border-radius: 0.25rem;
  ${({ textOnly, outlined, bgColor }) => {
    if (textOnly) {
      return `
        border: none;
        background-color: transparent;
      `;
    }
    if (outlined) {
      return `
        border: 1px solid ${bgColor || 'var(--primary-blue)'};
        background-color: transparent;
      `;
    }

    return `
      border: 0;
      background-color: ${bgColor || 'var(--primary-blue)'}
    `;
  }};
  cursor: pointer;
  transition: filter .2s;

  color: ${({ textColor }) => textColor || '#FFF'};
  font-size: 1rem;

  &:disabled {
    cursor: not-allowed;
    filter: opacity(0.7);
  }

  &:not(:disabled):hover {
    filter: brightness(0.8);
  }
`;
