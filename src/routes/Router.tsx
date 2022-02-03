import { Route, Routes } from 'react-router';

import { Home } from '../pages/Home';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/as" element={<Home />} />
    </Routes>
  );
}
