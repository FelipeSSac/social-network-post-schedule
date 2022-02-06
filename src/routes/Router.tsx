import { Route, Routes } from 'react-router';

import { Home } from '../pages/Home';
import { NewSchedule } from '../pages/NewSchedule';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newSchedule" element={<NewSchedule />} />
    </Routes>
  );
}
