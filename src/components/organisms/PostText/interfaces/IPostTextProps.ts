import { Dispatch, SetStateAction } from 'react';

import { IScheduleFormData } from '../../../../pages/NewSchedule/interfaces/IScheduleFormData';

export interface IPostTextProps {
  setFormData: Dispatch<SetStateAction<IScheduleFormData>>;
}
