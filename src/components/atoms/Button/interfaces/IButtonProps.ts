import { ButtonHTMLAttributes } from 'react';

import { IStyledProps } from './IStyledProps';

interface IButtonProps
  extends
  ButtonHTMLAttributes<HTMLButtonElement>,
  IStyledProps {}

export type { IButtonProps };
