import { ReactElement } from 'react';

export interface IButtonTypes {
  instagram: {
    label: string;
    icon: ReactElement;
  };
  linkedin: {
    label: string;
    icon: ReactElement;
  };
  youtube: {
    label: string;
    icon: ReactElement;
  };
  pinterest: {
    label: string;
    icon: ReactElement;
  };
  twitter: {
    label: string;
    icon: ReactElement;
  };
  facebook: {
    label: string;
    icon: ReactElement;
  };
}

export type IButtonTypesKeys = keyof IButtonTypes;
