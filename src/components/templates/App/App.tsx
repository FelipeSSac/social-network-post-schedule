import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { PostProvider } from '../../../contexts/Post';
import { Layout } from '../Layout';

import { GlobalStyles } from '../../../assets/styles/GlobalStyles';

export default function App() {
  return (
    <StrictMode>
      <PostProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
        <GlobalStyles />
        <ToastContainer />
      </PostProvider>
    </StrictMode>
  );
}
