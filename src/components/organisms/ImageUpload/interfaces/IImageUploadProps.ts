import { Dispatch, SetStateAction } from 'react';

import { IScheduleFormData } from '../../../../pages/NewSchedule/interfaces/IScheduleFormData';

export interface IImageUploadProps {
  setFormData: Dispatch<SetStateAction<IScheduleFormData>>;
}
