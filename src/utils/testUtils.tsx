import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { PostProvider } from '../contexts/Post';

const renderWithContext: FC = ({ children }) => (
  <PostProvider>
    {children}
  </PostProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: renderWithContext, ...options });

export * from '@testing-library/react';
export { customRender as render };
