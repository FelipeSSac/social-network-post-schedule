import { Component, ReactNode } from 'react';

export interface IPostProviderProps{
  children: ReactNode | Component<any> | string;
}
