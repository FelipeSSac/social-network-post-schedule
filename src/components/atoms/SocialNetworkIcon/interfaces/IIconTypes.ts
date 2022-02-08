import { ReactElement } from 'react';

export interface IIconTypes {
  Instagram: {
    color: string;
    icon: ReactElement;
  },
  Linkedin: {
    color: string;
    icon: ReactElement;
  },
  Youtube: {
    color: string;
    icon: ReactElement;
  },
  Pinterest: {
    color: string;
    icon: ReactElement;
  },
  Twitter: {
    color: string;
    icon: ReactElement;
  },
  Facebook: {
    color: string;
    icon: ReactElement;
  }
}

export type IIconTypesKeys = keyof IIconTypes;
