import { ReactElement } from 'react';

export interface IButtonTypes {
  Instagram: {
    label: string;
    icon: ReactElement;
  };
  Linkedin: {
    label: string;
    icon: ReactElement;
  };
  Youtube: {
    label: string;
    icon: ReactElement;
  };
  Pinterest: {
    label: string;
    icon: ReactElement;
  };
  Twitter: {
    label: string;
    icon: ReactElement;
  };
  Facebook: {
    label: string;
    icon: ReactElement;
  };
}

export type IButtonTypesKeys = keyof IButtonTypes;
