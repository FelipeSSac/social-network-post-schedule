import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Layout } from '../Layout';

import { GlobalStyles } from '../../../assets/styles/GlobalStyles';

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
      <GlobalStyles />
      <ToastContainer />
    </StrictMode>
  );
}
