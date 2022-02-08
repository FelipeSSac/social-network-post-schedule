import { Route, Routes } from 'react-router';

import { Home } from '../pages/Home';
import { NewSchedule } from '../pages/NewSchedule';
import { ListSchedules } from '../pages/ListSchedules';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newSchedule" element={<NewSchedule />} />
      <Route path="/listSchedules" element={<ListSchedules />} />
    </Routes>
  );
}
