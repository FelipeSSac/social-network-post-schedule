import { Dispatch, SetStateAction } from 'react';

import { IScheduleFormData } from '../../../../pages/NewSchedule/interfaces/IScheduleFormData';

export interface IPostSocialNetworkProps {
  setFormData: Dispatch<SetStateAction<IScheduleFormData>>;
}
