import styled from 'styled-components';

import { IStylesProps } from './interfaces/IStylesProps';

export const Container = styled.div<IStylesProps>`
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  inset: 0;
  z-index: 100;

  background-color: rgba(0, 0, 0, 0.4);
  animation: fade-in 0.3s ease;

  ${({ close }) => close && 'animation: fade-out 0.3s ease;'}
`;
