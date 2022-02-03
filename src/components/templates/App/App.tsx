import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from '../Layout';

import { GlobalStyles } from '../../../assets/styles/GlobalStyles';

export default function App() {
  return (
    <StrictMode>
      <GlobalStyles />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </StrictMode>
  );
}
