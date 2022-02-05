import { ButtonHTMLAttributes } from 'react';

import { IButtonTypesKeys } from './IButtonTypes';

export interface ISocialNetworkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  socialNetwork: IButtonTypesKeys;
}
