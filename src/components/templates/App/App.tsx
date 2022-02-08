import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { PostProvider } from '../../../contexts/Post';
import { Layout } from '../Layout';

import { GlobalStyles } from '../../../assets/styles/GlobalStyles';

export default function App() {
  return (
    <StrictMode>
      <PostProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Toaster />
          <Layout />
        </BrowserRouter>
      </PostProvider>
    </StrictMode>
  );
}
