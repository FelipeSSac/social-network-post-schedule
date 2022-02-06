import { Dispatch, SetStateAction } from 'react';

import { IScheduleFormData } from '../../../../pages/NewSchedule/interfaces/IScheduleFormData';

export interface IPostDateProps {
  setFormData: Dispatch<SetStateAction<IScheduleFormData>>;
}
